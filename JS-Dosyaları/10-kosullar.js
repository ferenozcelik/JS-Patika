let username = prompt("Kullanıcı Adı:");

if (username.length >= 3) {
  console.log(`Kullanıcı adı: ${username}`);
} else {
  console.log("Bilgi yok");
}

// ÇOKLU KOŞULLAR

username = prompt("Kullanıcı adı:");
let age = prompt("Yaş:");
let info = document.querySelector("#info");

if (username && age >= 18) {
  info.innerHTML = "Ehliyet alabilir";
} else if (!username) {
  info.innerHTML = "Kullanıcı adı yok";
} else if (!(age >= 18)) {
  info.innerHTML = "Yaşınız 18'den küçük";
}
