let generateBtn = document.getElementById("create");
let passLength = 0;
let lowerCase = "abcdefghijklmnopqrstuvwxyz" 
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "1234567890"
let special = "~!@#$%^&*()_-"
let characters = ""
let password = ""

while (passLength < 8 || passLength > 128) {
  passLength = prompt("Choose a password length between 8-128 characters")
}

alert ("Select Password Criteria OK=Yes  Cancel=No");

if (confirm ("Do you want lowercase characters?")) {
    characters += lowerCase;
}
  
if (confirm ("Do you want uppercase characters")){
    characters += upperCase;
}
  
if (confirm ("Do you want numeric characters?")) {
    characters += numbers;
}

if (confirm ("Do you want special characters?")) {
    characters += (special);
}

for (let i= 0; i < passLength; i++) {
password += (characters[Math.floor(Math.random()*characters.length)]);
}

function createPass () {
  document.getElementById("password").value = password;
}

document.getElementById("create").addEventListener("click", createPass);