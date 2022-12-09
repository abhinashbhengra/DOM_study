// mini project on event delegation

const todoForm = document.querySelector(".form-todo");
const todoText = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
// console.log(todoText);
// console.log(todoForm);
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoText.value;
  todoText.value = "";
  const newlistItem = document.createElement("li");
  const newinnerHTML = `
  <span class="text">${newTodoText}</span>
  <div class="todo-buttons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
  </div>
`;
  newlistItem.innerHTML = newinnerHTML;
  todoList.append(newlistItem);
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const targetListItem = e.target.parentNode.parentNode;
    targetListItem.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
});
