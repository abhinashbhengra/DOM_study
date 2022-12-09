// document.createElement()
// append
// prepend
// remove

//document.createElement
const newTodoList = document.createElement("li"); // create new list item

// const newTodoListText = document.createTextNode("Hi this is Abhinash");
// newTodoList.append(newTodoListText);

//append
newTodoList.textContent = "hi this is javascript"; // add text content to new list
const todoList = document.querySelector(".todo-list"); // select unordered list
// todoList.append(newTodoList); // append list item to unordred list

//prepend
//this will add element at first
todoList.prepend(newTodoList);

//remove
// todoList.remove();

//before
//after
// todoList.after(newTodoList);
