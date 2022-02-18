(()=>{"use strict";var e={d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{b:()=>t}),console.log("Testing todolist git");const t=document.querySelector("#content");(()=>{const e=document.createElement("div");e.classList.add("main-container"),e.innerHTML='    \n    <div class="todo-list" data-list-display-container>\n        <div class="todo-header">\n            <h2 class="list-title" data-list-title>Test1</h2>\n            <p class="task-count" data-list-count>3 tasks remaining</p>\n        </div>\n        <div class="todo-body">\n            <div class="tasks" data-tasks>\n                <div class="task">\n                    <input type="checkbox" id="task-1" />\n                    <label for="task-1">\n                        <span class="custom-checkbox">\n                        </span>Clean stuff\n                    </label>\n                    <div class="side-task-container">\n                        \x3c!-- <label for = "task-3">2/11/2022</label> --\x3e\n                        <div class="task-date">3/11/2022</div>\n                        <i class=\'bx bx-edit\'></i>\n                        <i class=\'bx bx-trash\'></i>\n                    </div>\n\n\n                </div>\n                \x3c!-- task 1 --\x3e\n                <div class="task">\n                    <input type="checkbox" id="task-2" />\n                    <label for="task-2">\n                        <span class="custom-checkbox">\n                        </span>Build Things\n                    </label>\n\n                    <div class="side-task-container">\n                        \x3c!-- <label for = "task-3">2/11/2022</label> --\x3e\n                        <div class="task-date">2/14/2022</div>\n                        <i class=\'bx bx-edit\'></i>\n                        <i class=\'bx bx-trash\'></i>\n                    </div>\n\n                </div>\n                \x3c!-- task 2 --\x3e\n                <div class="task">\n                    <input type="checkbox" id="task-3" />\n                    <label for="task-3">\n                        <span class="custom-checkbox"></span>Fix everything\n                    </label>\n\n\n                    <div class="side-task-container">\n                        \x3c!-- <label for = "task-3">2/11/2022</label> --\x3e\n                        <div class="task-date">2/11/2022</div>\n                        <i class=\'bx bx-edit\'></i>\n                        <i class=\'bx bx-trash\'></i>\n                    </div>\n\n                </div>\n                \x3c!-- task 3 --\x3e\n            </div>\n            <div class="new-task-maker">\n                <form action="" data-new-task-form>\n                    <input type="text" class="new-task" data-new-task-input placeholder="new task name"\n                        aria-label="new-task-name" />\n                    <button class="btn-proj-task" aria-label="new-task-name">+</button>\n                </form>\n            </div>\n            <div class="delete-stuff">\n                <button class="btn-delete" data-clear-complete-tasks-button>Clear completed tasks</button>\n                <button class="btn-delete" data-delete-project-button>Delete project</button>\n            </div>\n\n        </div>\n    </div>',t.appendChild(e)})(),(()=>{const e=document.createElement("div");e.classList.add("menu-container"),e.innerHTML='    <div class="sidebarBtn">\n    <span class="fas fa-bars"></span>\n</div>\n<nav class="sidebar">\n    <div class="logo_content">\n        <div class="logo">\n            <i class=\'bx bx-list-check\'></i>\n            <div class="logo_name">ToDo List</div>\n        </div>\n    </div>\n\n    <ul class="nav_list">\n        <li>\n            <a href="#">\n                <span class="links_name">Home</span>\n                \n            </a>\n        </li>\n        <li>\n            <a href="#">\n                <span class="links_name">Today</span>\n                \n            </a>\n        </li>\n        <li>\n            <a href="#">\n                <span class="links_name">Week</span>\n                \n            </a>\n        </li>\n        <li class="projects">\n            <a href="#" class="proj-btn">Projects\n                <span class="fas fa-caret-down" id="down_arrow"></span>\n                \n            </a>\n\n            <ul class="proj-list" data-lists>\n\n            </ul>\n            <form action = "" data-new-proj-form>\n                <input type = "text" class = "new-list" data-new-proj-input\n                 placeholder="new project name" aria-label = "new project name"/>\n                 <button class = "btn-proj-list" aria-label="create new project">+</button>\n            </form>\n\n\n        </li>\n    </ul>\n</nav>',t.appendChild(e)})();const a=document.querySelector("[data-lists"),n=document.querySelector("[data-new-proj-form]"),s=document.querySelector("[data-new-proj-input]"),l=document.querySelector("[data-delete-project-button]"),c=document.querySelector("[data-list-display-container]"),i=document.querySelector("[data-list-title]"),o=document.querySelector("[data-list-count]"),d=document.querySelector("[data-tasks]"),r=document.getElementById("task-template"),m=document.querySelector("[data-new-task-form]"),p=document.querySelector("[data-new-task-input]"),u=document.querySelector("[data-clear-complete-tasks-button]"),k="task.projects",v="task.selectedProjId";let b=JSON.parse(localStorage.getItem(k))||[],f=localStorage.getItem(v);function g(){h(),y()}function h(){localStorage.setItem(k,JSON.stringify(b)),localStorage.setItem(v,f)}function y(){x(a),b.forEach((e=>{const t=document.createElement("li");t.dataset.listId=e.id,t.classList.add("list-name"),e.id===f&&t.classList.add("active");const n=document.createElement("a");n.href="#";const s=document.createElement("div");s.classList.add("badge");const l=document.createElement("div");l.classList.add("taskNumbers"),l.innerText=e.tasks.filter((e=>!e.complete)).length;const c=document.createElement("span");c.classList.add("proj_links"),c.innerText=e.name,s.appendChild(l),n.appendChild(s),n.appendChild(c),t.appendChild(n),a.appendChild(t)}));const e=b.find((e=>e.id===f));null==f?c.style.display="none":(c.style.display="",i.innerText=e.name,E(e),x(d),function(e){e.tasks.forEach((e=>{const t=document.importNode(r.content,!0),a=t.querySelector("input");a.id=e.id,a.checked=e.complete;const n=t.querySelector("label");n.htmlFor=e.id,n.append(e.name);const s=t.getElementById("dueDate");s.innerText=e.dueDate,!0===e.complete&&s.classList.add("checked"),d.appendChild(t)}))}(e))}function E(e){const t=e.tasks.filter((e=>!e.complete)).length,a=1===t?"task":"tasks";o.innerText=`${t} ${a} remaining`}function x(e){for(;e.firstChild;)e.removeChild(e.firstChild)}a.addEventListener("click",(e=>{if("ul"===e.currentTarget.tagName.toLowerCase()){switch(e.target.tagName.toLowerCase()){case"a":console.log(e.target.parentElement),f=e.target.parentElement.dataset.listId;break;case"span":console.log(e.target.parentElement.parentElement),f=e.target.parentElement.parentElement.dataset.listId;break;case"div":"taskNumbers"===e.target.className?(console.log(e.target.parentElement.parentElement.parentElement),f=e.target.parentElement.parentElement.parentElement.dataset.listId):(console.log(e.target.parentElement.parentElement),f=e.target.parentElement.parentElement.dataset.listId)}console.log(f),g()}})),d.addEventListener("click",(e=>{if("input"===e.target.tagName.toLowerCase()){const t=b.find((e=>e.id===f));t.tasks.find((t=>t.id===e.target.id)).complete=e.target.checked,h(),E(t),y()}})),u.addEventListener("click",(e=>{const t=b.find((e=>e.id===f));t.tasks=t.tasks.filter((e=>!e.complete)),g()})),l.addEventListener("click",(e=>{b=b.filter((e=>e.id!=f)),f=null,g()})),n.addEventListener("submit",(e=>{e.preventDefault();const t=s.value;if(null==t||""===t)return;const a=(n=t,{id:Date.now().toString(),name:n,tasks:[]});var n;s.value=null,console.log(),b.push(a),g()})),m.addEventListener("submit",(e=>{e.preventDefault();const t=p.value;if(null==t||""===t)return;const a=(n=t,(s=new Date).setDate(s.getDate()+7),{id:Date.now().toString(),name:n,dueDate:s.toLocaleDateString(),complete:!1});var n,s;p.value=null,b.find((e=>e.id===f)).tasks.push(a),g()}));const L=document.getElementsByClassName("proj-btn")[0];var w=document.getElementsByClassName("proj-list")[0],j=Array.from(document.getElementsByClassName("proj-list")[0].children);const S=document.getElementById("down_arrow");var C=Array.from(document.getElementsByClassName("nav_list")[0].children),N=document.getElementsByClassName("sidebarBtn")[0],q=document.getElementsByClassName("sidebar")[0];N.onclick=()=>{"sidebar"==q.className?(q.classList.add("show"),N.classList.add("click")):(q.classList.remove("show"),N.classList.remove("click"))},L.onclick=()=>{"proj-list"==w.className?(w.classList.add("show"),S.classList.add("rotate")):(w.classList.remove("show"),S.classList.remove("rotate"))},y();for(let e=0;e<C.length;e++)switch(e){case 0:case 1:case 2:C[e].onclick=()=>{C.forEach((e=>{e.classList.remove("active")})),C[e].classList.add("active"),w.classList.remove("show"),S.classList.remove("rotate")};break;case 3:C[e].onclick=()=>{if(C.forEach((e=>{e.classList.remove("active")})),C[e].classList.add("active"),"proj-list show"==w.className)for(let e=0;e<j.length;e++)j[e].onclick=()=>{console.log("proj item clicked"),j.forEach((e=>{e.classList.remove("active")})),j[e].classList.add("active")};else C[e].classList.remove("active")}}})();