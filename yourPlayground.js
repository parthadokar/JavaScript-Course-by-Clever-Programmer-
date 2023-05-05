// console.log('Hello World')
// console.log('Parth')

// // variables
// let name = 'Parth Adokar'
// console.log(name)

// let sentence = 'How are you doing , Hope you are doing great'
// console.log(sentence)

// operators
// food = Number(prompt('What is your final bill amount'))
// tipPercentage = Number(prompt('How much do you want to tip?')) / 100
// tipAmount = food * tipPercentage
// total = food + tipAmount
// console.log('total',total)
// console.log('tip amount',tipAmount)

// user input

// data types

// type casting

// Weather app 

// let weather = prompt("How is the weather?")
// if (weather == 'rain') {
//   console.log('Grab your umbrella ✔')
// } else {
//   console.log('Wear your sunglasses ✌')
// }

// functions 
// this is a function called 'sayMyName'
// this has zero arguements
// this logs out the name to the console
function sayMyName(){
    console.log('Parth');
}

// sayMyName()

//  this function is called 'sayMyName2'
// this has one arguments
// this also logs out name to console
function sayMyName2(name){
    console.log(name);
}

// sayMyName2('Parth')

// this function is called 'greeting'
// this takes one argument called 'name'
// this prints out a sentence in a template literal
function greeting (name) {
    greet = `Hi ${name}, Nice to meet you!`
    console.log(greet);
}

// greeting('Parth')

function sum(a,b) {
    return a + b
}

num1 = sum(2,3)
// console.log(num1);

function calculateFoodTotal(food,tip){
    tipPercentage = tip / 100
    tipAmount = food * tipPercentage
    total = sum(food,tipAmount)
    return total
}

// console.log(calculateFoodTotal(200,20));

// Arrow Function
// arrow function with explicit return 
const sum1 = (a,b) => {
    return a + b;
}

// Implicit Return 
// IMP : arrow functions with implicit return , remove curly braces
const sumArrow5 = (a,b) => a + b

// console.log(sumArrow5(10,30));

// Array 
// Created a array
// Used indexing
item = ['🍎','🍊','🍌']
// console.log(item)
// console.log(item[2])
// Pushed a item in the array
item.push('🍫')
// console.log(item)

// Array slice 
// Starts from 0 and upto to 2 [0,1]
// console.log(item.slice(0,2))

// console.log(item.indexOf('🍫'));

// console.log(item.length);