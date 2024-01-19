/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Create a function that decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
    // Need to retun a string
    // Need to loop through the string 
    // If the the item at the index value is a letter 
        // then we need to check the next value of the string for a number
        // Create a loop to run it as many times as the number
        // Add it to the return string
    // Return the return string
    let returnString = ''
    for (var index = 0; index < str.length; index ++){
        // console.log(str[index])
        if (str[index] == str[index].match(/[a-z]/i)){
            // console.log('is a letter')
            let currentLetter = str[index]
            while (str[index + 1] == str[index + 1].match(/[0-9]/i))
            
            if (str[index + 1] == str[index + 1].match(/[0-9]/i)){
                // console.log('Number')
                let currentNumber = str[index + 1]
                for (var index2 = 0; index2 < currentNumber; index2++){
                    returnString = returnString + currentLetter
                }
            }
        }
    }
    return returnString





    // let array = ''
    // let splitStr = str.split('')
    // console.log(splitStr)
    // for (var index = 0; index < splitStr.length; index++)
    //     if (splitStr[index] == 'abcd')
    //         for (var index2 = 0; index2 < splitStr[index + 1]; index2++)
    //                 array.push(splitStr[index])
    // return array
}
console.log(decodeStr(str1))
// console.log(decodeStr(str2))