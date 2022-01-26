let user = { userName: "erenozcelik", isActive: true };

localStorage.setItem("userInfo", JSON.stringify(user));
// bilgiyi string'e dönüştürüp "userInfo"ya kaydet

let userInfo = localStorage.getItem("userInfo"); // bilgiyi al
userInfo = JSON.parse(userInfo); // parse edip JSON'a geri çevir
// artık erişilebilir
console.log(userInfo);
console.log(userInfo.isActive);
console.log(userInfo.userName);
