// event object

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function () {
//   console.log(firstButton);
// });

// When we add addEventListener to any element browser/webAPI does 2 work
// 1. It will provide callBack function to js engine.
// 2. It also provide the information of event in object form.
// we can see the event information

// firstButton.addEventListener("click", function (e) {
//   console.log(e);
// });

const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);
for (let button of allButtons) {
  button.addEventListener("click", (event) => {
    console.log(event.currentTarget); // getting information in object format
  });
}
// two main useful property
//1. currentTarget --- with which element event is attached
//2. target --- which element trigger the event
