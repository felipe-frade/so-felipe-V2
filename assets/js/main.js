!function(){let t,e=[];function a(e,n){return t==(rand=(rand=Math.floor(Math.random()*n)+1)<e?e:rand)?a(e,n):(t=rand,rand)}function n(){let{left:t,top:n}={left:a(1,9),top:a(4,8)};e.push({left:t,top:n});let s=document.createElement("div");s.classList.add("object"),s.classList.add("tree"),s.classList.add("ffc"),s.classList.add("fpa"),s.classList.add(`l${t}0`),s.classList.add(`t${n}0`),3==a(1,20)&&s.classList.add("orange"),document.getElementById("bg-main").append(s)}function s(){for(let t=0;t<10;t++)n()}s(),setInterval(()=>{let t=document.getElementById("main").dataset.inactive;"inactive"!==t&&(document.getElementById("bg-main").innerHTML="",s())},5e3)}();