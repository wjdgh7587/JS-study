//alert('Im studying!! This is JS')

console.log("this is test");

//Variable
//JS는 가능한 우리가 입력한 값들의 타입이 무엇인지 값들을 통해 판단한다.

//initialization
//create
//use

let a = 221;
let b = a - 5;


//constant는 변하지 않는 변수를 사용할 경우 사용한다.
//JAVA static variable과 비슷하다.

a = 4; //변수를 실행하지 않고, 업데이트 시킴
/**
 * JS data type
 * 
 *  String, boolean, Number, Float
 */

//String
const what = "test String";
//Boolean
const what2 = false;

//Float
const what3 = 55.1;
console.log(b, a);
console.group(what);

//What is let?

/**
 * Organizing data with array
 * 
 */
const something = "Something"
const daysOfWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", 43, true, something];

console.log(daysOfWeek);
console.log(daysOfWeek[5])

/**
 * Organizing data with Object
 */

const testObject = {
	name: "Jeongho",
	age: 400,
	gender: "Male",
	isSomething: true,
	favMovies: ["Along the gods", "Lotr", "oldbody"]

	
}
 
console.log(testObject)
console.log(testObject.age);

testObject.gender = "Female";
console.log(testObject.gender);

