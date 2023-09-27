// Global variables
const lettersUpper = ["A", "B", "C"];
const lettersLower = ["a", "b", "c"];
const specialChars = ["!", ",", "&"];
const numbers = ["1", "2", "3"];
let passwordLen = 0;

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
 
  let finalPassword = ["d"];
  if (confirm(`Use upper case letter?`)) {
    finalPassword = finalPassword.concat(lettersUpper);
  }
  if (confirm(`Use lower case letter?`)) {
    finalPassword = finalPassword.concat(lettersLower);
  }
  if (confirm(`Use special characters?`)) {
    finalPassword = finalPassword.concat(specialChars);
  }
  if (confirm(`Use numbers?`)) {
    finalPassword = finalPassword.concat(numbers);
  }

  let returnString = finalPassword.toString();
  return returnString;
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
