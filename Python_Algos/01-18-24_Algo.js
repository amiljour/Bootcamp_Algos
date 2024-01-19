/* 
Parens Valid

Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.


const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

const str5 = "(y)l(jjkjk)jjkfjd)"
const expected5 = false

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
    let split_str = str.split('')
    let count1 = 0
    let count2 = 0
    for (let i=0; i<split_str.length; i++){
        if(split_str[i] == '('){
            count1++
        }
        else if (split_str[i] == ')'){
            count2++
        }
        if (count2 > count1){
            console.log(count1)
            console.log(count2)
        return false
        }
    }
    if (count2 === count1){
        console.log(count1)
        console.log(count2)
        return true
    }
    else{
        console.log(count1)
        console.log(count2)
        return false
    }

}



console.log(parensValid(str1))
console.log(parensValid(str2))
console.log(parensValid(str3))
console.log(parensValid(str4))
console.log(parensValid(str5))
/*****************************************************************************/