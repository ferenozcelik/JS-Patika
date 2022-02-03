let products = [
  "Laptop",
  "Phone",
  "Speaker",
  "Desktop PC",
  "Server",
  "Mouse",
  "Keyboard",
];

// array.forEach(function(currentValue, index, arr))

// forEach parantezlerinin içine fonksiyon alıyor. Aşağıda => kullanarak isimsiz bir fonksiyon verdik
products.forEach((product) => console.log(product));

console.log("----------------\n");

products.forEach((product, index) => console.log(product, index));

console.log("----------------\n");

products.forEach((product, index, array) =>
  console.log((array[index] = product + " 111"))
);

console.log("----------------\n");

products.forEach(
  (product, index, array) => (array[index] = product.toUpperCase())
);
console.log(products);

console.log("----------------\n");

const userListDOM = document.querySelector("#userList");
products.forEach((item) => {
  const liDOM = document.createElement("li");
  liDOM.innerHTML = item;
  userListDOM.appendChild(liDOM);
});
