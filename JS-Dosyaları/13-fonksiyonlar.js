let firstName = "Lorem";

function greetings(name = "") {
  //   console.log(`${name ? name : ""}`);
  console.log(`Merhaba ${name}`);
}

greetings();

function greetings2(firstName, lastName) {
  let info = `Merhaba ${firstName} ${lastName}`;
  return info;
}

let greetingsInfo = greetings2("Eren", "Ozcelik");
console.log(greetingsInfo);

function domIdWriteInfo(id, info) {
  let domObject = document.querySelector(`#${id}`);
  domObject.innerHTML = info;
}

let htmlInfo = `<span style = "color:red">Color RED</span>`;

domIdWriteInfo("greeting", greetings2("Eren", "Ozcelik"));
// Sayfadaki greeting id'li metni değiştirdi

domIdWriteInfo("greeting", htmlInfo);

domIdWriteInfo("info", greetings2("Eren", "Ozcelik"));
