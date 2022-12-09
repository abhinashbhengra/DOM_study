// classList

const sectionTodo = document.querySelector(".todo-section");
//console.log(sectionTodo);
//classList property
//console.log(sectionTodo.classList); // ---> DOMTokenList(2) ['todo-section', 'container', value: 'todo-section container']

// I want add class
//sectionTodo.classList.add("bg-dark");

// remove class
//sectionTodo.classList.remove("container");

// check if class exist or not
const check = sectionTodo.classList.contains("container"); // return boolean value
//console.log(check);

//TOOGLE
// If class is present, it will remove the class
// If class is not present, it will add the class
sectionTodo.classList.toggle("bg-dark");
sectionTodo.classList.toggle("bg-dark");

// more practice
const header = document.querySelector("header");
//console.log(header.classList);
// header.classList.add("bg-dark");
// header.classList.remove("header");
