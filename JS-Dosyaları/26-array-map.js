let users = ["AYSE", "MehMet", "TugCE", "AkSEL"];

let newUsers = users.map((user) => user.toLocaleLowerCase());
console.log(newUsers);

let usersObject = users.map((item) => {
  return {
    userName: item,
    shortName: `${item[0]}.`, // A.
    newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`, // Ayse
  };
});
console.log(usersObject);
