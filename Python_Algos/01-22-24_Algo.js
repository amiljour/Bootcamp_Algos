/* 
  Given a string,
  return a new string with the duplicates excluded

  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "hellool";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

const str5 = "redFoxred";
const expected5 = "redFox";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
new_str = ''
for (let i = 0; i < str.length; i++){
        if (!new_str.includes(str[i])){
            new_str += str[i]
    }
}
return new_str
}
console.log('Ecpected:', expected1)
console.log('Result: ', stringDedupe(str1))
console.log('Ecpected:', expected2)
console.log('Result: ', stringDedupe(str2))
console.log('Ecpected:', expected3)
console.log('Result: ', stringDedupe(str3))
console.log('Ecpected:', expected4)
console.log('Result: ', stringDedupe(str4))
console.log('Ecpected:', expected5)
console.log('Result: ', stringDedupe(str5))
/*****************************************************************************/

// Bonus attempt

/*
Josh's solution
for (let i = str.length - 1; i >= 0; i--){
    if (!seen[str[i]]){
        distinctStr = str[i] + distinctStr;
        seen[str[i]] = true;
    }
}
return distinctStr
*/

// function stringDedupeB(str) {
//     let backwards_str = ''
//     let new_str = ''
//     for (let i = str.length; i >= 0; --i){
//             if (!backwards_str.includes(str[i])){
//                 backwards_str += str[i]
//         }
//     }
//     for (let j = backwards_str.length; j >= 0; j--){
//         new_str += backwards_str[j]
//     }
//     return new_str
//     }

// console.log('****BONUS****')
// console.log('Ecpected:', 'heol')
// console.log('Result: ', stringDedupeB(str2))