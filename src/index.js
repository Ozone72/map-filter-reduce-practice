var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const myArr = numbers.map((element) => element * 2);
// console.log(myArr);

const myArr2 = [];
numbers.forEach((element) => {
  myArr2.push(element * 2);
});
// console.log(myArr2);

//Filter - Create a new array by keeping the items that return true.
const filtArr = numbers.filter((element) => element < 10);
// console.log(filtArr);

const filtArr2 = [];
numbers.forEach((element) => {
  if (element < 10) {
    filtArr2.push(element);
  }
});
// console.log(filtArr2);
//Reduce - Accumulate a value by doing something to each item in an array.
const reducer = (accum, val) => accum + val;
// console.log(numbers.reduce(reducer, 100));
//Find - find the first item that matches from an array.
// console.log(numbers.find((n) => n < 60 && n > 50));

//FindIndex - find the index of the first item that matches.
console.log(numbers.findIndex((n) => n < 60 && n > 50));
