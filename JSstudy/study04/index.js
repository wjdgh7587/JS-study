function Something(test01, test02) {

	console.log('hello ${test01} test02 is : ${test02}');
	console.log(test01);
}
console.log('hello');

const test = Something("test", 2);
console.log(test);

const cal = {
	plus: function (a, b) {
		return a + b;
	},
	min: function (a, b) {
		return a - b;
	},
	multiple: function (a, b) {
		return a * b;
	},
	divide : function (a,b) {
		return a / b;
	},
	power : function (a,b) {
		return a ** b;
	}
	



}

const plus = cal.plus(5, 5);
const min = cal.min(5, 3);
const multiple = cal.multiple(3, 4);
const divide = cal.divide(4, 2);
const power = cal.power(2, 4);

console.log(plus);
console.log(min);
console.log(multiple);
console.log(divide);
console.log(power);