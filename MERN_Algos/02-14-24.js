/* 
    This is an actual interview algorithm given to a Coding Dojo alum

    Find Consecutive Sums

    You are given arr, a list of positive integers 0-255
    You are given k, a integer between 1-255

    Find all the consecutive groups of integers that add up to the value k
*/

// inputs:
const k = 16;
const arr = [2, 5, 3, 6, 7, 0, 0, 23, 11];

output = [
  [2, 5, 3, 6],
  [3, 6, 7], //  3, 6, 7 appear consecutively, so they are included in the solution
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

// create new arrays
// if no matches, return empty array

// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take a few mins to write the pseudocode first:
// learning to write good
// pseudocode is just as
// important as learning to write
// actual code, even if it might
// feel like an unnecessary step at
// times
// create the function and decide what params it needs and what it will return here:

// !Sudo Code
function sumTarget(array, target) {
  // create a newArray
  let newArray = [];
  // create a sum variable
  let sum = 0;
  // create variables for the while loops
  let i = 0;
  // create a while loop that traverses a key through the array
  while (i < array.length) {
    // create a temp array
    let temp = [];
    let j = i;
    // in the while loop create another while loop to add up the sum to get to target
    while (sum < target) {
      sum = sum + array[j];
      temp.push(array[j]);
      j++;
    }
    // if the 2nd while loop goes over target do not push the array to the new array
    if (sum >= target) {
      if (sum === target) {
        newArray.push(temp);
      }
      temp = [];
      sum = 0;
    }
    i++;
  }
  return newArray;
}

console.log(sumTarget(arr, k));