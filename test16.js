// practice session

// task : when button is clicked -- change the color to grey and background to yellow
const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.style.color = "grey";
    e.target.style.backgroundColor = "yellow";
  });
});
