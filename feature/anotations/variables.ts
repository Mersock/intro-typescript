let apples = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingmush: null = null;
let underfide: undefined = undefined;

//object
let now: Date = new Date();

// Array
let collors: string[] = ['red', 'green'];
let myNumbers: number[] = [123, 12];
let truths: boolean[] = [true, false];

//Classs
class Car {}

let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when use annotations
//1. functions that returns the 'any' type
const json = '{"x":10,"y":20}';
const coordinate: { x: number; y: number } = JSON.parse(json);
console.log(coordinate);

//2. when we declae a variable on one line and initalizate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//3. Variable whose type connot be infered correctly
let numbers = [-1, -10, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  numberAboveZero = numbers[i];
}
