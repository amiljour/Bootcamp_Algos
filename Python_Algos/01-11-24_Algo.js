/* 
String: Is Palindrome

Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards

Do not ignore spaces, punctuation and capitalization
 */

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

/**
   * Determines if the given str is a palindrome (same forwards and backwards).
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str
   * @returns {boolean} Whether the given str is a palindrome or not.
   */
function isPalindrome(str) {

    // Create anempty string to hold the backwards string
    let backwardsString = ''

    // Create y to be str length - 1 to be the index
    let y = str.length - 1

    // Create a for loop to iterate throught the lenght of the string
    for (let index = 0; index < str.length; index++){
        // Adds the last letter to backwardsString
        backwardsString = backwardsString + str[y]
        // Minus 1 from y to get the next letter next time it goes through the str
        y--
    }

    // Creates a if statement to check if it is the same and if it its = it will return true and if its != it will return false
    if (backwardsString === str){
        return true
    }
    else{
        return false
    }
}
console.log(isPalindrome(str1))
console.log(isPalindrome(str2))
console.log(isPalindrome(str3))