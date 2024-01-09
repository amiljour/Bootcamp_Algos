/* 

Acronyms

Crate a function that, given a string, returns the string's acronym (first letter of each word capitalized).

Do it with .split() first if you need to, then try to do it without

*/

const str1 = 'object oriented programming';

const expected1 = 'OOP';

// The 4 pillars of OOP

const str2 = 'abstraction polymorphism inheritance encapsulation';
const expected2 = "APIE";

const str3 = 'software development life cycle';

const expected3 = 'SDLC';

//BONUS: ignore extra spaces

const str4 = 'global information tracker';
const expected4 = "GIT";

// Turns the given str into an acronym.Turns
// Time : 0(?)
// Space: 0(?)

// @param {String} str A string to be turned into an acroynm
// @returns {String} The Acroynm

function acronymize(str) {
    // Step 1: trim the input string to remove any extra spaces at the start and the end - .trim()
    str.trim()
    // Step 2: Initialize a variable to hold the acronym, initially empty
    let acronym = ''
    // Step 3: Split the input into an array of words - .split()
    let y = str.split('')
    // Step 4: Loop through each word in the array
    //   Step 4.1: Check if the current word is not an empty string
    //   Step 4.2: Take the first character of the word, convert it to uppercase, and add it to the acroynm
    acronym += y[0]
    for (var x = 0; x < y.length; x++) {
        if (y[x] === " ") {
            acronym += y[x + 1]
        }
    }
    //Step 5: Return the constructed acroynm
    return acronym.toUpperCase()
}

const result1 = acronymize(str1);
console.log(result1);

const result2 = acronymize(str2);
console.log(result2);

const result3 = acronymize(str3);
console.log(result3)

const result4 = acronymize(str4);
console.log(result4)