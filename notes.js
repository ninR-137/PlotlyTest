/*
//alert("Hello World");
console.log("Hello World");
console.error('This is an error');
console.warn("This is a Warning");
*/


//var, let, const >> let, you can reassign values

/*
let age = 30;
age = 31;
age = "thirty-one"; //Completely Valid

const age2 = 32;
//age2 = 35; This gives error
//console.log(age2);

//Primitive Data Types:
//Strings, Numbers, Boolean, null, undefined, Symbol
const name = 'John';
const age3 = 30;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined; //Explicit Declaration
let z; //Implicit Declaration
*/
//console.log(typeof z);



//CONCATENATION
/*
//console.log("My name is" + name + " and I am " + age3);
const hello = `My name is ${name} and I am ${age}`;
//console.log(hello);
console.log(hello.length);
console.log(hello.substring(0,5).toLowerCase());
console.log(hello.toUpperCase());
console.log(hello.split(''));//splits it to an array

const s = 'technology, computers, it, code';
console.log(s.split(', '));
*/


//ARRAYS - variables that hold multiple values

/*
const numbers = new Array(1,2,3,4,5);
const fruits = ['apples', false, 1337];
//Javascript is not statically typed Arrays can have multiple values with different types
console.log(numbers);
//console.log(fruits[1]);

fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('strawberries'));
console.log(fruits);
*/


//OBJECT LITERALS
/*
const person = {
	firstName : 'John',
	lastName: 'Doe',
	age: 30,
	hobbies: ['music', 'movies', 'sports'],
	address: {
		street: '50 main st',
		city: 'Boston',
		state: 'MA'
	}
}
*/

//console.log(person, person.firstName, person.lastName);
//console.log(person.hobbies[1], person.address.city);

/*
person.email = 'john@gmail.com'; // you can add additional properties
console.log(person.email);

const {firstName, lastName, address: {city}} = person; //destructuring
console.log(firstName, city);
*/



const todos = [
	{
		id: 1,
		text: "Take out Trash",
		isCompleted: true
	},
	{
		id: 2,
		text: "Meeting with boss",
		isCompleted: true
	},
	{
		id: 3,
		text: "Dentist appt",
		isCompleted: false
	}
]; //An array off Objects


// '{}', Describes an Object while '[]', Describes an Array
//console.log(todos[1].text);
/*
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
*/



/*
//LOOPS
for(let i = 0; i < 10; i++){
	console.log(i);
};

//While
let i = 0;
while (i < 10){
	console.log(`While Loop Number: ${i}`);
	i++;
}

for(let i = 0; i < todos.length; i++){
	console.log(todos[i].text);
}


for(let todo of todos){
	console.log(todo.isCompleted);
}
*/


/*
//forEach, map, filter
todos.forEach(function(todo){
	console.log(todo.text);
});


const todoText = todos.map(function(todo){
	return todo.text;
});
console.log(todoText);
*/

const todoCompleted = todos.filter(function(todo){
	return todo.isCompleted === true;
});

const todoCompleted2 = todos.filter(function(todo){
	return todo.isCompleted === true;
}).map(function(todo){
	return todo.text;
});

//console.log(todoCompleted);
//console.log(todoCompleted2);



//const todoCompleted3 = todos.filter = todo => todo.isCompleted === true; //THIS IS WRONG
//const todoCompleted3 = todos.filter(todo => todo.isCompleted === true); //THIS IS RIGHT
//const todoCompleted3 = todos.filter(todo => todo.isCompleted === true).map(todo => todo.text);
//console.log(todoCompleted3);



//CONDITIONS

/*
let x2 = 10;
//x2 = '10' //Works either way

if(x2 == 10) {
	console.log('x is 10');
}


if(x2 === 10) {
	console.log('x really is the number 10');
} else if(x > 10){
	console.log('x is greater than 10');
}
else {
	console.log('x is less than 10');
}
*/



/*
//Turnary operator
const x3 = 10;

const color = x3 > 10 ? 'red' : 'blue';

//console.log(color);

switch(color){
	case 'red':
		console.log('color is red');
		break;
	case 'blue':
		console.log('color is blue');
		break;
	default:
		console.log('color is not red nor blue');
		break;		
}
*/

//-----------------------------------------------------//
//FUNCTIONS
//-----------------//
/*
function addNums(num1 = 1 , num2 = 1 ){ //You can set Default Values
	return (num1 + num2);
}
console.log(addNums(5,5));
*/

//-----------------//

//GOOD FOR SINGLE EXPRESSION FUNCTIONS
/*
const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);
addNums(5,5);
*/

//-----------------//
/*
const addNums = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNums(5,5));
*/
//-----------------------------------------------//

//OOP Programming

//Constructor Function
function Person(firstName, lastName, dob){
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);

	/*
	this.getBirthYear = function(){
		return this.dob.getFullYear();
	}



	this.getFullName = function(){
		return `${this.firstName} ${this.lastName}`;
	}
	*/
}
/*
Person.prototype.getBirthYear = function() {
	return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
	return `${this.firstName} ${this.lastName}`;
}
*/


//Class
//SAME THING BUT DIFFERENT SYNTAX
class SecondPerson {
	constructor(firstName, lastName, dob){
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = new Date(dob);
	}

	getBirthYear() {
	return this.dob.getFullYear();
	}

	getFullName() {
	return `${this.firstName} ${this.lastName}`;
	}
}


/*
//Instantiate Object
const person1 = new Person('Russel', 'Dioneo', '04-19-2001');
console.log(person1.getBirthYear()); //Very similar to an Object Literal
*/