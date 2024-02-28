/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 
    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    return true or false
    Ninja Bonus: solve in O(n) time
*/

//            v 
const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"



//           v
const S2 = "ab##";
// ["a", "b"]
// "str1"
// a -> ab -> a -> ""
const T2 = "c#d#";
// []
// "str2"
// c -> "" -> d -> "" 
const expected2 = true;
// Explanation: Both S and T become ""



//          v
const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"



const S4 = "a#c";
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

// create a helper function
function buildFinalString(str){
  // create a variable to hold the string
  let stack = []
  // create a for loop to go through each character in the string
  for (let char of str){
    // create an if check to see if the character is a #
    if (char !== '#'){
      // if the character is not a # then push the character
      stack.push(char)
    }
    // create an else if to delete the character before the # and the # inside the stack array
    else if (stack.length > 0){
      // pop from stack
      stack.pop()
    }
  }
  // join the stack back to the string
  return stack.join(``)
}

function backspaceStringCompare(S, T) {
  // just compare and check if the results match
  return buildFinalString(S) === buildFinalString(T)
}

console.log(backspaceStringCompare(S1, T1));
console.log(backspaceStringCompare(S2, T2));
console.log(backspaceStringCompare(S3, T3));
console.log(backspaceStringCompare(S4, T4));