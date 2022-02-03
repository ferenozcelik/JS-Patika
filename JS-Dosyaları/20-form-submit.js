let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault(); // default işlemi yani GET işlemini yapma
  console.log("işlem tmm");
  let scoreInputDOM = document.querySelector("#score");
  console.log(scoreInputDOM.value);
  localStorage.setItem("score", scoreInputDOM.value);
}
