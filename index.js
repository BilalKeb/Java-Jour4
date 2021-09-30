var cat = {
  name: "Garfield",
  age: 3,
  isCute: true,
};

console.log(cat);
console.log(cat.age);
if (cat.isCute == true) console.log("So cute");

// // Exercice - 2
var cat2 = {
  name: "Maurice",
  age: 9,
  isCute: false,
};

var cats = [cat, cat2];

// Exercice 3

function checkIfEven(num) {
  if (num % 2 === 1) {
    console.log("impaire");
  } else if (num % 2 === 0) {
    console.log("paire");
  }
}

checkIfEven(43);

checkIfEven(40);

checkIfEven(23343);

// Exercice - 4

function compare(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is bigger");
  } else if (num2 > num1) {
    console.log(num2 + " is bigger");
  } else {
    console.log(" both are the same ");
  }
}
compare(39, 82);
compare(3, 3);
compare(20, 5);

// Exercice - 5

function addUp(num) {
  for (i = 0; i < 12; i++) {
    console.log(i);
  }
}
