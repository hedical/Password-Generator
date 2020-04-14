// Assignment Code
// var generateBtn = document.querySelector("#generate");


// Input from user
// var pwdLength = 9; // de 8 jusqu'à 128
// var lowerCaseChar = true;
// var upperCaseChar = false;
// var numChar = false;
// var specialChar = false;

// list of char to use
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "1234567890";
var special = "!:/+=)'(&#$.%;<>?*@^_£";
var totalChar = lowerLetter + upperLetter + num + special;

// Output
var password = '';

// Function to get user inputs

function getUserInputs() {
  var pwdLength = prompt("Set a password lenght between 8 and  128");
  var lowerCaseChar = confirm("Do you want to use lower case in your password ?")
  var upperCaseChar = confirm("Do you want to use upper case in your password ?")
  var numChar = confirm("Do you want to use num in your password ?")
  var specialChar = confirm("Do you want to use special in your password ?")
  var userInputs = [pwdLength, lowerCaseChar, upperCaseChar, numChar, specialChar];

  if (pwdLength < 8 || pwdLength > 128) {
    alert("You have to chose a password lenght between 8 and 128 characters");
  } else if (lowerCaseChar == false || upperCaseChar == false || numChar == false || specialChar == false) {
    alert("You have to use at least on type of characters");
  } else {
    alert("Password length: " + pwdLength + "\nLower case: " + lowerCaseChar + "\nUpper case: " + upperCaseChar);
    return userInputs;
  }
}

getUserInputs()
console.log(getUserInputs());


// Function  to generate the password
function generatePwd(num1, arr1) { // num1 is the pwdLength set by the user, arr1 is our array to use, in that case : lower, upper, special, numbers ...

  for (i = 0; i < num1; i++) {
    var char = Math.floor(Math.random() * totalChar.length);
    console.log(char);
    password += arr1.charAt(char);
  }
  // if (num1 < 8 || num1 > 128) {
  //   alert("You have to chose a password lenght between 8 and 128 characters");
  // } else if (lowerCaseChar == false || upperCaseChar == false || numChar == false || specialChar == false) {
  //   alert("You have to use at least on type of characters");
  // } else
  return password
}

console.log(generatePwd(pwdLength, lowerLetter + upperLetter + num + special));


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
