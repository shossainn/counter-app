// document.getElementById("count-el").innerText = 5;

// let myAge = 26;
// myAge = myAge + 1;

// console.log(myAge);

//Game example challenge

// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

//Javascript function tutorials

// function increment() {
//   let count = 0;
//   count = count + 1;
//   console.log("count by 1", count);
// }

// function countLog() {
//   console.log("42");
// }
// calling the function
// countLog();
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// function totalSum() {
//   let sumTotal = lap1 + lap2 + lap3;
//   console.log(sumTotal);
// }

// totalSum();

// let lapsCompleted = 0;

// // Create a function that increments the lapsCompleted variable with one
// // Run it three times

// function increment() {
//   lapsCompleted = lapsCompleted + 1;
// }

// increment();
// increment();
// increment();

// console.log(lapsCompleted);

//initializing count
let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
console.log(countEl);

//creating a function called increment

function increment() {
  count = count + 1;
  countEl.textContent = count;
}
function decrement() {
  count -= 1;
  countEl.textContent = count;
}

//save function

function save() {
  let countStr = count + " , ";

  saveEl.textContent += countStr;
  console.log(count);

  //setting it to zero after hitting save
  countEl.textContent = 0;
  count = 0;
}

// // Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el");
// // Create two variables (name & greeting) that contains your name
// let name = "Riad";
// let greeting = "Welcome back ";
// // and the greeting we want to render on the page

// // Render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = greeting + name;
