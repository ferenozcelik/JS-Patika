let email = "erenozcelik@gmail.com";
let firstName = "Eren";
let lastName = "Ozcelik";

console.log(email.length);

console.log(firstName[0]);
console.log(firstName.charAt(0));

firstName = firstName.toUpperCase();
console.log(firstName);
firstName = firstName.toLocaleLowerCase();
console.log(firstName);

console.log(email.search("@"));
console.log(email.search("ö")); // -1
console.log(email.includes("ö")); // false

console.log(email.slice(11)); // 11'den itibaren al
console.log(email.slice(0, 11)); // 0'dan başla 11'e kadar git, 11 dahil değil

let domain = email.slice(email.search("@") + 1);
console.log(domain); // gmail.com

console.log(domain.indexOf("."));

console.log(domain.slice(0, 5)); // gmail
//  otomize hali
console.log(domain.slice(0, domain.indexOf("."))); // gmail

// domain'i değiştirmek
console.log(email.slice(0, email.search("@") + 1) + "kodluyoruz.org");
// daha kolay versiyonu
email = email.replace("gmail.com", "kodluyoruz.org");
console.log(email);

console.log(email.endsWith("kodluyoruz.org"));
console.log(email.startsWith("erenO")); // false

// ilk harfi büyük yap
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1)}`;
console.log(fullName);
