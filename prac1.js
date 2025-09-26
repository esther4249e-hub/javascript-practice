//string=== word e.g 'hello' or 'hey' or '25'
// number=== interger or decimal e.g 1,2,3
// array=== list or collection of items or data e.g ['1', 'hello', 'we', 'true']
//object=== a key: value word like in the e.g {word: 'meaning'; house: 'a place to live'}
// boolean===b true or false e.g true, false 

//   operation

// addition
5 + 3; // 8

// subtraction 
10 - 3; // 5

// multiplication
4 * 4; // 16

//  division
 16 / 4;  // 4

 //modulo (remainder)
 10 % 3; //1

//  exponents
2 ** 3; //8 

// console.log('hello world')

// console.log(2**5)
console.log('esther')
console.log(['1', 'hello','we','true' ])
 
// variable
// a variable is declared using "let" which can be  changed, while a variable is declared using "const" cannot be changed

//  example:
let myvariable = "hello world"
 console.log(myvariable)

let myname = "david doe"
let myage = 10;

myname = "uthman";

//  console.log('my name is $ {myname} and i am {myage}years old')

// when declaring a variable using the "const" keyword, you must asign a value to it immediately otherwise
const pi = 3.14159
console.log(pi)


// LESSON TWO

// array = a coolection of data item

let myArray = ["apple",4, true, false, "banana","cherry" ];

// adding more items to already existing list/collection
myArray.push("orange","mango");
// console.log(myArray);

// removing the last item 
myArray.pop();
// console.log(myArray);

// removing an item from a random position in a list/collection
// we use the splice method and specify the position of the item followed by a coma and we specify the number(number of item to be remove)
myArray.splice(3,2)
// console.log(myArray);

// to add an item to the front of the array

myArray.unshift(" i am the first")

//  to remove an item from the front of the array
myArray.shift()
console.log(myArray)

// printing a single item for the list of array or printing a specific item from the array

console.log(myArray[0], myArray[1])

// object = a key-value pair
let person = {name: "Esther", age: 19, level: "A level"};

// adding to already existing object
person.isStudent = false
// console.log(person)

// how to remove a property from an object
delete person.age

// how to print a specific property from an object 
console.log(person.name)
console.log(person.class)

let myself = { name: 'john',
age: 32, country: 'USA', job:'engineer',
hobbies:['reading', 'painting','coding'],
address:{
    street:'123 main st', city:' New york',
    state:'Ny',
    postal:[10022,44554]
}}

// Q1: print to the console number 44554
// Q2: print the word coding to the console
// Q1: save Q2 answer in a variable and  a text "is fun" to the word. e.g "coding is fun"

console.log(myself.address.postal[1])

let question2 = myself.hobbies[2]
console.log(question2)

let question3 = myself.hobbies[2]
console.log(question3  + 'is fun')

// asking user for information
// the prompt function used to request or collect information from the User

 let userinformation = prompt('what is your name?')
 console.log(userinformation)

//  display or show  a message  to the user
// to show a user message we use the alert()function

alert('thank you')

// asking user to make a decision
// to allow the user make a decision we use the confirm()function

let userdecision = confirm("are you sure you want to quit")
console.log(userdecision)

// ? conditional statement
// this means writing an instruction for the computer to perform some task base on condition/situation
// e.g if my name is Esther,then greet good morning boss else greet good morning

let myboss = 'Esther'
// if(the condition here) {perform the task}
// else{perform this task}

if (myboss == 'Esther') {console.log('Good morning boss')}
else(console.log('Good morning sir'))

// assignment answer

let programming = {language:["javascript","python","html"],
    ischallanging :true,
    isrewarding: true,
    difficulty:8,
    jokes: "http://stackoverflow.com/question/234075/what-is-your-best-programmer-jokes"
}

programming.language.push("go")
console.log(programming.language)

programming.difficulty = 7;
console.log(programming.difficulty)

delete programming.jokes

programming.isfun = true
console.log(programming)

// ? LESSEON 4

// looping - iteration

let mycart = ["shoe","cloth","phone","cap"]

console.log(mycart[0])
console.log(mycart[1])
console.log(mycart[2])

for( let  index = 0; index < 4; index++){console.log(mycart[index])}

// function- a function is a block of re-useable code.
// a function that adds two numbers 

function addTwoNumbers(number1, number2){return number1 + number2}

console.log(addTwoNumbers(2,2))
console.log(addTwoNumbers(2,9))
console.log(addTwoNumbers(2,4))
console.log(addTwoNumbers(-8,2))

function sayHello(name){ return "Hello", + namen + "how are you doing today"}

console.log(sayHello("uthman"))
console.log(sayHello("wisdom"))
console.log(sayHello("bethany"))
console.log(sayHello("sope"))
console.log(sayHello("ope"))
console.log(sayHello("Elma"))
console.log(sayHello("kaima"))
console.log(sayHello("Reynolds"))
console.log(sayHello("Esther"))

//  Document manipulation - Document object modeling

let body = document.querySelector("body")
let p = document.querySelector("#me")
let h1 = document.querySelector("js-class")
console.log(h1)
console.log(p)
console.log(body)


// word spoken by Jesus 
// i am in the father and the father in me
// if anyone want to make heaven he most be baptised with water and the Holyspirit
// you hypocrites remove the planks in your eyes first before you look at your brother's
//  can you drink from my cup
//  peter on you i will build my church
//  are you still blind, how long will i be with you




