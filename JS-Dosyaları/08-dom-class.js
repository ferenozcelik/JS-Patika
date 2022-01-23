let greeting = document.querySelector("#greeting");

// class eklemek
greeting.classList.add("text-primary");
greeting.classList.add("title");
greeting.classList.add("new-info", "second-class", "third-class");

// class silmek
greeting.classList.remove("title");
greeting.classList.remove("second-class", "third-class");

console.log(greeting.classList);
