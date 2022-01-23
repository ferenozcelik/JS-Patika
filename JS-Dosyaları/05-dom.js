console.log(document.URL);
console.log(document.baseURI);
console.log(document.location);
console.log(document.location.hostname);
console.log(document.location.pathname);
console.log(document.location.body);
console.log(document.location.head);
document.body.style.backgroundColor = "aqua";

// DOM IÇERISINDEN ÖGE SEÇIMI

// let h2 = document.getElementsByTagName("h2");
let title = document.getElementById("title");
title.innerHTML = "Degisti";
console.log(title.innerHTML);

let link = document.querySelector("#link");
link.innerHTML += " degisti";
console.log(link.innerHTML);
link.style.color = "red";
link.classList.add("btn");
