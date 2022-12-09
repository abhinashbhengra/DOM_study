// iterate elements
// I want all nav text to be green. So I have to iterate over list item.

//Select nav item
const navItems = document.querySelectorAll(".nav-item a"); // returns array like object --> NodeList
console.log(navItems);
// for (let i = 0; i < navItems.length; i++) { . // using simple for loop
//   const navItem = navItems[i];
//   navItem.style.color = "green";
// }

// for (let navItem of navItems) {
//   // using for of --> can use for of because it is array like object.
//   navItem.style.color = "green";
// }

navItems.forEach((navItem) => {
  // we can use forEach in case of NodeList but in case of HTMLCollection we cannot.
  navItem.style.color = "green";
});
