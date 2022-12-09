// this keyword in eventListener callBack

const btn = document.querySelector(".btn");

// In case of function declaration --> 'this' denotes the object that calls paritcular function
btn.addEventListener("click", function () {
  console.log("You clicked me");
  console.log("Value of this : ");
  console.log(this);
});

// In case of arrow function --> 'this' denotes the lexical scope
btn.addEventListener("click", () => {
  console.log("You clicked me");
  console.log("Value of this : ");
  console.log(this);
});
