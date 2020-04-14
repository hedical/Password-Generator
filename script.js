// Assignment Code
// var generateBtn = document.querySelector("#generate");


// # List of char to use
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "1234567890";
var special = "!:/+=)'(&#$.%;<>?*@^_£";
var totalChar = lowerLetter + upperLetter + num + special;


// Output
// var password = '';

// # Function to get user inputs

// ## Function to get password length from user
function getUserInputPwd() {

  var pwdLength = parseInt(prompt("Set a password lenght between 8 and  128"));
  // Verifying condition : password length is between 8 and 128
  if (pwdLength < 8 || pwdLength > 128) {
    alert("You have to chose a password lenght between 8 and 128 characters");
  }
  return pwdLength;
}

var pwdAnswer = getUserInputPwd();

// ## Function to get password string
function getUserInputString() {

  var lowerCaseAnwser = confirm("Do you want to use lower case in your password ?")
  var upperCaseAnswer = confirm("Do you want to use upper case in your password ?")
  var numAnswer = confirm("Do you want to use num in your password ?")
  var specialAnswer = confirm("Do you want to use special in your password ?")
  var inputResult = "";
  var userInputsChar = [lowerCaseAnwser, upperCaseAnswer, numAnswer, specialAnswer];

  // Verifying conditions : at least one type of char
  if (lowerCaseAnwser === false && upperCaseAnswer === false && numAnswer === false && specialAnswer === false) {
    alert("You have to use at least on type of characters");
  }
  // Generating the final array to use
  else if (lowerCaseAnwser === true) {
    inputResult += lowerLetter;
    console.log(inputResult);
  }
  if (upperCaseAnswer === true) {
    inputResult += upperLetter;
    console.log(inputResult);
  }
  if (numAnswer === true) {
    inputResult += num;
    console.log(inputResult);
  }
  if (specialAnswer === true) {
    inputResult += special;
    console.log(inputResult);
  }
  // Sum up of chosen char
  alert("Password length: " + pwdAnswer + "\nLower case: " + lowerCaseAnwser + "\nUpper case: " + upperCaseAnswer + "\nNum case: " + numAnswer + "\nSpecial case: " + specialAnswer);
  return inputResult;
}

var result = getUserInputString();


// # Function  to generate the password
function generatePwd(num1, userArraySelection) { // num1 is the pwdLength set by the user, userArraySelection is the array string from user

  for (i = 0; i < num1; i++) {
    var char = Math.floor(Math.random() * totalChar.length);
    console.log(char);
    password += userArraySelection.charAt(char);
  }
  return password;
}

generatePwd(pwdAnswer, result);
console.log(generatePwd(pwdAnswer, result));


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
