// event Bubbling | capturing | delegation

const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// //BUBBLING
// // child.addEventListener("click", () => {
// //   console.log("You clicked on child");
// // });

// // parent.addEventListener("click", () => {
// //   console.log("You clicked parent");
// // });

// // CAPTURING
// // we are capturing by making 3rd argument of eventListener to true
// child.addEventListener(
//   "click",
//   () => {
//     console.log("capture child");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("capture parent");
//   },
//   true
// );
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("capture grandparent");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("capture document.body");
//   },
//   true
// );
// // not capturing
// child.addEventListener("click", () => {
//   console.log("You clicked child");
// });
// parent.addEventListener("click", () => {
//   console.log("You clicked parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("You clicked grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("You clicked document.body");
// });

// DELEGATION
// grandparent.addEventListener("click", (e) => {
//   console.log(e);
// });

// If I clicked on child ---> target : div.child.box
// If I clicked on grandparent --> target : div.grandparentbox
grandparent.addEventListener("click", (e) => {
  console.log(e.currentTarget);
});

// target --- By which element event was trigger
// currentTarget --- to which element event is attached to.
