//CHALLENGES

//////////////////////////////////////////
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

////////////////////////////////////
// CHALLENGE 2

if (averagePopulation > population) {
  const average = averagePopulation - population;
  console.log(`${country}'s population is ${average} million below average`);
} else {
  console.log(`${country}'s population is above average`);
}

///////////////////////////////////////
//CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

const scoreDolphins = 96 + 108 + 89 / 2;
const scoreKoalas = 88 + 91 + 110 / 2;

console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
}

//ASSIGNMENTS
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

///////////////////////////
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

const description = `${country} is in ${continent}, and its ${population} million people speal ${language}.`;

console.log(description);

//Type coercion and conversion
//Predict the result of these 5 operations without executing them:

console.log("9" - "5"); // -> ? 4
console.log("19" - "13" + "17"); // -> ? '617'
console.log("19" - "13" + 17); // -> ? 23
console.log("123" < 57); // -> ? false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> ? 1143

// Equality operators: == vs ===

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your contry have?")
// );

// if (numNeighbours === 0) {
//   console.log("Only 1 border");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

//Logical operators

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
