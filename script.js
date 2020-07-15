// Assignment Code

var alphaLow = 'abcdefghijklmnopqrstuvwxyz'.split('');
var alphaHi = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numList = '0123456789'.split('');
var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split('');

var getLen = 0;
var incAlphaLow = false;
var incAlphaHi = false;
var incNum = false;
var incSpecial = false;

function generatePassword(){

  while (getLen === 0){
    getLen = prompt("Select a password length between 8 and 128 characters: ");
    if(getLen < 8 && getLen > 128){
      alert("You did not meet the length requirements for the password. Try again.");
    } else {
      getLen = parseInt(getLen);
      break;
    }
  }

  while (incAlphaLow === false && incAlphaHi === false && incNum === false && incSpecial === false){
    incAlphaLow = confirm("Include lowercase alphanumeric characters? (Y/N): ");
    incAlphaHi = confirm("Include uppercase alphanumeric characters? (Y/N): ");
    incNum = confirm("Include numbers? (Y/N): ");
    incSpecial = confirm("Include special characters? (Y/N): ");

    if (incAlphaLow === false && incAlphaHi === false && incNum === false && incSpecial === false){
    alert("You did not include at least one of the character types. Try again.");
    } else {
      break;
    }
  }

  var passSelections = [];
  var newPassword = [];


  if(incAlphaLow){
    passSelections = passSelections.concat(alphaLow);
  }

  if (incAlphaHi) {
    passSelections = passSelections.concat(alphaHi);
  }
  
  if (incNum){
    passSelections = passSelections.concat(numList);
  }
  
  if(incSpecial) {
    passSelections = passSelections.concat(specialChar);
  }

  for (i = 0; i < getLen; i++ ){
    newPassword += passSelections[Math.floor(Math.random()*(passSelections.length))];
  }

  return newPassword;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);