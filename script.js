// coding starts here

// Password variables 
// uppercase letters 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// lowercase letters
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
// special characters 
var specialCharacters = " !#$%&'()*+,-./:;<=>?]@[^_`{|}~" 
// numeric characters
var numeric = "123456789"


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  var passwordText = document.querySelector("#password");


// function to generate password starts

function writePassword() {
// user enters input here
userInput = parseInt(prompt("How many characters do you desire in your password? The required range is between 8 and 128."));
  if (!userInput) {
// alerts created if user enters incorrct value
    window.alert("This needs a value!");
  } else if (userInput < 8 || userInput > 128) {
    userInput = parseInt(prompt("Please select a number between 8 and 128."));
// user enters correct and validated input
  } else {
    confirmUppercase = confirm("Do you want this password to contain uppercase letters?");
    confirmLowercase = confirm("Do you want this password to contain lowercase letters?");
    confirmCharacters = confirm("Do you want this password to contain special characters?");
    confirmNumbers = confirm("Do you want this password to contain numbers?");
  };

// if user selects no on all four options
if (!confirmUppercase && !confirmLowercase && !confirmCharacters && !confirmNumbers) {
    enteredData = window.alert("You must select atleast one option!");
}

// if user selects all four options 
else if (confirmUppercase && confirmLowercase && confirmCharacters && confirmNumbers) {
    enteredData = upperCase.concat(lowerCase, specialCharacters, numeric);
}

// if user selects three out of four options
else if (confirmUppercase && confirmLowercase && confirmCharacters) {
    enteredData = upperCase.concat(lowerCase, specialCharacters);
}
else if (confirmUppercase && confirmLowercase && confirmNumbers) {
    enteredData = upperCase.concat(lowerCase, numeric);
}
else if (confirmUppercase && confirmCharacters && confirmNumbers) {
    enteredData = upperCase.concat(specialCharacters, numeric);
}
else if (confirmLowercase && confirmCharacters && confirmNumbers) {
    enteredData = lowerCase.concat(specialCharacters, numeric); 
}

// if user selects two out of four options
else if (confirmUppercase && confirmLowercase) {
  enteredData = upperCase.concat(lowerCase);

} else if (confirmUppercase && confirmCharacters) {
  enteredData = upperCase.concat(specialCharacters);

} else if (confirmUppercase && confirmNumbers) {
  enteredData = upperCase.concat(numeric);

} else if (confirmLowercase && confirmCharacters) {
  enteredData = lowerCase.concat(specialCharacters);

} else if (confirmLowercase && confirmNumbers) {
  enteredData = lowerCase.concat(numeric);

} else if (confirmCharacters && confirmNumbers) {
  enteredData = specialCharacters.concat(numeric);
}

// if user selects one out of four options
else if (confirmUppercase) {
  enteredData = upperCase;
}
else if (confirmLowercase) {
  enteredData = lowerCase;
}
else if (confirmCharacters) {
  enteredData = specialCharacters;
}
else if (confirmNumbers) {
  enteredData = numeric;
};

var password = []; 

// here is where the random selection of variables starts for the password
for (var i = 0; i < userInput; i++) {
  var userChoices = enteredData[Math.floor(Math.random() * enteredData.length)];
  password.push(userChoices);
}

var passWordText = password.join("");
generatePassword(passWordText);
return passWordText;

}

function generatePassword(passWordText) {
  document.getElementById("password").textContent = passWordText;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
