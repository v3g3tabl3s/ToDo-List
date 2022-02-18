import { $content } from "./index";

const renderProjects = (() => {
    const $projContainer = document.createElement("div");
    $projContainer.classList.add("main-container");
    $projContainer.innerHTML = `    
    <div class="todo-list" data-list-display-container>
        <div class="todo-header">
            <h2 class="list-title" data-list-title>Test1</h2>
            <p class="task-count" data-list-count>3 tasks remaining</p>
        </div>
        <div class="todo-body">
            <div class="tasks" data-tasks>
                <div class="task">
                    <input type="checkbox" id="task-1" />
                    <label for="task-1">
                        <span class="custom-checkbox">
                        </span>Clean stuff
                    </label>
                    <div class="side-task-container">
                        <!-- <label for = "task-3">2/11/2022</label> -->
                        <div class="task-date">3/11/2022</div>
                        <i class='bx bx-edit'></i>
                        <i class='bx bx-trash'></i>
                    </div>


                </div>
                <!-- task 1 -->
                <div class="task">
                    <input type="checkbox" id="task-2" />
                    <label for="task-2">
                        <span class="custom-checkbox">
                        </span>Build Things
                    </label>

                    <div class="side-task-container">
                        <!-- <label for = "task-3">2/11/2022</label> -->
                        <div class="task-date">2/14/2022</div>
                        <i class='bx bx-edit'></i>
                        <i class='bx bx-trash'></i>
                    </div>

                </div>
                <!-- task 2 -->
                <div class="task">
                    <input type="checkbox" id="task-3" />
                    <label for="task-3">
                        <span class="custom-checkbox"></span>Fix everything
                    </label>


                    <div class="side-task-container">
                        <!-- <label for = "task-3">2/11/2022</label> -->
                        <div class="task-date">2/11/2022</div>
                        <i class='bx bx-edit'></i>
                        <i class='bx bx-trash'></i>
                    </div>

                </div>
                <!-- task 3 -->
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
    </div>`

    $content.appendChild($projContainer);
})


export {renderProjects};