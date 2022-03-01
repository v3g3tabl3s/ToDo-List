/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
// import { getDate } from 'date-fns';
import { renderSidebar } from './sidebar';
import { renderProjects } from './projects';
import { renderEditModal } from './editModal';

// console.log("Testing todolist git");

const $content = document.querySelector('#content');

renderProjects();
renderSidebar();
//

const $projContainer = document.querySelector('[data-lists');
const $newProjForm = document.querySelector('[data-new-proj-form]');
const $newProjInput = document.querySelector('[data-new-proj-input]');
const $deleteProjBtn = document.querySelector('[data-delete-project-button]');
const $projDisplayContainer = document.querySelector('[data-list-display-container]');
const $projTitleElement = document.querySelector('[data-list-title]');
const $projCountElement = document.querySelector('[data-list-count]');
const $tasksContainer = document.querySelector('[data-tasks]');
const $taskTemplate = document.getElementById('task-template');
const $newTaskForm = document.querySelector('[data-new-task-form]');
const $newTaskInput = document.querySelector('[data-new-task-input]');
const $clearCompleteTasksBtn = document.querySelector('[data-clear-complete-tasks-button]');
const $overlay = document.getElementById('overlay');

const LOCAL_STORAGE_LIST_KEY = 'task.projects';
const LOCAL_STORAGE_SELECTED_PROJ_ID_KEY = 'task.selectedProjId';
let projs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedProjId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJ_ID_KEY);

$projContainer.addEventListener('click', (e) => {
  if (e.currentTarget.tagName.toLowerCase() === 'ul') {
    switch (e.target.tagName.toLowerCase()) {
      case 'a':
        // console.log(e.target.parentElement);
        selectedProjId = e.target.parentElement.dataset.listId;
        break;
      case 'span':
        // console.log(e.target.parentElement.parentElement);
        selectedProjId = e.target.parentElement.parentElement.dataset.listId;
        break;
      case 'div':
        if (e.target.className === 'taskNumbers') {
        //   console.log(e.target.parentElement.parentElement.parentElement);
          selectedProjId = e.target.parentElement.parentElement.parentElement.dataset.listId;
        } else {
        //   console.log(e.target.parentElement.parentElement);
          selectedProjId = e.target.parentElement.parentElement.dataset.listId;
        }
        break;
      default:
        break;
    }
    // console.log(selectedProjId);
    saveAndRender();
  }
});

$tasksContainer.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'input') {
    // console.log(e.target.tagName.toLowerCase())
    // console.log(e.target.id)
    const selectedProj = projs.find((proj) => proj.id === selectedProjId);
    const selectedTask = selectedProj.tasks.find((task) => task.id === e.target.id);
    selectedTask.complete = e.target.checked;
    // console.log(selectedProj)
    save();
    renderTaskCount(selectedProj);

    // figure out how to re-render task count in sidebar menu without re rendering whole page
  }
});

$clearCompleteTasksBtn.addEventListener('click', () => {
  const selectedProj = projs.find((proj) => proj.id === selectedProjId);
  selectedProj.tasks = selectedProj.tasks.filter((task) => !task.complete);
  saveAndRender();
});

// selects all lists that are not selected
$deleteProjBtn.addEventListener('click', () => {
  projs = projs.filter((proj) => proj.id !== selectedProjId);
  selectedProjId = null;

  if (projs.length === 0) {
    const defaultProj = createProj('Default');
    projs.push(defaultProj);
  }
  saveAndRender();
});

$newProjForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const projName = $newProjInput.value;
  if (projName == null || projName === '') return;
  const proj = createProj(projName);
  $newProjInput.value = null;
  //   console.log();
  projs.push(proj);
  saveAndRender();
});

$newTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskName = $newTaskInput.value;
  if (taskName == null || taskName === '') return;
  const task = createTask(taskName);
  $newTaskInput.value = null;
  const selectedProj = projs.find((proj) => proj.id === selectedProjId);
  selectedProj.tasks.push(task);
  saveAndRender();
});

function createProj(name) {
  return { id: Date.now().toString(), name, tasks: [] };
}

function createTask(name) {
  const due = new Date();
  due.setDate(due.getDate() + 7);
  return {
    id: Date.now().toString(), name, dueDate: due.toLocaleDateString(), complete: false, priority: 'low',
  };
}

function saveAndRender() {
  save();
  render();
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(projs));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJ_ID_KEY, selectedProjId);
}

function render() {
  clearElement($projContainer);
  // console.log(projs.length);

  renderProj();
  const selectedProj = projs.find((proj) => proj.id === selectedProjId);

  if (selectedProjId == null) {
    $projDisplayContainer.style.display = 'none';
  } else {
    $projDisplayContainer.style.display = '';
    $projTitleElement.innerText = selectedProj.name;
    renderTaskCount(selectedProj);
    clearElement($tasksContainer);
    renderTasks(selectedProj);
  }
}

function renderTasks(selectedProj) {
  selectedProj.tasks.forEach((task, index, object) => {
    const $taskElement = document.importNode($taskTemplate.content, true);
    const $taskDiv = $taskElement.querySelector('div');

    if (task.priority === 'low') {
      $taskDiv.classList.add('low-priority');
    }
    if (task.priority === 'med') {
      $taskDiv.classList.add('med-priority');
    }
    if (task.priority === 'high') {
      $taskDiv.classList.add('high-priority');
    }

    $taskDiv.classList.add('low-priority');

    // console.log($taskDiv.;
    const $checkbox = $taskElement.querySelector('input');
    $checkbox.id = task.id;
    $checkbox.checked = task.complete;
    const $label = $taskElement.querySelector('label');
    $label.htmlFor = task.id;
    $label.append(task.name);
    const $taskDate = $taskElement.getElementById('dueDate');
    $taskDate.innerText = task.dueDate;

    const $editTask = $taskElement.getElementById('taskEdit');
    $editTask.addEventListener('click', () => {
      const $editModal = document.getElementById('edit-modal');
      renderEditModal();
      openEditModal($editModal);
      // console.log($closeEditModalBtns);
    });

    const $deleteTask = $taskElement.getElementById('taskDelete');
    $deleteTask.addEventListener('click', () => {
      $taskDiv.className = '';
      // $taskDiv.classList.remove('low-priority')
      object.pop(index);
      save();
      renderTaskCount(selectedProj);
      clearElement($taskDiv);
    });

    if (task.complete === true) { $taskDate.classList.add('checked'); }
    $tasksContainer.appendChild($taskElement);
  });
}

function openEditModal($editModal) {
  if ($editModal == null) return;

  $editModal.classList.add('active');
  $overlay.classList.add('active');
  const $closeEditModalBtn = document.getElementById('close-btn');

  $closeEditModalBtn.addEventListener('click', () => {
    $editModal.classList.remove('active');
    $overlay.classList.remove('active');
  });
}

function renderTaskCount(selectedProj) {
  const incompleteTaskCount = selectedProj.tasks.filter((task) => !task.complete).length;
  const taskString = incompleteTaskCount === 1 ? 'task' : 'tasks';
  $projCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;

  const totalProjs = document.getElementsByClassName('taskNumbers');

  for (let i = 0; i < totalProjs.length; i++) {
    if (selectedProj.name === document.getElementsByClassName('taskNumbers')[i].parentElement.nextElementSibling.innerText) {
      totalProjs[i].innerText = incompleteTaskCount;
    }
  }
}

function renderProj() {
  projs.forEach((proj) => {
    const $projElement = document.createElement('li');
    $projElement.dataset.listId = proj.id;
    $projElement.classList.add('list-name');
    if (proj.id === selectedProjId) {
      $projElement.classList.add('active');
    }

    const $projElementLink = document.createElement('a');
    $projElementLink.href = '#';

    const $projBadge = document.createElement('div');
    $projBadge.classList.add('badge');

    const $projTaskNum = document.createElement('div');
    $projTaskNum.classList.add('taskNumbers');
    $projTaskNum.innerText = proj.tasks.filter((task) => !task.complete).length;

    const $projSpan = document.createElement('span');
    $projSpan.classList.add('proj_links');
    $projSpan.innerText = proj.name;

    $projBadge.appendChild($projTaskNum);

    $projElementLink.appendChild($projBadge);
    $projElementLink.appendChild($projSpan);

    $projElement.appendChild($projElementLink);

    $projContainer.appendChild($projElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();

export { $content };
export default $content;
