let domain = "kodluyoruz";
let isActive = false;
let items = [15, 25, 35, isActive, domain];
console.log(items);

let emptyArray = [];

console.log(items.length);

document.querySelector("#info").innerHTML = items.length;

console.log(items[0]);
console.log(items[items.length - 1]);
console.log(typeof items); // -> object
console.log(Array.isArray(items)); // -> true

console.log(items[Math.floor(items.length / 2)]); // 5/2 = 2.5 -> 2

items.push(50); // en sona eleman ekleme
console.log(items);

items.unshift(5); // en başa eleman ekleme
console.log(items);

items.pop(); // en sondaki elemanı silme
// let lastItem = items.pop(); // sondaki elemanı silerken bir değişkene kaydedebiliriz
console.log(items);

items.shift(); // en baştaki elemanı silme
// let firstItem = items.shift();
console.log(items);

items[0] = 0.5; // elemanı değiştirme
console.log(items);

items[items.length - 1] = "kodlamıyoruz";
console.log(items);

items[20] = 2000; // 20. indexte eleman olmasa bile ekler, aradakiler boş kalır
console.log(items);

items = [1, 2, 3, 4, 5];
let femaleUsers = ["Ayşe", "Hülya", "Merve"];
let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femaleUsers);
console.log(items);

items.push(maleUsers);
console.log(items);

console.log(items.length); // eklenen arraylerin eleman sayılarını toplama eklemedi

console.log(items[0].length);
console.log(items[0][0]);

let newItems = items.splice(1, 5); // 1. index'den başla 5 de dahil, hepsini items'dan kesip newItems'a koy
console.log(newItems);
console.log(items);

items.unshift("Lorem");
items.push("ipsum");
console.log(items.indexOf("ipsum"));
console.log(items[items.indexOf("ipsum")]);

// KOPYALAMAK
let copyItems = items;
console.log(items);

copyItems.pop();
console.log("copyItems", copyItems);
console.log("items", items);
// eşitleyerek oluşturduğum yeni listede yaptığım değişiklik ilk listeye de etki etti. Çünkü iki değişken de aynı listeye işaret ediyor. O yüzden eşitleyerek değil kopyala işlemi yaparak listeyi çoğaltmalıyız.

console.log("Kopyalandıktan sonra:");

// KOPYALAMAK İÇİN: slice()
copyItems = items.slice();
copyItems.pop();
console.log("copyItems", copyItems);
console.log("items", items);

// KOPYALAMA ALTERNATİF [...array]
let es6Items = [...items];
console.log(es6Items);

let allUsers = [...femaleUsers, ...maleUsers];
console.log(allUsers);

//
console.log(allUsers.toString()); // virgül koyarak stringe dönüştürdü

console.log(allUsers.join(" --- ")); // virgül yerine " --- " kullanarak birleştir

// splice ile eleman ekleme
allUsers.splice(allUsers.length - 1, 0, "Melisa"); // en sondan bir önceye "Melisa"yı ekle
console.log(allUsers);

allUsers.splice(Math.floor(allUsers.length / 2), 0, "Aşkın"); // ortaya "Aşkın"ı ekle
console.log(allUsers);
