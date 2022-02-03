// array.filter(function(currentValue, index, arr))

// 5 harften fazla olanlar (6) ??
let products = [
  "Mic",
  "Cable",
  "Speaker",
  "Desktop PC",
  "Server",
  "Mouse",
  "Keyboard",
];

let newProducts = products.filter((item) => item.length > 5);
console.log(newProducts);

// aktif kullanicilar ??
let users = [
  { fullName: "Ayse Sumer", isActive: false },
  { fullName: "Ahmet Urgan", isActive: true },
  { fullName: "Asya Basar", isActive: true },
  { fullName: "Aksel Durmaz", isActive: false },
];

let activeUsers = users.filter((user) => user.isActive);
console.log(activeUsers);
