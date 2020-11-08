//DOM 2
const title = document.querySelector("#titleTest");
const BASE_COLOR = "rgb(22, 160, 133)";
const OTHER_COLOR = "#e74c3c";

function handleClick() {
  const currentColor = title.style.color;
  console.log(currentColor);
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
function init() {
  //title.style.color = BASE_COLOR;
  //title.addEventListener("click", handleClick);
  title.addEventListener("mouseenter", handleClick);
}

init();

function handleOffline() {
  console.log("testNetwork test!");
}
function handleOnline() {
  console.log("Hello");
}

//navigator.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
