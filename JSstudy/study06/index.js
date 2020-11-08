//DOM 2
const title = document.querySelector("#titleTest");

function handleResize() {
  title.style.color = "blue";
}
// function handleResize(event) {
//   console.log(event);
// }

//window.addEventListener("resize", handleResize);
//size 변경시 handleResize 함수 호출

title.addEventListener("click", handleResize);
