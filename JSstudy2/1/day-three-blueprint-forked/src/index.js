// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

var title = document.querySelector("h2");

const superEventHandler = {
  handleRightClick: function handleRightClick(event) {
    title.innerHTML = "You just cliked with right mouse button!";
    title.style.color = colors[4];
    setTimeout(function () {
      title.innerHTML = "Hello!";
      title.style.color = "black";
    }, 2300);
  },
  handleResize: function handleResize(event) {
    title.innerHTML = "You just resized";
    title.style.color = colors[2];
    setTimeout(function () {
      title.innerHTML = "Hello!";
      title.style.color = "black";
    }, 2300);
  },

  handleMouseEnter: function handleMouseEnter(event) {
    title.innerHTML = "The mouse is here";
    title.style.color = colors[0];
    setTimeout(function () {
      title.innerHTML = "Hello!";
      title.style.color = "black";
    }, 2300);
  },
  handleMouseOver: function handleMouseOver(event) {
    title.innerText = " The mouse is gond!";
    title.style.color = colors[1];
    setTimeout(function () {
      title.innerHTML = "Hello!";
      title.style.color = "black";
    }, 2300);
  }
};

window.addEventListener("contextmenu", superEventHandler.handleRightClick);
window.addEventListener("resize", superEventHandler.handleResize);
title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseout", superEventHandler.handleMouseOver);
