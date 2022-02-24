/* eslint-disable import/no-cycle */
import { $content } from './index';

const renderProjects = (() => {
  const $projContainer = document.createElement('div');
  $projContainer.classList.add('main-container');
  $projContainer.innerHTML = `    
    <div class="todo-list" data-list-display-container>
        <div class="todo-header">
            <h2 class="list-title" data-list-title>Example, if here, broken</h2>
            <p class="task-count" data-list-count>3 tasks remaining</p>
        </div>
        <div class="todo-body">
            <div class="tasks" data-tasks>
            </div>
            <div class="new-task-maker">
                <form action="" data-new-task-form>
                    <input type="text" class="new-task" data-new-task-input placeholder="new task name"
                        aria-label="new-task-name" />
                    <button class="btn-proj-task" aria-label="new-task-name">+</button>
                </form>
            </div>
            <div class="delete-stuff">
                <button class="btn-delete" data-clear-complete-tasks-button>Clear completed tasks</button>
                <button class="btn-delete" data-delete-project-button>Delete project</button>
            </div>

        </div>
    </div>`;

  $content.appendChild($projContainer);
});

export { renderProjects };
export default renderProjects;
