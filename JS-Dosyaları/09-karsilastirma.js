// STRICT COMPARISON (===)

let price = "100";
let user = "admin";

console.log(price == 1);
console.log(price == 100); // string verince de true döndürdü
// buna engel olabilmek için

console.log(price === 100); // artık string olup olmadığını da kontrol edecek

console.log(user != "guest");

console.log(price <= 100);
// yine true döndürecek. type'ı da hesaba katmak için:
console.log(price <= 100 && typeof price === typeof 100);
