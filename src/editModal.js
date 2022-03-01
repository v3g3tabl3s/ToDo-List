/* eslint-disable import/no-cycle */
import { $content } from './index';

const renderEditModal = (() => {
  const $editContainer = document.createElement('div');
  $editContainer.classList.add('edit-container');
  $editContainer.innerHTML = `
    <div class="edit-modal" id="edit-modal">
    <div class="edit-modal-header">
        <div class="edit-modal-title">Edit task</div>
        <button class = "close-btn" id = "close-btn"><i class='bx bx-x'></i></button>
    </div>
    <div class="edit-modal-body">
        <input id="taskTitle" type="text" maxlength="50" required="" class="task-title-form" placeholder="Title">
        <textarea id="taskDetail" type="text" class="task-detail-form" placeholder="Detail"></textarea>
        <div class="edit-modal-date">
            <label for="taskDate" class="edit-date-label">Due Date:</label>
            <input id="taskDate" class="edit-date-form" type="date">
        </div>
        <div class="edit-modal-submit-container">
            <div class="edit-modal-task-priority">
                <div class="priority-title">Priority:</div>
                <input id="low" type="radio" name="edit-priority" value = "low" required="">
                <label class = "edit-modal-priority-btn edit-modal-priority-btn-low" for="low">Low</label><br>
                <input id="med" type="radio" name="edit-priority" value = "med" required="">
                <label class = "edit-modal-priority-btn edit-modal-priority-btn-med" for="med">Medium</label>
                <input id="high" type="radio" name="edit-priority" value = "high" required="">
                <label class = "edit-modal-priority-btn edit-modal-priority-btn-high" for="high">High</label>
            </div>
            <input id = "edit-modal-submit" class = "edit-modal-submit" type = "submit" value = "Confirm Edit">
        </div>



    </div>
</div>

    `;

  $content.appendChild($editContainer);
});

export { renderEditModal };
export default { renderEditModal };
