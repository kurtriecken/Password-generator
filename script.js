// Global variables
const lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
"Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialChars = ["!", "@", "#", "$", "^", "&", "*", "(", ")"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let passwordLen = 0;
let possibleChars = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(array) {
  let flag = validInput();

  while(!flag) {
    flag = validInput();
  }
 
  // EXTRACT this out to its own function
  // REPEAT if no options chosen
  possibleChars = [];
  getPossibleChars();


// generate a valid password; use Math.random and Arrays.prototype.includes() to validate
let yourPassword = [];
for (let i = 0; i < passwordLen; i++) {
  yourPassword = yourPassword.concat(possibleChars[Math.floor(Math.random()*possibleChars.length)]);  
}
console.log(yourPassword);
console.log(yourPassword.join(""));
  return yourPassword.join("");
}

function getPossibleChars() {
  if (confirm(`Use upper case letter?`)) {
    possibleChars = possibleChars.concat(lettersUpper);
  }
  if (confirm(`Use lower case letter?`)) {
    possibleChars = possibleChars.concat(lettersLower);
  }
  if (confirm(`Use special characters?`)) {
    possibleChars = possibleChars.concat(specialChars);
  }
  if (confirm(`Use numbers?`)) {
    possibleChars = possibleChars.concat(numbers);
  }
  while (possibleChars.length == 0) {
    alert("You must select at least one type!");
    getPossibleChars();
  }
  return;
}

function validInput() {
//get input
passwordLen = prompt("Please provide a number between 8 and 128");

//validate input as number between 8 and 128
if (isNaN(passwordLen)) {
  alert("Input is not a number; please provide a valid number!");
  return false;
}
else if (passwordLen < 8 || passwordLen > 128) {
  alert("Number must be between 8 and 128, please.");
  return false;
}
//if valid, great, return true
else {
  alert("Thank you!");
  return true;
}
return false;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





