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

  const $projBtn = document.getElementsByClassName('proj-btn')[0];
  const $projMenu = document.getElementsByClassName('proj-list')[0];
  const $projList = Array.from(document.getElementsByClassName('proj-list')[0].children);
  const $downArrow = document.getElementById('down_arrow');
  const $navList = Array.from(document.getElementsByClassName('nav_list')[0].children);
  const $sidebarBtn = document.getElementsByClassName('sidebarBtn')[0];
  const $sidebar = document.getElementsByClassName('sidebar')[0];

  // sidebar menu on/off
  $sidebarBtn.onclick = () => {
    if ($sidebar.className === 'sidebar') {
      $sidebar.classList.add('show');
      $sidebarBtn.classList.add('click');
    } else {
      $sidebar.classList.remove('show');
      $sidebarBtn.classList.remove('click');
    }
  };

  // dropdown menu for projects
  $projBtn.onclick = () => {
    if ($projMenu.className === 'proj-list') {
      $projMenu.classList.add('show');
      $downArrow.classList.add('rotate');
    } else {
      $projMenu.classList.remove('show');
      $downArrow.classList.remove('rotate');
    }
  };

  for (let i = 0; i < $navList.length; i++) {
    switch (i) {
      case 0:
      case 1:
      case 2:
        $navList[i].onclick = () => {
          $navList.forEach((element) => {
            element.classList.remove('active');
          });
          $navList[i].classList.add('active');
          $projMenu.classList.remove('show');
          $downArrow.classList.remove('rotate');
        };
        break;
      case 3:
        $navList[i].onclick = () => {
          $navList.forEach((element) => {
            element.classList.remove('active');
          });
          $navList[i].classList.add('active');

          if ($projMenu.className === 'proj-list show') {
            for (let j = 0; j < $projList.length; j++) {
              $projList[j].onclick = () => {
                //   console.log('proj item clicked');
                $projList.forEach((element) => {
                  element.classList.remove('active');
                });
                $projList[j].classList.add('active');
              };
            }
          } else {
            $navList[i].classList.remove('active');
          }
        };
        break;
      default:
        break;
    }
  }
});

export { renderSidebar };
export default renderSidebar;
