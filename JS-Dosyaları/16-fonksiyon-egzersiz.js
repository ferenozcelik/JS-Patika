let counterDOM = document.querySelector("#counter");
let counter = 0;
counterDOM.innerHTML = counter;

let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);

function clickEvent() {
  console.log(this.id); // butona basınca butonun id'si yazdırılıyor
  this.id == "increase" ? counter++ : counter--;
  // id = increase -> counter artır
  // id = increase değilse -> counter azalt
  counterDOM.innerHTML = counter;
  // sayfadaki counter'ın text'ini buradaki counter'a eşitle
}
