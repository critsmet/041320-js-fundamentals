//- - - - -
//VARIABLES
//- - - - -

//'var' and 'let' allow you to declare a variable without assigning it a value.
var student //undefined
let student2 //undefined
//let student2 declaring a second time would throw an error
//in this case, the value is 'undefined'

//but we can change let and var
student = "david"
student = "drew"
student2 = "regina"
student2 = "ryan"
//basically never use var, it gives you too much freedom:
//1. It never throws an error if you declare the same variable twice
//2. They are only function scoped, not block scoped like let and const
//3. Linters and most JS pros just say it's bad practice

//'let' allows you to change the value of a declared variable, and does not let you re-assign the variable name later
//best for iterators or for rare times when you have values that you expect to reassign several times in your application

//'const' does not allow you to declare a variable without assigning a value AND you can never change the value

const student3 = "franklyn"
// student3 = "bryce"would throw an error
//You are encouraged to use 'const' as often as possible, although some big JS developers say const was a mistake:
//https://twitter.com/dan_abramov/status/1208369896880558080?lang=en

//Set multiple variables at once, works with 'let' or 'const'

//- - - - -
//DATATYPES
//- - - - -

//Strings

let person = "Sadie"
//Interpolation in JS uses backticks
let sayName = `My name is ${person}`
console.log(sayName)

//Numbers

let two = 2
//Can be whole numbers or decimals
let oneAndAHalf = 1.5
//arithmetic
//+, -, *, /

console.log(22 * oneAndAHalf)
//Coercion

//increment operator
let i = 1
i++
//i => 2
//decrement operator
i--

//Booleans

let loggedIn = true
loggedIn = false

let loggedInUser = null

//To JS, empty strings (""), 0 equate to false, (null and undefined can be coerced to false). Everything else is true.

//The difference between undefined and null
//undefined means that you declared something but never added a value to it
//null is a value that we assign to something

//Arrays & Objects

let arrayOfNums = [1, 2, 3]
let object = {"key": "value"}
//values on keys can be accessed using dot notation (object.key), or bracket notation (object['key'])

//Remember that Arrays and Objects can be passed by reference, not by value.
//What does this mean?
let sameReference = arrayOfNums

//Comparison Operator and Coercion

//- - - - - - - - - - -
//FUNCTIONS AND METHODS
//- - - - - - - - - - -

//Define a function

// def method(arg)
//  stuff goes here
// end


//Regular JS functionS - LEARN THIS WAY FIRST

function myFunction(num, numToMult){
  return num * numToMult
  //THERE ARE NO IMPLICIT RETURNS IN REGULAR JS FUNCTIO S
}

console.log(myFunction(5, 2))

//Arrow function - ES6, will be very important in a few weeks

// const mySecondFunc = () => {
//   return num * numToMult
// }

//One line arrow functions don't need curly braces and have implied returns
//One line functions with implicit returns

const mySecondFunc = () => num * numToMult

//Pass in an argument

//Difference between a function definition/declaration, reference, and execution

//Definition/declaration:

function exampleFunction(){
  console.log("I'm a function!")
}

function callAnotherFunction(functionArg){
  functionArg()
}

//Reference:
exampleFunction
callAnotherFunction

//Execution:
callAnotherFunction(exampleFunction)


//Functions are first-class citizens, meaning that they can be saved to variables and in arrays and objects. They can be passed are arguments or set as return values.

let objectOfFunctions = {
  first: function(){console.log("I'm a function!")},
  second: callAnotherFunction
}

objectOfFunction.first()

let arrayOfFunctions = [exampleFunction, callAnotherFunction]

//Use as argument for functions that requires callbacks, like iterators, see below

//an anonymous function is generally written when it will only be used in a specific circumstance,
//generally as a callback function

//Iterate over each of these numbers and return a new array with the same amount of elements as the original, however I want all of the elements of the original to be multiplied by 2 in the new

let numArray = [1, 2, 3]

function multBy2(number){
  return number * 2
}

//numArray.each {|num| num * 2}

numArray.forEach(multBy2)

// numArray.forEach(function(num){
//   return num * 2
// })

//callback function is a function argument that the method will use to determine the execution logic

//.map is an iterator that we use when we want to make a transformation on every element in an array. The new array will always have the same amount of elements as the original.

numArray.map(multBy2) // => [2, 4, 6]

//.forEach is how we iterate over Arrays, but we cannot use .forEach with objects.
//forEach, like in Ruby, always returns the original collection

//to iterate over objects, we use for...in loop

//.reduce

//.select

function greaterThan1(num){
  return num > 1
}

numArray.select(greaterThan1)

//numArray.select {|num| num > 1}

// => [2, 3]

//.find

numArray.find(function(num){
  return num > 2
})

// => 3


//- - - - - - - - - - - - - -
//SCOPES, CLOSURES, HOISTING
//- - - - - - - - - - - - - -
let name = "Chris"

function myFunction(){
  console.log(`I am a function, Also, my name is ${name}`)
}

myFunction()

 //the value does not get set in the compilation phase

console.log(name);

// let a = "first var"
//
// function testFunction(){
//   let x = "test"
//   function anotherFunction(){
//     let y = "another variable"
//     console.log(x) // -> "test"
//     console.log(a) // -> "first var"
//     console.log(z) // -> doesn't work
//     yetAnother() // works
//   }
//   function yetAnother(){
//     console.log(x) // -> "test";
//     console.log(y) // can't do that
//     let z = "yet another variable"
//     anotherFunction() //works
//   }
// }
//
// anotherFunction()
// yetAnother()

//console.log(x) // => does not exist

//PHASES//

//COMPILATION PHASE

//The first pass is the compilation phase, in which the engine steps through our code line-by-line:

//It ignores all function executions

//When it reaches a variable declaration, the engine allocates memory and sets up a reference to the variable's identifier, e.g., myVar.
//With var, the variable name is declared but the value is not set until the execution phase.
//With let and const, the names are reserved but the values aren't set NOR does the program allow the variables to be called until they've been assigned variables
//See hoisting below

//When the engine encounters a function declaration, it does three things:

//1. Allocates memory and sets up a reference to the function's identifier, or the variable name we gave it if there is one e.g., `myFunc`.

//2. Creates a new execution context with a new scope.

//3. Adds a reference to the parent scope (the outer environment) to the scope chain, making variables and functions declared in the outer environment available in the new function's scope.

//EXECUTION PHASE - the code is executed, and functions execute

//------------------
//DEFINITIONS//
//------------------

//SCOPE CHAIN - Functions declared within functions

//LEXICAL SCOPE - Referencing functions declared elsewhere inside another function

//HOISTING

//what is the value of an argument inside of a function if, when the function is executed, we never pass in the variable

//difference between 'undefined' as return value and undefined error
