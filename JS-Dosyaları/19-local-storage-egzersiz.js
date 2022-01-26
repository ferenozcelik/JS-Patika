let counter = localStorage.getItem("counter")
  ? Number(localStorage.getItem("counter"))
  : 0;

let counterDOM = document.querySelector("#counter");
counterDOM.innerHTML = counter;

let increaseDOM = document.querySelector("#increase"); //buton
let decreaseDOM = document.querySelector("#decrease"); //buton

increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);

function clickEvent() {
  console.log(this.id);
  this.id == "increase" ? counter++ : counter--; // tıklanan butonun id'si
  localStorage.setItem("counter", counter);
  counterDOM.innerHTML = counter;
}
