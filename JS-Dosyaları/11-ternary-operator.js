let username = prompt("Kullanıcı adı");
let info = document.querySelector("#info");

// ternary:
// koşul ? doğruysa : yanlışsa
info.innerHTML = `${username.length > 0 ? username : "Kullanıcı adı yok"}`;
