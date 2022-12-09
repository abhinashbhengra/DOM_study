// click event on multiple buttons

const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);

//for of loop
// for (let button of allButtons) {
//   button.addEventListener("click", function () {
//     console.log(button.textContent);
//   });
// }

//forEach
allButtons.forEach((button) => {
  button.addEventListener("click", function () {
    console.log(button.textContent);
  });
});
