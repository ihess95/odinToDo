(()=>{"use strict";function e(e,t,n,d,c){this.cardTitle=e,this.cardDesc=t,this.cardDueDate=n,this.cardPriority=d,this.cardNotes=c}function t(){document.querySelector(".coverPanel").classList.add("hidden")}function n(){document.querySelector(".coverPanel").classList.remove("hidden")}function d(d,c,i,s,a,o){const l="task"+d,r=document.querySelector(".bodyContainer"),u=document.createElement("div"),m=document.createElement("div");m.classList.add("title");const p=document.createElement("div");p.classList.add("desc");const C=document.createElement("div");C.classList.add("dueDate");const h=document.createElement("div");h.classList.add("priority");const L=document.createElement("div");L.classList.add("notes");const v=document.createElement("img");v.classList.add("xImg"),v.src="../img/x.svg",u.appendChild(v);const E=new e(c,i,s,a,o),k=document.createElement("div");k.classList.add("infoDiv"),k.appendChild,m.textContent=E.cardTitle,p.textContent=E.cardDesc,C.textContent=E.cardDueDate,h.textContent=E.cardPriority,L.textContent=E.cardDesc,u.classList.add(l),u.appendChild(k),k.appendChild(m),k.appendChild(p),k.appendChild(C),k.appendChild(h),k.appendChild(L),r.appendChild(u),k.addEventListener("click",(function(){u.classList.contains("active")?(u.classList.remove("active"),t()):(u.classList.add("active"),n())})),v.addEventListener("mouseover",(function(){console.log("text")})),v.addEventListener("click",(function(){t(),u.remove()}))}d("1","Finish this task app","Gotta work on it dude","soon","pretty high","working on it"),d("2","Finish this task appTwo","Gotta work on it dude","soon","pretty high","working on it");const c=document.createElement("button"),i=document.querySelector(".bodyContainer"),s=document.querySelector(".mainGrid"),a=document.createElement("div");a.classList.add("leftBar"),c.textContent="Add New Task",c.classList.add("newTaskBtn"),c.addEventListener("click",(function(){c.classList.contains("clicked")?console.log("test"):function(){const e=document.createElement("div"),c=document.querySelector(".bodyContainer"),i=document.createElement("textarea");i.textContent="Task Title goes here...",i.classList.add("titleField");const s=document.createElement("textarea");s.textContent="Task Description goes here...",s.classList.add("descField");const a=document.createElement("textarea");a.textContent="Due date goes here...",a.classList.add("dateField");const o=document.createElement("div");let l="Low Priority";function r(e){return l=e.textContent,l}const u=document.createElement("button");u.textContent="Low Priority",u.classList.add("lowBtn"),u.addEventListener("click",(function(){r(u)}));const m=document.createElement("button");m.textContent="Medium Priority",m.classList.add("midBtn"),m.addEventListener("click",(function(){r(m)}));const p=document.createElement("button");p.textContent="High Priority",p.classList.add("hiBtn"),p.addEventListener("click",(function(){r(p)})),o.classList.add("priorityBtnCont");const C=document.createElement("div");C.classList.add("confOrDeny");const h=document.createElement("button");h.textContent="Create Task",h.classList.add("confirmBtn"),h.addEventListener("click",(function(){new d(0,i.value,s.value,a.value,l,""),console.log(newCard)}));const L=document.createElement("button");L.textContent="Cancel",L.classList.add("denyBtn"),L.addEventListener("click",(function(){e.remove(),t()})),n(),e.classList.add("prompt"),c.appendChild(e),e.appendChild(i),e.appendChild(s),e.appendChild(a),e.appendChild(o),e.appendChild(C),o.appendChild(u),o.appendChild(m),o.appendChild(p),C.appendChild(h),C.appendChild(L);const v=document.createElement("img");v.classList.add("xImg"),v.src="../img/x.svg",e.appendChild(v),v.addEventListener("click",(function(){e.remove(),t()}))}(),c.classList.add("clicked"),setTimeout((function(){c.classList.remove("clicked")}),1e3)})),s.appendChild(a),a.appendChild(c),s.appendChild(i)})();