// INTERFACE
const me = {
    name: 'imma',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('i spent', amount);
        return amount;
    }
};
console.log(me);
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
import { ListTemplate } from './classes/ListTemplate.js';
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
let docOne;
let docTwo;
docOne = new Invoice('Yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);
const inOne = new Invoice('mario', 'work on mario website', 250);
const inTwo = new Invoice('luigi', 'work on luigi website', 300);
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
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docsOne = addUID({ name: 'yoshi', age: 40 });
console.log(docsOne.age);
const docsThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' },
};
const docsFour = {
    uid: 2,
    resourceName: 'ShoppingList',
    data: ['bread', 'milk', 'tea']
};
console.log(docsThree, docsFour);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceType: ResourceType.DIRECTOR,
    data: { name: 'shaun' },
};
const docFour = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: ['bread', 'milk', 'tea']
};
console.log(docThree, docFour);
//tuple
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
let tup = ['ball', 25, true];
tup[0] = "ken";
tup[1] = 40;
