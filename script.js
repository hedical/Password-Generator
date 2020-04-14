// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Generation of a full list of random characters
// fullListChar = '';
// for (var i = 32; i <= 126; i++) {
//   fullListChar += String.fromCharCode(i);
// }

// console.log(fullListChar);
// var arrayfullListChar = fullListChar.split("");
// console.log(arrayfullListChar);

// Input from user
var pwdLength = 6; // de 8 jusqu'à 128
var lowerCaseChar = true;
var upperCaseChar = false;
var numChar = false;
var specialChar = false;

// list of char to use
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "1234567890";
var special = "!:/+=)'(&#$.%;<>?*@^_£";
var totalChar = lowerLetter + upperLetter + num + special;


// Output
var password = '';

// Function  to generate the password
function generatePwd(num1, arr1) { // num1 is the pwdLength set by the user, arr1 is our array to use, in that case : lower, upper, special, numbers ...

  for (i = 0; i < num1; i++) {
    var char = Math.floor(Math.random() * totalChar.length);
    console.log(char);
    password += arr1.charAt(char);
  }
  if (num1 < 8 || num1 > 128) {
    alert("You have to chose a password lenght between 8 and 128 characters");
  } else if (lowerCaseChar == false || upperCaseChar == false || numChar == false || specialChar == false) {
    alert("You have to use at least on type of characters");
  } else
    return password
}

console.log(generatePwd(pwdLength, lowerLetter + upperLetter + num + special));


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


