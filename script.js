// Global variables
const lettersUpper = ["A", "B", "C"];
const lettersLower = ["a", "b", "c"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(array) {
  let passwordLen = prompt(`Please choose a length between 8 and 128 characters.`)
  let finalPassword = [];
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
