var e=document.createElement("div");document.body.appendChild(e);var n=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=document.createElement("div");o.dataset.qa="notification",o.className=t?"error":"success",o.textContent=n,e.appendChild(o)},t=new Promise(function(e,n){var t=function(){e("First promise was resolved"),document.removeEventListener("click",t)};document.addEventListener("click",t),setTimeout(function(){n(Error("First promise was rejected")),document.removeEventListener("click",t)},3e3)}),o=new Promise(function(e){var n=function(){e("Second promise was resolved"),document.removeEventListener("click",n),document.removeEventListener("contextmenu",n)};document.addEventListener("click",n),document.addEventListener("contextmenu",n)}),c=new Promise(function(e){var n=!1,t=!1,o=function(){n&&t&&(e("Third promise was resolved"),document.removeEventListener("click",c),document.removeEventListener("contextmenu",i))},c=function(){n=!0,o()},i=function(e){e.preventDefault(),t=!0,o()};document.addEventListener("click",c),document.addEventListener("contextmenu",i)}),i=function(e){n(e)};t.then(i).catch(function(e){n(e.message,!0)}),o.then(i),c.then(i);
//# sourceMappingURL=index.371270fb.js.map