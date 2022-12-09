// get multiple elements using getElement by class name
// get multiple elments using querySelectorAll

const navItems = document.getElementsByClassName("nav-item"); //retun HTMLCollection(Array like object)
console.log(navItems);

const navItems2 = document.querySelectorAll(".nav-item"); // return NodeList(Array like object)
console.log(navItems2);
