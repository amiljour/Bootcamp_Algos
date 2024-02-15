
/* https://leetcode.com/problems/two-sum/

    Given an array of integers, return indices of the
    two numbers such that they add up to a specific target.

    You may assume that each input would have EXACTLY ONE SOLUTION,
    and you may not use the same element twice.

    the array is unsorted, contains no floats, and there may be duplicate values

    Given arr = [2, 11, 7, 15], target = 9,
    Because arr[0] + arr[2] = 2 + 7 = 9
    return [0, 2].

    example 1
    given: [2, 11, 7, 15]
    target: 9
    output: [0,2]

    example 2
    given: [3,2,4]
    target: 6
    output: [1,2]

    example 3
    given: [3,3]
    target: 6
    output: [0,1]
*/

const given1 = [2, 11, 7, 15]
const target1 = 9
const output1 = [0,2]

const given2 = [3,2,4]
const target2 = 6
const output2 = [1,2]

const given3 = [3,3]
const target3 = 6
const output3 = [0,1]

// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take a few mins to write the pseudocode first
// create the function and decide what params it needs and what it will return here:

// function twoSum(arr, target){
//   // create var to hold empty arr for output
//     let output = []
//     // for loop that runs through the given array one by one
//     for (let i = 0; i<arr.length; i++){
//       // second for loop that will check each value in the array for each value we are on currently from the first for loop 
//         for (let j = i+1; j<arr.length; j++){
//           // if condition that will check to see if the the var at the first loops idx when added to the second loops indx, equals the target value 
//             if ((arr[i] + arr[j]) === target){
//               // if true, push both indexes to the array 
//                 output.push(i, j)
//                 // return new array (breaks loops)
//                 return output
//             }
//         }
//     }
// }

function twoSum(arr, target){
  let output = []
  let i = 0
  let j = i+1
  while (i < arr.length){
      if ((arr[i] + arr[j]) === target){
          output.push(i, j)
          return output
      } 
      if (j < arr.length-1){
          j++
      }
      else {
          i++
          j = i+1
      }
  }
}

console.log(twoSum(given1, target1))
console.log(twoSum(given2, target2))
console.log(twoSum(given3, target3))