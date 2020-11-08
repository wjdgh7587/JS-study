//What is DOM? - DOM Functions

//console.log(document);

//var title = document.getElementById("titleTest");
var title = document.querySelector("#titleTest");

var body = document.getElementById("body");
console.log(document.getElementById("titleTest"));
console.log(title);
console.log(body);

//DOM = Document Object Module
//JavaScript will change the html tag to the Object

//You can get html page elements

//console.error("Error");

//Everything html will be going to be Object

title.innerHTML = "Hello Form!!";
title.style.color = "red"; //Change title color accessed style
document.title = "Change title";
console.dir(title);
