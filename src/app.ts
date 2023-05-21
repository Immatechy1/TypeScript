// INTERFACE

interface isPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): void;
}

const me: isPerson = {
    name: 'imma',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('i spent', amount);
        return amount;
    }
}
console.log(me)

const greetPerson = (person:isPerson) => {
    console.log('hello', person.name)
}

greetPerson(me)



import { ListTemplate } from './classes/ListTemplate.js';
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import {HasFormatter} from './interface/hasFormatter.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);

const inOne = new Invoice ('mario', 'work on mario website', 250);
const inTwo = new Invoice ('luigi', 'work on luigi website', 300);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs)

// let invoices: Invoice[] = [];
// invoices.push(inOne);
// invoices.push(inTwo);

// invoices.forEach (inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })


const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)

    }
    list.render(doc, type.value, 'end');
})