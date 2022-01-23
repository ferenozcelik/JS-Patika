/*
var serverName = "kodluyoruz.org"
console.log(serverName)
*/

let serverName;
serverName = "https://kodluyoruz.org";
console.log(serverName);

let password = "1234";
console.log(password);

let fullName = "Fatih Ozcelik";

fullName = "Eren Ozcelik";
fullName = "Fatih " + fullName;
console.log(fullName);

const serverPassword = "12345";
//serverPassword = 321;
console.log(serverPassword);

let price = "100";
console.log(price);

let number = 10;
console.log("Number:", number);

let newPrice = Number(price);
console.log("Number constructur:", newPrice);

let isActive = false;
isActive = true;
console.log("isActive:", isActive);

let userName;
let isUserName = Boolean(userName);
console.log("username:", isUserName);

console.log(Boolean("11"));
console.log(Boolean(""));
// Boolean() içinde veri varsa True, veri yoksa False gösterir.
// Boolean(0) -> False  ||  Boolean(0'dan farklı değerler) -> True

// !!!!!!!!! console.log(Boolean(userName.length > 0))

console.log(typeof isActive);

let number1 = "20";
console.log("number1 type:", typeof number1);
number1 = parseInt(number1);
console.log("number1 new type:", typeof number1);

// parseInt("11px") -> int ile başlıyorsa sadece int kısmı alıp dönüştürüyor
// Number("11px") -> ifade int olmadığı için number'a dönüştürmüyor

let number2 = 70;
number2 = number2.toString();
console.log("number2 type:", typeof number2);
console.log("eren");
