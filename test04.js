// get and set attribute
//get attribute
// const type = document.querySelector(".form-group input");
// console.log(type.getAttribute("type"));

//set attribute
const element = document.querySelector("a");
console.log(element.getAttribute("href").slice(1)); // task to remove # from href value. Did this is first try.
element.setAttribute("href", "https://www.codprog.com");

console.log(element.getAttribute("href"));
