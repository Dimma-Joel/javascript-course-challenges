//Values and variables

// 1. Declare variables called country, continent and population and assign their values according to your own country (population in millions).

//2. Log their values to the console.

const country = "Nigeria";
const continent = "Africa";
let population = 10;

console.log(country);
console.log(continent);
console.log(population);

//Data Types

const isIsland = false;
let language = "English";

// isIsland = true;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//Basic operators
console.log(population / 2);

population++;
console.log(population);

let finlandPopulation = 6;
let comparePopulation = population > finlandPopulation;
console.log(comparePopulation);

let averagePopulation = 33;
let compareAveragePopulation = population < averagePopulation;
console.log(compareAveragePopulation);

//CHALLENGE #1

/*Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2). */

//SOLUTION

//TEST DATA 1

// let massMark = 78;
// let heightMark = 1.69;

// let massJohn = 92;
// let heightJohn = 1.95;

// //BMI = mass / (height * height)
// let BMIMark = massMark / (heightMark * heightMark);
// let BMIJohn = massJohn / (heightJohn * heightJohn);

// let markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark);
// console.log(BMIJohn);
// console.log(markHigherBMI);

//TEST DATA 2

// let massMark = 95;
// let heightMark = 1.88;

// let massJohn = 85;
// let heightJohn = 1.76;

// //BMI = mass / (height * height)
// let BMIMark = massMark / (heightMark * heightMark);
// let BMIJohn = massJohn / (heightJohn * heightJohn);

// let markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark);
// console.log(BMIJohn);
// console.log(markHigherBMI);

///////////////////////////////
//Strings and template literals
// const description =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " million people speak " +
//   language;

const description = `${country} is in ${continent}, and its ${population} million people speal ${language}`.;

console.log(description);
