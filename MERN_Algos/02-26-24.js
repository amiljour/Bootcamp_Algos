/*
  Input: arr, callback
  Output: arr (with elements removed)
  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.
  Return an empty array if the callback never returns true
*/
//            v
const arr1 = [1, 4, 3, 6, 9, 3];

const callback1 = (elem) => {
  return elem > 5;
};
const expected1 = [6, 9, 3];

const arr2 = [1, 4, 3, 6, 9, 3];
const callback2 = (elem) => elem > 2;
const expected2 = [4, 3, 6, 9, 3];

const arr3 = [1, 4, 3, 6, 9, 3];
const callback3 = elem => false;
const expected3 = [];

function dropIt(arr, callback) {
  let startIndex = -1;

  // Manually find the index of the first element that meets the condition
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      startIndex = i;
      break; // Exit the loop once the first matching element is found
    }
  }

  // If no element meets the condition, return an empty array
  if (startIndex === -1) {
    return [];
  }

  // This is a solution using splice
  // return arr.splice(startIndex)
  
  // Manually construct the new array from the found index onwards
  let resultArray = [];
  for (let i = startIndex; i < arr.length; i++) {
    resultArray.push(arr[i]);
  }

  return resultArray;
}

console.log(dropIt(arr1, callback1));
console.log(dropIt(arr2, callback2));
console.log(dropIt(arr3, callback3));
