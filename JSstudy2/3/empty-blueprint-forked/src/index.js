// <⚠️ DONT DELETE THIS ⚠️>
import ".style.css";
// <⚠️ /DONT DELETE THIS ⚠️>

//Colour list value
const colours = ["#9b59b6", "#2980b9", "#f1c40f"];

const H1 = document.querySelector("h1");

//Body variable
const BODY = document.querySelector("body");

var intFrameWidth;

const masterHandleResize = {
  handResize: function handleResize(event) {
    intFrameWidth = window.innerWidth;

    if (intFrameWidth >= 0 && intFrameWidth <= 600) {
      BODY.style.backgroundColor = colours[0];
    } else if (intFrameWidth > 600 && intFrameWidth < 800) {
      BODY.style.backgroundColor = colours[1];
    } else {
      BODY.style.backgroundColor = colours[2];
    }

    console.log("Get innerWidht value");
    console.log(intFrameWidth);
  }
};

function init(event) {
  H1.style.color = "white";
  BODY.style.backgroundColor = colours[0];
  window.addEventListener("resize", masterHandleResize.handResize);
}

init();
