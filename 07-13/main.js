console.log("Hello")

// Create a function called `go` that takes 2 arguments: 
// 1. direction (forwards, backwards, etc.)
// 1. speed (mph).

// The function, when invoked, will print out the following in your console (for example): `The car is moving forward, at 25 mph.

function go(direction, speed) {
    console.log(`This car is moving ${direction}, at ${speed} mph.`)
    if (speed > 75) {
        console.log("SLOW DOWN")
    }
}

go("forward", "90")

// Add a condition inside the function to check if the speed is greater than 75 mph. If it is, add an additional message of SLOW DOWN!

// Example:

// The car is moving forward at 82 mph
// SLOW DOWN!

// Given the following set of data about chicken birth rates, you need to filter out the objects where the birth rate value is greater than 15 per 1000 chickens for that year. Store the good years in a new array named `bestYears`.

const birthRates = [
  { year: 1969, birthRate: 13}, 
  { year: 1970, birthRate: 16}, 
  { year: 1971, birthRate: 15}, 
  { year: 1972, birthRate: 11}, 
  { year: 1973, birthRate: 18}, 
  { year: 1974, birthRate: 17}, 
  { year: 1975, birthRate: 9}
]

const bestYears = []

// for (var i = 0; i < birthRates.length; i++) {
//     if (birthRate = 15) {
//         bestYears.push(birthRates[i])
//     }
// }
// console.log(bestYears)

birthRates.forEach(function (currentYear) {
    if (currentYear.birthRate > 15) {
        bestYears.push(currentYear)
    }
})

for (const currentYear of birthRates) {
    if (currentYear.birthRate > 15) {
        bestYears.push(currentYear)
    }
}
// This establishes a var objectname (currentYear) object of item = currentYear of birthRates

console.log(bestYears)

// 1. Create a function that logs the result of adding two numbers that were passed in as arguments.
// 2. Create another function that logs the result of subtracting two numbers that were passed in as arguments.
// 3. Invoke each function a couple times with different argument values.

function add(num1, num2){
    console.log(`Adding ${num1} + ${num2} = `, num1 + num2)
}
function sub(num1, num2){
    console.log(`Subtracting ${num1} - ${num2} = `, num1 - num2)
}

function calculate(num1, num2, operator){
    operator(num1, num2)
}

add(5, 3)
sub(5, 3)
calculate(1, 3, add)