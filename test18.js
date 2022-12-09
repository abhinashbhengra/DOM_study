//keypress
//mouseover

// keypress
const body = document.body;
// body.addEventListener("keypress", (e) => {
//   console.log(e.key); // key is a property
// });

// mouseover
const button = document.querySelector(".btn-headline");
// console.log(button);
button.addEventListener("mouseover", () => {
  console.log("mouseover event occured");
});

//mouseleave
button.addEventListener("mouseleave", () => {
  console.log("mouseleave event occured");
});
