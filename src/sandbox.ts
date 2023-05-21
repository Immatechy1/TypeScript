const character = 'mario';

console.log(character);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
    console.log(input);
});


let myName = "imma";
let age = 30;
let isBlackBelt = false

// myName = 20;
myName = "imma"

// age = "imma"
age = 30;

// isBlackBelt = yes
isBlackBelt = false

const circ = (diameter:any) => {
    return diameter * Math.PI
}

console.log(circ(8))


// ARRAYS
let names = ['luigi', 'mario', 'yoshi'];
// names.push(3);
// names[0] = 3;
names.push('toad');

let numbers = [10, 20, 30, 40];
// numbers.push(imma);
// numbers.push('toad');
numbers[0] = 3;


let mixed = ['ken', 4, 'chun-li', 8, 9]
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
let characters: string;
let myAge: number;
let isLoggedIn: boolean;

// myAge = "imma";
myAge = 20;
// characters = 10;
characters = "imma";
// isLoggedIn = yes;
isLoggedIn = true;

//ARRAYS
let ninjas: string[] = [];
// ninjas = [10, 20]
ninjas = ["10", "20","ball"]
ninjas.push('shaun');

// UNION TYPES
let mix: (string|number|boolean)[] = [];
mix.push('shaun');
mix.push(20);
mix.push(false);
console.log(mix)

let uid: any;
uid = "123";
uid = 123;

//OBJECTS
let ninjaOne: object;
// ninjaOne = "imma", 
ninjaOne = {
    name: 'yoshi',
    age: 30,
}

let ninjaTwo: {
    name: string,
    age: number, 
    beltColour: string,
}

ninjaTwo = { 
    name: 'imma',
    beltColour: 'blue',
    age: 30,
}


let isAge: any = 25;
isAge = true;
console.log(isAge)
isAge = "HELLO"
console.log(isAge)
isAge = {name: 'luigi'};
console.log(isAge)

// Function

let greet : Function;

//greet == hello`   

greet = () => {
    console.log('hello, again');
}

const add = (a:number, b:number, c:number | string = 10) => {
    console.log(a + b);
    console.log(c);
}

add(5, 10, 20);

const added = (a:number, b:number, c?:number | string ):void => {
    console.log(a + b);
    console.log(c);
}
// A function in typescript retun void when we dont return anything
added(5, 10,);

const minus = (a: number, b: number): number => {
    return a + b;
}

let result = minus (10, 7);



type StringorNum = string | number;
type objWithName = {name: string, uid: StringorNum};

const logDetails = (uid: StringorNum, item: string) => {
   console.log(`${item} has a uid of ${uid}`);
}

// const greets = (user: {name: string, uid: StringorNum}) => {
//     console.log(`${user.name}says hello `);
// }

const greets = (user: objWithName) => {
    console.log(`${user.name}says hello `);
}

// FUNCTION SIGNATURE

// let greet: Function

// example 1  
let gret: (a:string, b:string) => void;

gret = (name:string, greetings:string) => {
    console.log(`${name}says${greetings}`);
}

// example 2

let calc : (a:number, b:number, c:string) => void;

calc = (numOne:number, numTwo:number, action: string) => {
   if (action === 'add') {
        return numOne + numTwo;
   } else {
    return numOne - numTwo;
   }
}

// example 3
let logDetail: (obj: {name: string, age: number}) => void;

logDetail = (ninja: {name: string, age: number}) => {
    console.log(`${ninja.name}is${ninja.age} years old`);
}

