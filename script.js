/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/
/*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/
// Global variables
const lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
  "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialChars = ["!", "@", "#", "$", "^", "&", "*", "(", ")"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let passwordLen = 0;
let possibleChars = [];
let yourPassword = [];
var charFlags = {
  upFlag: false,
  lowFlag: false,
  specFlag: false,
  numFlag: false
};

/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/
/*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/
// Event listener
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/
/*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/
// Functions
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  while (!validateInput()) {
    flag = validateInput();
  }
  getPossibleChars();

  // generate a valid password; use Math.random and Arrays.prototype.includes() to validate
  validatePassword();

  // console.log(yourPassword);
  // console.log(yourPassword.join(""));
  return yourPassword.join("");
}

function getPossibleChars() {
  // Reset possible characters and flags if page has not been refreshed
  possibleChars = [];
  charFlags.upFlag = false;
  charFlags.lowFlag = false;
  charFlags.specFlag = false;
  charFlags.numFlag = false;

  if (confirm(`Use upper case letter?`)) {
    possibleChars = possibleChars.concat(lettersUpper);
    charFlags.upFlag = true;
  }
  if (confirm(`Use lower case letter?`)) {
    possibleChars = possibleChars.concat(lettersLower);
    charFlags.lowFlag = true;
  }
  if (confirm(`Use special characters?`)) {
    possibleChars = possibleChars.concat(specialChars);
    charFlags.specFlag = true;
  }
  if (confirm(`Use numbers?`)) {
    possibleChars = possibleChars.concat(numbers);
    charFlags.numFlag = true;
  }
  while (possibleChars.length == 0) {
    alert("You must select at least one type!");
    getPossibleChars();
  }
  return;
}

function validateInput() {
  passwordLen = prompt("Please provide a number between 8 and 128");


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

// Produces a random password and validates to ensure every specified character type is included
function validatePassword() {
  // Initialize my password and array flags
  yourPassword = [];
  var yourFlags = {
    upFlag: false,
    lowFlag: false,
    specFlag: false,
    numFlag: false
  };

  for (let i=0; i<passwordLen; i++) {
    yourPassword = yourPassword.concat(possibleChars[Math.floor(Math.random() * possibleChars.length)]);
  }
  
  for (let j=0; j<yourPassword.length; j++) {
    if (lettersUpper.includes(yourPassword[j])) {
      yourFlags.upFlag = true;
    }
    else if (lettersLower.includes(yourPassword[j])) {
      yourFlags.lowFlag = true;
    }
    else if (specialChars.includes(yourPassword[j])) {
      yourFlags.specFlag= true;
    }
    else if (numbers.includes(yourPassword[j])) {
      yourFlags.numFlag = true;
    }
  }

  // If any flags don't match, run a new password
  if (charFlags.upFlag != yourFlags.upFlag || 
    charFlags.lowFlag != yourFlags.lowFlag ||
    charFlags.specFlag != yourFlags.specFlag ||
    charFlags.numFlag != yourFlags.numFlag) {
      validatePassword();
    }
}