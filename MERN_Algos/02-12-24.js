// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

var arr1 = [1, 3, 3, 5, 8, 10,];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];
//output = [1, 3, 5, 8, 10]

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];
//output = [1, 3, 4, 5, 8, 10]

// 1. DRIVER 🚗
// 2. PRESENTER 🧑‍🏫
// 3. NAVIGATOR 🧭

// RIOT

// create a function that takes 2 sorted arrays
function mergeDedupe(arr1, arr2) {
  //! write the pseudocode first!

  // 1. create a new var for our output array
  let newArr = []
  // 2. declare i and j variables
  let i = 0
  let j = 0
  // 3. create a while loop that runs the length of both arrays
  while (i < arr1.length && j < arr2.length) {
      // 4. create conditional statement to push elements into a new array
      if (arr1[i] <= arr2[j]) {
          // 5. create conditional statement to check for duplicates (using .includes())
          if (!newArr.includes(arr1[i])) {
              newArr.push(arr1[i])
          }
          i++
      } else {
          if (!newArr.includes(arr2[j])) {
              newArr.push(arr2[j])
          }
          j++
      }

  }
  // 6. Start a second and third while loop that adds remaining elements to the new array
  while (i < arr1.length) {
      newArr.push(arr1[i])
      i++
  }

  while (j < arr2.length) {
      newArr.push(arr2[j])
      j++
  }
  // 7. return the output array
  return newArr
  //! do not use Set()
}

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]); // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6]); // [1, 2, 3, 4, 5, 6, 8, 10, 12]