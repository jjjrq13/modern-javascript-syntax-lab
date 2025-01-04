// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const numsMultipliedByTwo = nums.map((num) => {
    return num * 2;
});

console.log('Exercise 1 Answer: ', numsMultipliedByTwo);

//------------------------- 2 -------------------------

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [firstTopping, secondTopping] = pizzaToppings;

console.log('Exercise 2 Answer: ', firstTopping, ',', secondTopping);

//------------------------- 3 -------------------------

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
};

// Your code here
const { make, model } = car;

console.log('Exercise 3 Answer: ', make, ',', model);

//------------------------- 4 -------------------------

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// Your code here
const controversialPizzaToppings = [...pizzaToppings];

console.log('Exercise 4 Answer: ', controversialPizzaToppings);

//------------------------- 5 -------------------------
// Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//   make: 'Audi',
//   model: 'q5',
// };

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here

const myCar = { ...car };
myCar.model = 'q7';

console.log('Exercise 5 Answer: ', myCar);

//------------------------- 6 -------------------------

// Create an object named userProfile.
const userProfile = {};

// Define a variable named propertyName and assign a string to it (like a username, age, or email).
const propertyName = 'username';

// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
userProfile[propertyName] = 'jjjrq13';

// Your code here
console.log('Exercise 6 Answer: ', userProfile);

//------------------------- 7 -------------------------

// FILES MADE!

//------------------------- 8 -------------------------

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

const nounAndAdjective = (noun = 'cat', adjective = 'white') => {
    console.log(`The ${noun} is ${adjective}`);
};

console.log('Exercise 8 Answer:');
nounAndAdjective();

//------------------------- 9 -------------------------


// Convert the following `if...else` statement in to a ternary:

// let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

// Your code here

let tasty = true;
let pizza = tasty ? 'yum' : 'yuck';

console.log('Exercise 9 Answer:',pizza);

//------------------------- 10 -------------------------

let localLangConfig = null;
let lang = localLangConfig || 'en';

console.log('Exercise 10.1 Answer:',lang);

let savedUserTheme = null;
let theme = savedUserTheme || 'light';

console.log('Exercise 10.2 Answer:',theme);

//------------------------- 11 -------------------------

const adventurer = {
  name: 'Alice',
};

// Your code here:

let cat = adventurer.cat?.age;
console.log('Exercise 12 Answer:',cat);



