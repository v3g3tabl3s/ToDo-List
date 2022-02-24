/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
import { $content } from './index';

const renderSidebar = (() => {
  const $menu = document.createElement('div');
  $menu.classList.add('menu-container');
  $menu.innerHTML = `    <div class="sidebarBtn">
    <span class="fas fa-bars"></span>
</div>
<nav class="sidebar">
    <div class="logo_content">
        <div class="logo">
            <i class='bx bx-list-check'></i>
            <div class="logo_name">ToDo List</div>
        </div>
    </div>

    <ul class="nav_list">
        <li>
            <a href="#">
                <span class="links_name">Home</span>
                
            </a>
        </li>
        <li>
            <a href="#">
                <span class="links_name">Today</span>
                
            </a>
        </li>
        <li>
            <a href="#">
                <span class="links_name">Week</span>
                
            </a>
        </li>
        <li class="projects">
            <a href="#" class="proj-btn">Projects
                <span class="fas fa-caret-down" id="down_arrow"></span>
                
            </a>

            <ul class="proj-list" data-lists>

            </ul>
            <form action = "" data-new-proj-form>
                <input type = "text" class = "new-list" data-new-proj-input
                 placeholder="new project name" aria-label = "new project name"/>
                 <button class = "btn-proj-list" aria-label="create new project">+</button>
            </form>


        </li>
    </ul>
</nav>`;
  $content.appendChild($menu);
});

export { renderSidebar };
export default renderSidebar;
