// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// 2. Write a JavaScript program that accept two int

function checkCharacterType(char) {
    let charCode = char.charCodeAt(0);
    
    if (charCode >= 48 && charCode <= 57) {
        return "Number";
    } else if (charCode >= 65 && charCode <= 90) {
        return "Uppercase letter";
    } else if (charCode >= 97 && charCode <= 122) {
        return "Lowercase letter";
    } else {
        return "Not a number or letter";
    }
}

// Example usage:
let input = prompt("Enter a character:");
let result = checkCharacterType(input);
alert(`The input is a ${result}`);

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

let num1 = parseInt(prompt("Enter first integer:"));
let num2 = parseInt(prompt("Enter second integer:"));

if (num1 > num2) {
    alert(`${num1} is larger than ${num2}`);
} else if (num2 > num1) {
    alert(`${num2} is larger than ${num1}`);
} else {
    alert("Both numbers are equal");
}
// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

let number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    alert("The number is positive");
} else if (number < 0) {
    alert("The number is negative");
} else {
    alert("The number is zero");
// }
// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

function isVowel(char) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
}

// Example usage:
let character = prompt("Enter a single character:");
alert(isVowel(character) ? "True - it's a vowel" : "False - not a vowel");

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

let correctPassword = "Secure123";
let userPassword = prompt("Enter your password:");

if (!userPassword) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

alert(greeting);

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements


let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):"));
let greeting;

if (time >= 0 && time < 1200) {
    greeting = "Good morning!";
} else if (time >= 1200 && time < 1700) {
    greeting = "Good afternoon!";
} else if (time >= 1700 && time < 2100) {
    greeting = "Good evening!";
} else if (time >= 2100 && time <= 2359) {
    greeting = "Good night!";
} else {
    greeting = "Invalid time entered";
}

alert(greeting);