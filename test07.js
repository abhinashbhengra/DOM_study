// DOM TRAVERSAL

const rootNode = document.getRootNode(); //getting root node
// console.log(rootNode);
// we can check child node
// console.log(rootNode.childNodes);

const htmlElementNode = rootNode.childNodes[0]; // storing HTML root element/ document child node
// console.log(htmlElementNode);
// I want to see html child nodes
//console.log(htmlElementNode.childNodes); // child node of HTML element

//head node
const headElementNode = htmlElementNode.childNodes[0];
//console.log(headElementNode);
// child node of head
//console.log(headElementNode.childNodes);

//HEAD CHILD
//title element node
const titleElement = headElementNode.childNodes[1];
//console.log(titleElement);

// script element node
const scriptElement = headElementNode.childNodes[3];
//console.log(scriptElement);

//body element node
const bodyElementNode = htmlElementNode.childNodes[2];
//console.log(bodyElementNode);

// body element node children
//console.log(bodyElementNode.childNodes);

// PARENT NODE
//console.log(bodyElementNode.parentNode);

//SIBLING RELATION
//console.log(headElementNode.nextSibling);

// we dont want textnode, directly need body in this case.
//console.log(headElementNode.nextElementSibling); // It will next element node and ignores text node

// Task
const childNode = document.querySelector("p");
//console.log(childNode);

const parentNode = childNode.parentNode;
//console.log(parentNode);

parentNode.style.backgroundColor = "grey";

// I want to ignore text node.
let container = document.querySelector(".container");
//console.log(container.childNodes); // ----> NodeList(5) [text, h1, text, p, text]
// To ignore all the text node we have 'children' property
//console.log(container.children); // ---> HTMLCollection(2) [h1, p]
