//DOM 2
const title = document.querySelector("#titleTest");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  } else {
    title.className = "";
  }
}
function init() {
  title.addEventListener("click", handleClick);
}

init();
