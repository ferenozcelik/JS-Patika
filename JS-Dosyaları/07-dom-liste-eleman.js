let lastChild = document.querySelector("ul#list>li:last-child");
console.log(lastChild.innerHTML);

lastChild.innerHTML += " last degisti";
console.log(lastChild.innerHTML);

let firstChild = document.querySelector("ul#list>li:first-child");
firstChild.innerHTML += " first degisti";
console.log(firstChild.innerHTML);

let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement("li");
// console.log(ulDOM.lastChild.innerHTML);
// console.log(ulDOM.firstChild.innerHTML);

liDOM.innerHTML = "Yeni Oge";
//ulDOM.append(liDOM); // EN SONA EKLİYOR
ulDOM.prepend(liDOM); // EN BAŞA EKLİYOR
