//condition
if ("10" === 10) {
  //=== 같은지 비교
  console.log("hi");
} else {
  console.log("ho");
}

//AND OR NOT 연산자

//AND
if (20 > 4 && "test" === "test") {
  console.log("right");
} else {
  console.log("wrong");
}

//OR
if (20 > 4 || "test" === "test") {
  console.log("right");
} else {
  console.log("wrong");
}

/**
 * true && true = true
 * false && true = false
 * true && false = false
 * false & false = true
 *
 *  true || true = true
 * false || true = true
 * true || false = true
 * false || false = false
 */

const name = prompt("What is your name?");
console.log(name);

