const s = 'technology, computers, it, code';

console.log(s.split(', '));

//arrays - variable that hold multiple values

const fruits = ['apples', 'oranges', 'pears'];

fruits.push('mangos');
fruits.unshift('strawberies');
fruits.pop();
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'));

console.log(fruits);

const person = {
    firstName: 'Mahmoud',
    lastName: 'Chaieb',
    age: 25,
    hobbies: ['movies', 'sport', 'videogames'],
    address: {
        street: 'saada',
        state: 'ben arous',
        country: 'tunisia'

    }
}

console.log(person.firstName, person.age);
console.log(person.hobbies[1]);
console.log(person.address.country);

const { firstName, lastName, address: { country } } = person;
console.log(country);


person.email = 'mahmoud@gmail.com';
console.log(person);

const todos = [
    {
        id: 1,
        text: 'learn to code',
        isCompleted: true

    },
    {
        id: 2,
        text: 'play videogames',
        isCompleted: true

    },
    {
        id: 3,
        text: 'Slepp',
        isCompleted: false

    }
];
console.log(todos[1]);
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// FOR LOOP
for (let i = 0; i <= 10; i++) {

    console.log(`for loop Number:${i}`);
}
// WHILE
let i = 0;
while (i < 10) {
    console.log(`while loop number:${i} `);
    i++;

}

for (let  todo of todos) {

    console.log(todo);
}


//forEach, map, filter


todos.forEach(function (todo) {
    console.log(todo.text);
})  ;


// map
const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText);

// filter


const todoCompleted = todos.filter(function (todo) {

    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text;

})
console.log(todoCompleted);

//conditionals

const x = 11;
const y = 13;
if (x > 5 || y > 10)  {

    console.log('true0');
} else if(x > 10) {
    console.log('x greater than 10');
} else {
    console.log('x is less 10');
}

const m = 10;
const color = m > 10 ? ' red' : 'blue';
console.log(color);
// switch


const colore = 'red';
switch (colore) {

    case 'red':
        console.log('colore is red');
        break;
    case 'blue':
        console.log('colore is blue');
        break;
    default:
        console.log('colore is not red or blue');
        break;



}


//functions

const addNums = (num1 = 1, num2 = 2) => {

    return num1 + num2;
}
console.log(addNums(5, 5));


























