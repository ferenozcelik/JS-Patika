let users = ["Lorem", "Ipsum", "Dolor"];

// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }

// let index = 0;
// for (; index < 10; index++) {
//   console.log(index);
// }

let userListDOM = document.querySelector("#userList");
for (let index = 0; index < users.length; index++) {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = users[index];
  userListDOM.appendChild(liDOM); // "li", ul'nin içinde değildi. şimdi eklendi
}

let loremList = [
  "lorem",
  "ipsum",
  "dolor",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
];

console.log("Break: (5 olunca durdur)");
for (let counter = 0; counter < 10; counter++) {
  if (counter === 5) {
    // == olursa type-check yapmıyor, === olursa type-check yapıyor
    break;
  }
  console.log(counter);
}

console.log("\nContinue: (5'i işleme alma devam et)");
for (let counter = 0; counter < 10; counter++) {
  if (counter === 5) {
    // == olursa type-check yapmıyor, === olursa type-check yapıyor
    continue;
  }
  console.log(counter);
}

// const UL_DOM = document.querySelector("#userList2");
// for (let index = 0; index < loremList.length; index++) {
//   if (loremList[index] == "dolor") {
//     continue;
//   }
//   let liDOM = document.createElement("li");
//   liDOM.innerHTML = loremList[index];
//   UL_DOM.append(liDOM);
// }

console.log("\nWhile:");
let counter = 0;
while (counter < 10) {
  console.log(counter);
  counter++;
}

let username;
while (!username) {
  username = prompt("Kullanıcı adı:");
  console.log(username);
}
