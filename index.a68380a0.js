var e=document.querySelector("table"),t=e.querySelector("thead"),r=e.querySelector("tbody"),o=e.querySelector("tfoot"),l=document.querySelectorAll("table thead th")[1],n=document.querySelectorAll("table tfoot th")[1],a=document.createElement("th");a.textContent=l.textContent,t.rows[0].insertBefore(a,t.rows[0].lastElementChild);var c=!0,u=!1,d=void 0;try{for(var m,s=r.rows[Symbol.iterator]();!(c=(m=s.next()).done);c=!0){var y=m.value,h=document.createElement("td");h.textContent=y.cells[1].textContent,y.insertBefore(h,y.lastElementChild)}}catch(e){u=!0,d=e}finally{try{c||null==s.return||s.return()}finally{if(u)throw d}}var i=document.createElement("th");i.textContent=n.textContent,o.rows[0].insertBefore(i,o.rows[0].lastElementChild);
//# sourceMappingURL=index.a68380a0.js.map