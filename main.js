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


































