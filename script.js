// Global variables
const lettersUpper = ["A", "B", "C"];
const lettersLower = ["a", "b", "c"];
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
  console.log(`First element in password array is:`);
  console.log(finalPassword[0]);
  returnString = `Your password is ${finalPassword[0]}`;
  return returnString;
}

function validInput() {
//get input
passwordLen = prompt("Please provide a number between 8 and 128");
console.log(`input is ${passwordLen}`);

//if valid, great, return true
if (isNaN(passwordLen)) {
  alert("Input is not a number; please provide a valid number!");
  return false;
}
else if (passwordLen < 8 || passwordLen > 128) {
  alert("Number must be between 8 and 128, please.");
  return false;
}
else {
  alert("Thank you!");
  return true;
}
return false;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
