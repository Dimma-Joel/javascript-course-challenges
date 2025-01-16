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

const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;

console.log(description);
