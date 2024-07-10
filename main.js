// js variables types
var number = 1000; // number
var name = "john"; // string
var isValid = true; // boolean
var fruits = ["apple", "pear", "orange"]; // list or array
// console.log(window.fruits)
// console.log(fruits[2]);
// window.alert("hello world");
// console.log(document.body.style)
// we had background-color = in JS t becomes backgroundColor
// text-align => textAlign
// margin-right => marginRight

// document.body.style.backgroundColor = "red";

// var h1 = document.getElementById("heading");
// h1.style.color = "#ff00ff";
// h1.style.fontSize = "3em";
// h1.style.textAlign = "center";
// h1.style.textTransform = "capitalize"

// document.getElementsByTagName("h1")[2].style.color = "purple"
// document.getElementsByClassName("btn")[0].style.backgroundColor = "red"

// document.getElementById("btn").style.backgroundColor = "yellow";

// document.querySelector("#heading").style.color = "red";
// document.querySelector(".btn").style.backgroundColor = "yellow"
// document.querySelector("[type='text']").style.border = "10px solid";
// document.querySelector('h2').style.color = "#f99";

// document.querySelector("section").setAttribute("class","hello")
// document.querySelector("h1").removeAttribute("id")
document.querySelector("section").classList.add("new-class");
document.querySelector("section").classList.remove("text");

var paragraph = document.createElement("p");
paragraph.innerHTML = "we just added this text via JS";
paragraph.style.fontSize = "4em";
paragraph.style.color = "red";
paragraph.style.backgroundColor = "yellow";
document.body.appendChild(paragraph);

// function
function myFirstFunction() {
  // here you write your function content
  var image = document.createElement("img");
  image.setAttribute("src", "https://picsum.photos/id/1050/200");
  image.setAttribute(
    "alt",
    "this is an image added to document from javascript"
  );
  var imageHolder = document.querySelector("figure");
  imageHolder.appendChild(image);
}

myFirstFunction();
myFirstFunction();
myFirstFunction();
myFirstFunction();

