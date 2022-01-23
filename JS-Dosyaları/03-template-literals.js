let username = "eren";
const DOMAIN = "kodluyoruz.org";
let email = username + "@" + DOMAIN;
//console.log("Merhaba", username, "hoş geldin.", "Mail adresin:", email);

let info = `Merhaba ${username} hoş geldin. Mail adresin: ${email} 
Mail adresi uzunluğu: ${email.length}
İsim ilk harf: ${username[0]}
Borç: ${(2 + 3) * 10} TL
Saat: ${new Date().getHours()}`;

console.log(info);
