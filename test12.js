// Events
const btn = document.querySelector(".btn");

// btn.onclick = function () {
//   console.log("You clicked me babe!!");
// };

// console.dir(btn);
// The above approach is not good to use.

// better approach --> method --> addEventListener
// take two parameter, 1. what event to listen, 2. function -- what tasks after event
btn.addEventListener("click", () => {
  console.log("You clicked me babe!!");
});
