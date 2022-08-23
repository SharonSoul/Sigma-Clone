/*
// If and Else statements
let cutoff = 75
let grade = 50

if (cutoff == 75 && grade < cutoff) {
    console.log("You have failed, try again next year.")
}
else {
    console.log("Congratulations! You passed!")
}

*/
/*
    Arrays can be modified, can hold multiple datatypes
    Syntax for arrays(square brackets)

*/
// const shopping = ["bread", 20, "fish", 50, "John"]
// console.log(shopping)


//Methods in javascript
//Finding the length of a variable - .length
// console.log(shopping.length)

/* Indexing in javascript*/
// console.log(shopping[0])

//  Modifying items in an array
// shopping[0] = "rice"
// console.log(shopping)

// a = shopping[4]
// console.log(a)

// // Finding the index values of a list item in an array
// let schools = ["OAU", "UNILORIN", "UI", "FUTA", "UNILAG"]
// console.log(schools.indexOf("UI"))

// // Common methods in arrays
// // The method - push() - for adding new items to an array
// let trenches = ["Garri", "Corn", "Cassave"]
// trenches.push("Akara", "Fufu")
// console.log(trenches)

// // The method - pop() - for removing the last item in an array
// trenches.pop("Akara")
// console.log(trenches)

// // The method shift()- for removing the first item 
// // and unshift() - for adding an item to the front of the list
// const countries = ["Nigeria", "Spain", "Italy", "Brazil"]
// //countries.shift()
// countries.unshift("Ghana")
// console.log(countries)

// // For loops
// // Loops are a quick and easy way to do something repeatedly
// // x++ means keep adding 1 to the value of x as long as it is less than 100
// // let x = 0
// // for (let x = 0; x <= 100; x++)
// // console.log(x);


// /*
// let y = 0
// for (let y = 0; y <= 100; y+=3)
// console.log(y)
// */


// // let t = 0
// // for (
// //     let t = 0; 
// //     t <= 100; 
// //     if (t%3 == 0) {
// //         console.log(t)
// //     }
// //     )
// /*
// let t = 0
// for (let t = 0; 
//     t <= 100; 
//     t++) {
//     if (t%3 == 0) {
//     console.log(t)
//     }
//     else {
//         console.log("This is not a divisible of 3")
//     }
// }
// */

// /*
// s = 0
// while (s <= 100) {
//     s += 1
//     if (s%2 != 0) {
//         console.log(s + " - This is an odd number")
//     }
//     else {
//         console.log("")
//     }
// }
// */

// Functions
// Functions are a block of code or set of statements that performs specific tasks. They take in input and give output. A function must be difined before it is used and then called. 

/*
let user = "Sharon"
const greet = function () {
    console.log("Hello")
    console.log("My name is ...")
}
greet()

let breed = "Rott"
function dim() {
    if (breed == "Rott")
    console.log("Hi, i am a Rottweiler breed of dog")
    if (breed != "Rott")
    console.log("Hello, i am a dog, but of a different breed")
}
dim()
*/

// Functions take in parameters, the values passed into the parameters are known as arguements. The parameters are placeholdrs for you to pass values into them. Functions can take in multiple parameters.
// Using backtext (`) and dollar sign ($) is used for deconstructing arguments in the function parameters into the output.

function introduce(name, age) {
    console.log(`I am ${age} years old!`)
    console.log(`My name is ${name}.`)
}
introduce("Favour", 95)

//ASSIGNMENTS
// Write a weather program that if the specified temperature is given, it should be logged out if it is sunny or if it will rain
// Create an array, loop through the array and print them all to the console.
// Print the odd numbers between 1 - 100 and multiply them by 3
// Create a function that takes in three parameters, either exam scores or eligibility to vote (write an if statement into the function). The name of the person and the age will be logged out as well.

/*
let nameb = "Sharon"
console.log(`I am ${nameb}`)


for (let i = 50; i >= 0; i -= 10) {
    console.log(i)
}
*/


/*
// Loop through an array
let breeds = ["Rott", "Pitbull", "Husky", "Labrador", "German Shepherd"]
for (let i = 0; i < breeds.length; i++) {
    console.log(breeds[i])
}

// While loop
let int = 5
while (int < 5) {
    console.log(`The number is now ${int}`)
    int += 1
}
*/



/*
// Guessing game
// This gain generates a random number for the target number as well as the guessing number, andthen compares them until the both of them are equal. If they are not equal, it logs out a message, and if it is equal, it logs out a different message.
// Math is an input for carrying out functions, like Math.random for generating random numbers.
// .floor is used to round down, .ceil is for rounding up
// .random is for generating random numbers, which is usually in floats, therefore we multiply by 10


let targetNum = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() * 10)

while (guess !== targetNum) {
    console.log(`Guessed ${guess}...Incorrect`)
    guess = Math.floor(Math.random() * 10)
}
console.log(`CORRECT! Guessed: ${guess} & target was: ${targetNum}`)
*/


/*
// Guessing game using booleans and if statements
let targetNum = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() * 10)

while (true) {
    guess = Math.floor(Math.random() * 10)
    if (guess === targetNum) {
        console.log(`CORRECT! Guessed: ${guess} & target was: ${targetNum}`)
        break;
    }
    else {
        console.log(`Guessed ${guess}...Incorrect`)
    }
}
*/


// Predicting Larger , smaller or equal numbers
function largeNumb(a, b) {
    if (a > b) {
        console.log(`${a} is bigger than ${b}`)
    }
    else if (b > a) {
        console.log(`${b} is bigger than ${a}`)
    }
    else {
        console.log(`${a} and ${b} are equal numbers`)
    }
}
largeNumb(77, 77)


// Built-in methods returns values when you call them
function add(x, y) {
    return x + y
}

let addition = add(60, 31)
console.log(addition)

let message = "    LOVELY    "
whisper = message.trim().toLowerCase()
console.log(whisper)

let word = "Skateboard"
facialHair = word.slice(5).replace("o", "e")
console.log(facialHair)


dice1 = Math.floor(Math.random() * 10)