/**  
Orientation - JS assignment 1
Solution by: My Mai
*/
// Declare variables
let userChoiceCount = 0;
let winCount = 0; 
let headCount = 0;
let reverseCount = 0;
let userArray = [];
let flipArray = [];
/* I put it outside of the button function 
so that it won't be declared again 
everytime I click Button */

// User's history 
function checkUserChoice() {
  const userChoice = document.querySelector('input[name="user-choice"]:checked').value;
  console.log('user choice', userChoice);
  const userResult = document.querySelector('#result-history');
  userArray.push(userChoice);
  userResult.textContent = 'User: ' + userArray;
}
const throwButton = document.querySelector('#throw-button');
throwButton.addEventListener('click', checkUserChoice); 

// Stimulate coin using random value generation
throwButton.addEventListener('click', function() {
const head = 0;
const reverse = 1;
const random = Math.round(Math.random());
if (random == 0){
  document.getElementById("coin-image").src="head.png";
} else{
  document.getElementById("coin-image").src="reverse.png";
}

// Check random result with user's input
const userInput = document.querySelector('input[name="user-choice"]:checked').value;
if (userInput == 'head'){
  if (random == 0){
  document.getElementById("result").innerText = 'You won!';
  console.log('You won!');
}else {
  document.getElementById("result").innerText = "Sorry, You lost!";
  console.log('Sorry, you lost!');
} 
} else{
  if (random == 1) {
  document.getElementById("result").innerText = 'You won!';
  console.log('You won!'); 
  } else {
  document.getElementById("result").innerText = "Sorry, You lost!"; 
  console.log('Sorry, you lost!'); 
  } 
}

// Amount of wins
if ((random == 0 && userInput == 'head') || (random == 1 && userInput =='reverse')) {
  winCount++;
  document.getElementById('win-count').innerText = winCount;
  console.log('Amount of wins: ', winCount);
}
//Amount of clicks
userChoiceCount++;
const userClicks = document.querySelector('#win-count');
userClicks.innerText = winCount + '/' + userChoiceCount;
console.log('Coin tossed: ', userChoiceCount);

// Amount of head
if (userInput == 'head'){
  headCount++;
  document.getElementById('head-count').innerText = headCount;
  console.log('Amount of head: ', headCount);
}
//Amount of reverse
if (userInput == 'reverse'){
  reverseCount++;
  document.getElementById('reverse-count').innerText = reverseCount;
  console.log('Amount of reverses: ', reverseCount);
}
//Flip history
if (random == 0){
flipArray.push('head');
} else{
flipArray.push('reverse');
}
const newParagraph = document.createElement('p');
newParagraph.innerText = 'Flip: ' + flipArray;
const userResult = document.querySelector('#result-history');
userResult.append(newParagraph)
console.log('Flip: ', flipArray);
})



