// add HTML element using javascript

// add HTML element using innerHTML
const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);
todoList.innerHTML += "<li>New Todo</li>";
todoList.innerHTML += "<li>New Todo 2</li>";

// NOTE*
// We should always avoid this method to add HTML element.
// Use only if you want entirly change the content.
