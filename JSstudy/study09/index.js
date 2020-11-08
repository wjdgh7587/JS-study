//DOM 2
const title = document.querySelector("#titleTest");

const CLICKED_CLASS = "clicked";

function handleClick() {
  // const hasClass = title.classList.contains(CLICKED_CLASS);
  // //contain은 해당 값을 가지고 있냐 없냐를 판단하여 true or false를 반환한다.
  // const currentClass = title.className;
  // if (hasClass) {
  //   title.classList.remove(CLICKED_CLASS);
  // } else {
  //   title.classList.add(CLICKED_CLASS);
  // }

  //toggle 사용시 간단하게 수정이 가능하다.

  title.classList.toggle(CLICKED_CLASS);
}
function init() {
  title.addEventListener("click", handleClick);
}

init();
