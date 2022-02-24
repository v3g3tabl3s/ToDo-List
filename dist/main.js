(()=>{"use strict";var e={d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{b:()=>t});const t=document.querySelector("#content");(()=>{const e=document.createElement("div");e.classList.add("main-container"),e.innerHTML='    \n    <div class="todo-list" data-list-display-container>\n        <div class="todo-header">\n            <h2 class="list-title" data-list-title>Example, if here, broken</h2>\n            <p class="task-count" data-list-count>3 tasks remaining</p>\n        </div>\n        <div class="todo-body">\n            <div class="tasks" data-tasks>\n            </div>\n            <div class="new-task-maker">\n                <form action="" data-new-task-form>\n                    <input type="text" class="new-task" data-new-task-input placeholder="new task name"\n                        aria-label="new-task-name" />\n                    <button class="btn-proj-task" aria-label="new-task-name">+</button>\n                </form>\n            </div>\n            <div class="delete-stuff">\n                <button class="btn-delete" data-clear-complete-tasks-button>Clear completed tasks</button>\n                <button class="btn-delete" data-delete-project-button>Delete project</button>\n            </div>\n\n        </div>\n    </div>',t.appendChild(e)})(),(()=>{const e=document.createElement("div");e.classList.add("menu-container"),e.innerHTML='    <div class="sidebarBtn">\n    <span class="fas fa-bars"></span>\n</div>\n<nav class="sidebar">\n    <div class="logo_content">\n        <div class="logo">\n            <i class=\'bx bx-list-check\'></i>\n            <div class="logo_name">ToDo List</div>\n        </div>\n    </div>\n\n    <ul class="nav_list">\n        <li>\n            <a href="#">\n                <span class="links_name">Home</span>\n                \n            </a>\n        </li>\n        <li>\n            <a href="#">\n                <span class="links_name">Today</span>\n                \n            </a>\n        </li>\n        <li>\n            <a href="#">\n                <span class="links_name">Week</span>\n                \n            </a>\n        </li>\n        <li class="projects">\n            <a href="#" class="proj-btn">Projects\n                <span class="fas fa-caret-down" id="down_arrow"></span>\n                \n            </a>\n\n            <ul class="proj-list" data-lists>\n\n            </ul>\n            <form action = "" data-new-proj-form>\n                <input type = "text" class = "new-list" data-new-proj-input\n                 placeholder="new project name" aria-label = "new project name"/>\n                 <button class = "btn-proj-list" aria-label="create new project">+</button>\n            </form>\n\n\n        </li>\n    </ul>\n</nav>',t.appendChild(e);const a=document.getElementsByClassName("proj-btn")[0],n=document.getElementsByClassName("proj-list")[0],s=Array.from(document.getElementsByClassName("proj-list")[0].children),l=document.getElementById("down_arrow"),i=Array.from(document.getElementsByClassName("nav_list")[0].children),c=document.getElementsByClassName("sidebarBtn")[0],o=document.getElementsByClassName("sidebar")[0];c.onclick=()=>{"sidebar"===o.className?(o.classList.add("show"),c.classList.add("click")):(o.classList.remove("show"),c.classList.remove("click"))},a.onclick=()=>{"proj-list"===n.className?(n.classList.add("show"),l.classList.add("rotate")):(n.classList.remove("show"),l.classList.remove("rotate"))};for(let e=0;e<i.length;e++)switch(e){case 0:case 1:case 2:i[e].onclick=()=>{i.forEach((e=>{e.classList.remove("active")})),i[e].classList.add("active"),n.classList.remove("show"),l.classList.remove("rotate")};break;case 3:i[e].onclick=()=>{if(i.forEach((e=>{e.classList.remove("active")})),i[e].classList.add("active"),"proj-list show"===n.className)for(let e=0;e<s.length;e++)s[e].onclick=()=>{s.forEach((e=>{e.classList.remove("active")})),s[e].classList.add("active")};else i[e].classList.remove("active")}}})();const a=document.querySelector("[data-lists"),n=document.querySelector("[data-new-proj-form]"),s=document.querySelector("[data-new-proj-input]"),l=document.querySelector("[data-delete-project-button]"),i=document.querySelector("[data-list-display-container]"),c=document.querySelector("[data-list-title]"),o=document.querySelector("[data-list-count]"),r=document.querySelector("[data-tasks]"),d=document.getElementById("task-template"),m=document.querySelector("[data-new-task-form]"),u=document.querySelector("[data-new-task-input]"),p=document.querySelector("[data-clear-complete-tasks-button]"),v="task.projects",f="task.selectedProjId";let k=JSON.parse(localStorage.getItem(v))||[],h=localStorage.getItem(f);function g(e){return{id:Date.now().toString(),name:e,tasks:[]}}function y(){b(),L()}function b(){localStorage.setItem(v,JSON.stringify(k)),localStorage.setItem(f,h)}function L(){w(a),k.forEach((e=>{const t=document.createElement("li");t.dataset.listId=e.id,t.classList.add("list-name"),e.id===h&&t.classList.add("active");const n=document.createElement("a");n.href="#";const s=document.createElement("div");s.classList.add("badge");const l=document.createElement("div");l.classList.add("taskNumbers"),l.innerText=e.tasks.filter((e=>!e.complete)).length;const i=document.createElement("span");i.classList.add("proj_links"),i.innerText=e.name,s.appendChild(l),n.appendChild(s),n.appendChild(i),t.appendChild(n),a.appendChild(t)}));const e=k.find((e=>e.id===h));null==h?i.style.display="none":(i.style.display="",c.innerText=e.name,E(e),w(r),function(e){e.tasks.forEach(((t,a,n)=>{const s=document.importNode(d.content,!0),l=s.querySelector("div");"low"===t.priority&&l.classList.add("low-priority"),"med"===t.priority&&l.classList.add("med-priority"),"high"===t.priority&&l.classList.add("high-priority"),l.classList.add("low-priority");const i=s.querySelector("input");i.id=t.id,i.checked=t.complete;const c=s.querySelector("label");c.htmlFor=t.id,c.append(t.name);const o=s.getElementById("dueDate");o.innerText=t.dueDate,s.getElementById("taskDelete").addEventListener("click",(()=>{l.className="",n.pop(a),b(),E(e),w(l)})),!0===t.complete&&o.classList.add("checked"),r.appendChild(s)}))}(e))}function E(e){const t=e.tasks.filter((e=>!e.complete)).length,a=1===t?"task":"tasks";o.innerText=`${t} ${a} remaining`;const n=document.getElementsByClassName("taskNumbers");for(let a=0;a<n.length;a++)e.name===document.getElementsByClassName("taskNumbers")[a].parentElement.nextElementSibling.innerText&&(n[a].innerText=t)}function w(e){for(;e.firstChild;)e.removeChild(e.firstChild)}a.addEventListener("click",(e=>{if("ul"===e.currentTarget.tagName.toLowerCase()){switch(e.target.tagName.toLowerCase()){case"a":h=e.target.parentElement.dataset.listId;break;case"span":h=e.target.parentElement.parentElement.dataset.listId;break;case"div":h="taskNumbers"===e.target.className?e.target.parentElement.parentElement.parentElement.dataset.listId:e.target.parentElement.parentElement.dataset.listId}y()}})),r.addEventListener("click",(e=>{if("input"===e.target.tagName.toLowerCase()){const t=k.find((e=>e.id===h));t.tasks.find((t=>t.id===e.target.id)).complete=e.target.checked,b(),E(t)}})),p.addEventListener("click",(()=>{const e=k.find((e=>e.id===h));e.tasks=e.tasks.filter((e=>!e.complete)),y()})),l.addEventListener("click",(()=>{if(k=k.filter((e=>e.id!==h)),h=null,0===k.length){const e=g("Default");k.push(e)}y()})),n.addEventListener("submit",(e=>{e.preventDefault();const t=s.value;if(null==t||""===t)return;const a=g(t);s.value=null,k.push(a),y()})),m.addEventListener("submit",(e=>{e.preventDefault();const t=u.value;if(null==t||""===t)return;const a=function(e){const t=new Date;return t.setDate(t.getDate()+7),{id:Date.now().toString(),name:e,dueDate:t.toLocaleDateString(),complete:!1,priority:"low"}}(t);u.value=null,k.find((e=>e.id===h)).tasks.push(a),y()})),L()})();