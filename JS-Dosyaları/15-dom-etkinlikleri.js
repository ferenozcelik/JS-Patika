let greeting = document.querySelector("#greeting");

greeting.addEventListener("mouseover", domClick); // "click", "mouseover"

function domClick() {
  console.log("Etkinlik çalıştı");
  this.style.color == "red"
    ? (this.style.color = "black")
    : (this.style.color = "red");
  // rengi kırmızıysa tıklanınca/mouse gelince siyah yap, değilse kırmızı yap
}
