/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/
/*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/
// Global variables
const lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
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
// Event listener for onscreen button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/
/*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/
// Functions

// Calls the functions necessary to generate a password, then writes it to the screen
function writePassword() {
  var password = generatePassword();
  document.querySelector("#password").value = password;
}

// Calls other functions, that may need to be repeated, until a valid password is generated
function generatePassword() {
  while (!validateInput()) {
  }
  getPossibleChars();
  validatePassword();
  return yourPassword.join("");
}

// Fills the possibleChars array with potential characters, dependent on the user's choices
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

// Gets and stores a valid number for the length of the password
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
}

// Produces a random password and validates it to ensure every specified character type is included
function validatePassword() {
  // Initialize my password and array flags
  yourPassword = [];
  var yourFlags = {
    upFlag: false,
    lowFlag: false,
    specFlag: false,
    numFlag: false
  };

  // Generate a password using array of possible values
  for (let i = 0; i < passwordLen; i++) {
    yourPassword = yourPassword.concat(possibleChars[Math.floor(Math.random() * possibleChars.length)]);
  }

  // Flag which arrays are included in the generated password
  for (let j = 0; j < yourPassword.length; j++) {
    if (lettersUpper.includes(yourPassword[j])) {
      yourFlags.upFlag = true;
    }
    else if (lettersLower.includes(yourPassword[j])) {
      yourFlags.lowFlag = true;
    }
    else if (specialChars.includes(yourPassword[j])) {
      yourFlags.specFlag = true;
    }
    else if (numbers.includes(yourPassword[j])) {
      yourFlags.numFlag = true;
    }
  }

  // If any flags don't match with what is expected, generate a new password
  if (charFlags.upFlag != yourFlags.upFlag ||
    charFlags.lowFlag != yourFlags.lowFlag ||
    charFlags.specFlag != yourFlags.specFlag ||
    charFlags.numFlag != yourFlags.numFlag) {
    validatePassword();
  }
}