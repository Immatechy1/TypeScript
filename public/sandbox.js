"use strict";
const character = 'mario';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
let myName = "imma";
let age = 30;
let isBlackBelt = false;
// myName = 20;
myName = "imma";
// age = "imma"
age = 30;
// isBlackBelt = yes
isBlackBelt = false;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(8));
// ARRAYS
let names = ['luigi', 'mario', 'yoshi'];
// names.push(3);
// names[0] = 3;
names.push('toad');
let numbers = [10, 20, 30, 40];
// numbers.push(imma);
// numbers.push('toad');
numbers[0] = 3;
let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 'imma';
// OBJECTS
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.name = "ryh";
ninja.age = 30;
// ninja.age = 'imma'
// ninja.skills = ['fighting', 'sneaking']
ninja = {
    name: 'imma',
    belt: 'blue',
    age: 30
};
// EXPLICIT TYPES
let characters;
let myAge;
let isLoggedIn;
// myAge = "imma";
myAge = 20;
// characters = 10;
characters = "imma";
// isLoggedIn = yes;
isLoggedIn = true;
//ARRAYS
let ninjas = [];
// ninjas = [10, 20]
ninjas = ["10", "20", "ball"];
ninjas.push('shaun');
// UNION TYPES
let mix = [];
mix.push('shaun');
mix.push(20);
mix.push(false);
console.log(mix);
let uid;
uid = "123";
uid = 123;
//OBJECTS
let ninjaOne;
// ninjaOne = "imma", 
ninjaOne = {
    name: 'yoshi',
    age: 30,
};
let ninjaTwo;
ninjaTwo = {
    name: 'imma',
    beltColour: 'blue',
    age: 30,
};
let isAge = 25;
isAge = true;
console.log(isAge);
isAge = "HELLO";
console.log(isAge);
isAge = { name: 'luigi' };
console.log(isAge);
// Function
let greet;
//greet == hello`   
greet = () => {
    console.log('hello, again');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, 20);
const added = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
// A function in typescript retun void when we dont return anything
added(5, 10);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
// const greets = (user: {name: string, uid: StringorNum}) => {
//     console.log(`${user.name}says hello `);
// }
const greets = (user) => {
    console.log(`${user.name}says hello `);
};
// FUNCTION SIGNATURE
// let greet: Function
// example 1  
let gret;
gret = (name, greetings) => {
    console.log(`${name}says${greetings}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetail;
logDetail = (ninja) => {
    console.log(`${ninja.name}is${ninja.age} years old`);
};
