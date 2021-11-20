// Assignment code here

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" 
var numeric = "123456789"


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword() 
  var passwordText = document.querySelector("#password");
  
function generatePassword(capitalLength) {
  var upper = window.prompt("Would you like uppercase letters in your password? Type 'YES' or 'NO' to respond.");
  var passD = ""
  
  if (upper === "yes" || upper === "YES") {
  
    // for (var i = 0; i < capitalLength; i++) {
      passD += upperCase.charAt(Math.floor(Math.random()*upperCase.length))
    // }
    
    console.log(passD)
    }
  }

  // var lower = window.prompt("Would you like lowercase letters in your password? Type 'YES' or 'NO' to responsd.");
  // if (lower === "yes" || lower === "YES") {
  //   function randomLower(lowerCase)
  //   {
  //     return Math.floor(Math.random()*lowerCase.length)
  //   }
  //   console.log(randomLower(lowerCase), randomLower(lowerCase))
  //   }
  // var special = window.prompt("Would you like special characters in your password? Type 'YES or 'NO' to respond.");
  // if (special === "yes" || special === "YES") {

  // }

  
  

  // }
 
  


 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
