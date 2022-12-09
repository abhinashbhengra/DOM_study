// static list & Live List

// querySelector ---> static list
// const ul = document.querySelectorAll(".todo-list li");
// const newItem = document.createElement("li");
// newItem.textContent = "Item 6";
// const todoList = document.querySelector(".todo-list");
// todoList.append(newItem);
// console.log(ul); // ----> NodeList(5) [li, li, li, li, li]   --> Even after adding new element it returns 5 NodeList --> Static List

// getElementBySomething ---> live list
const ul = document.querySelector(".todo-list");
const listItem = ul.getElementsByTagName("li");
const newItem = document.createElement("li");
newItem.textContent = "item 6";
ul.append(newItem);
console.log(listItem); // ----> HTMLCollection(6) [li, li, li, li, li, li] --> It returns live list
