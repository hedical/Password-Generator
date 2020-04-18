// Triger button selection

var generateBtn = document.querySelector("#generate");


// Arrays to use

var lowerLetterArray = "abcdefghijklmnopqrstuvwxyz";
var upperLetterArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numArray = "1234567890";
var specialArray = "!:/+=)'(&#$.%;<>?*@^_£";
var totalChar = lowerLetterArray + upperLetterArray + numArray + specialArray;


// Event listener to start the sequence

generateBtn.addEventListener("click", getUserPreferences);


// Ask the user preferences

function getUserPreferences() {
  var pwdLength = parseInt(prompt("Set a password lenght between 8 and  128")) || 0;
  var lowerCaseAnwser = confirm("Do you want to use lower case in your password ?");
  var upperCaseAnswer = confirm("Do you want to use upper case in your password ?");
  var numAnswer = confirm("Do you want to use num in your password ?");
  var specialAnswer = confirm("Do you want to use special in your password ?");
  var inputResult = "";
  var passwordGenerate = "";
  var passwordText = document.querySelector("#password");

  // Verifying conditions :
  // First condition : password length is between 8 and 128

  if (pwdLength < 8 || pwdLength > 128) {
    alert("You have to chose a password lenght between 8 and 128 characters");
  }

  // Second condition : at least one type of char
  if (
    lowerCaseAnwser === false &&
    upperCaseAnswer === false &&
    numAnswer === false &&
    specialAnswer === false
  ) {
    alert("You have to use at least on type of characters");
  }

  // Generating the user array based on preferences

  else if (lowerCaseAnwser === true) {
    inputResult += lowerLetterArray;
  }
  if (upperCaseAnswer === true) {
    inputResult += upperLetterArray;
  }
  if (numAnswer === true) {
    inputResult += numArray;
  }
  if (specialAnswer === true) {
    inputResult += specialArray;
  }

  // Display user preferences

  alert("Password length: " + pwdLength + "\nLower case: " + lowerCaseAnwser + "\nUpper case: " + upperCaseAnswer + "\nNum case: " + numAnswer + "\nSpecial case: " + specialAnswer);

  // Password generation

  for (i = 0; i < pwdLength; i++) {
    var char = Math.floor(Math.random() * inputResult.length);
    passwordGenerate += inputResult.charAt(char);
  }

  // Returning the generated password to the value to print

  passwordText.value = passwordGenerate;
}

