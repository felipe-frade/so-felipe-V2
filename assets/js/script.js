function alert_css(e){}!function(){function e(e){if(!(e instanceof Element))throw Error("DomUtil: elem is not an element.");let t=getComputedStyle(e);if("none"===t.display||"visible"!==t.visibility||t.opacity<.1||e.offsetWidth+e.offsetHeight+e.getBoundingClientRect().height+e.getBoundingClientRect().width===0)return!1;let i={x:e.getBoundingClientRect().left+e.offsetWidth/2,y:e.getBoundingClientRect().top+e.offsetHeight/2};if(i.x<0||i.x>(document.documentElement.clientWidth||window.innerWidth)||i.y<0||i.y>(document.documentElement.clientHeight||window.innerHeight))return!1;let n=document.elementFromPoint(i.x,i.y);do if(n===e)return!0;while(n=n.parentNode);return!1}function t(){value}console.log("Author: Felipe Frade de Oliveira Pereira"),document.getElementById("goBottom")&&(document.getElementById("goBottom").onclick=function(e){let t=document.getElementById("goBottom").getAttribute("data-current"),i=document.getElementById(t).getAttribute("data-ancora");document.getElementById(i).scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}),document.getElementById("goBottom").setAttribute("data-current",i)});let i=document.querySelectorAll("header ul#menu li");function n(e){document.getElementById(e).dataset.inactive="false"}i.forEach(e=>{e.onclick=function(e){let t=e.target.dataset.link;e.target.dataset.ancora,document.getElementById(t).scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}),document.getElementById("goBottom").setAttribute("data-current",t)}});let l=document.getElementsByTagName("header")[0];function a(){document.getElementById("item-home").classList.remove("active"),document.getElementById("item-developer").classList.remove("active"),document.getElementById("item-about").classList.remove("active"),l.classList.remove("main"),l.classList.remove("second"),l.classList.remove("third")}function o(){e(document.getElementById("second"))?(document.getElementById("main").dataset.inactive="inactive",a(),l.classList.add("second"),document.getElementById("item-developer").classList.add("active")):e(document.getElementById("third"))?(n("main"),a(),l.classList.add("third"),document.getElementById("item-about").classList.add("active")):e(document.getElementById("main"))&&(n("main"),a(),l.classList.add("main"),document.getElementById("item-home").classList.add("active"))}o(),setInterval(()=>{o()},1e3),document.getElementById("links").onclick=function(){let e=document.getElementById("links").classList.contains("active");e?document.getElementById("links").classList.remove("active"):document.getElementById("links").classList.add("active"),document.querySelectorAll(".links").forEach((t,i)=>{e?t.classList.remove("active"):setTimeout(()=>{t.classList.add("active")},200*i)})}}();