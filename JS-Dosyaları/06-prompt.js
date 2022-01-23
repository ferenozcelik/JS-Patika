document.body.style.backgroundColor = "aqua";

let fullName = prompt("Name:");
console.log(fullName);

let greeting = document.querySelector("#greeting");

/*
greeting.innerHTML = `${greeting.innerHTML} 
    <small style="color:red">
        ${fullName}
    </small>`;
*/ //   YA DA
greeting.innerHTML += `<small style="color:red">
                            ${fullName} eklendi
                       </small>`;
