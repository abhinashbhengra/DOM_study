// select element using query selector
// It can select element having id or class
const mainHeading = document.querySelector("#main-heading"); //id
const header = document.querySelector(".header"); // class
const navItem = document.querySelector(".nav-item");
const navItems = document.querySelectorAll(".nav-item"); // more than one element with same classname
console.log(navItems);
