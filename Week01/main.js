import doSomething from "./doSomething";
import {square,halfOf,yourName } from "./lib";


console.log(squareValue(11));
console.log(halfOf(10));
doSomething();
console.log(yourName);


//let - It will allow you to change the value after initialization.
//let - It will not allow you to change the value after initialization.
let myName = "Leonardo";
console.log(myName);
myName = "Leonard";
console.log(myName);

const Name = "Maria";
console.log(Name);
Name = "Mari";
console.log(Name);