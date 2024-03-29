/* 
    https://visualgo.net/en/sorting
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items...
*/
const myArr = [3, 2, 9, 5, 1, 4, 8];
const arrTest = [4, 5, 1, 3, 6, 7, 10, 2, 8, 9];

// ALGO ROLES
// 👉 Driver
// 👉 Presenter
// 👉 Navigator

// Using While loops
// function selectionSort(arr) {
//     let i = 0
//     while (i < arr.length){
//         let minIndex = i
//         let j = i + 1
//         while (j < arr.length){
//             if (arr[minIndex] > arr[j]){
//                 minIndex = j
//             }
//             j++
//         }
//         let temp = arr[minIndex]
//         arr[minIndex] = arr[i]
//         arr[i] = temp
//         i++
//     }
//     return arr
// }

// Using For loops
function selectionSort(arr) {
  // Creating a loop going through the whole loop
  for (let i = 0; i < arr.length; i++) {
    // Create a variable to hold the minIndex
    let minIndex = i;
    // Creating a loop to go through the array i + 1
    for (let j = i + 1; j < arr.length; j++) {
      // Create a if statement to check if the minIndex is smaller than the current value at arr[j]
      if (arr[minIndex] > arr[j]) {
        // If it is make j the new minIndex
        minIndex = j;
      }
    }
    // This is to swap the the minIndex into the arr
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  // return the arr
  return arr;
}

// test cases
console.log(selectionSort(myArr));
console.log(selectionSort(arrTest));
