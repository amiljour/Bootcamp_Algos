/* 
  - Visualization with playing cards (scroll down):
      https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
  - Array / bar visualization:
      https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

  - Stable sort, efficient for small data sets or mostly sorted data sets.

  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic
    - Worst: O(n^2) quadratic when the array is reverse sorted.

  Space: O(1) constant

  - this sort splits the array into two portions (conceptually, not literally).
  - the left portion will become sorted, the right portion
      (that hasn't been iterated over yet) is unsorted.

  can shift OR swap target element until it reaches desired position
  shifting steps:
  1. consider the first item as sorted
  2. move to the next item
  3. store current item in a temp var (to make this position available to shift items)
  4. if item to the left of current is greater than current item, shift the
      left item to the right.
  5. repeat step 4 as many times as needed
  6. insert current item
  7. move to the next item and repeat

  swap steps:
  1. consider the first item as sorted
  2. move to the next item
  4. if item to left of current item is less than current, swap
  5. repeat step 4 until item to left is less than current item
  6. move to next item and repeat
*/

const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given array in-place.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} numbers
 * @returns {Array<number>} The given array after being sorted.
 */
function insertionSort(numbers = []) {
  // this starts at the index at 1 since we are counting the index at 0 as sorted
  for (let i = 1; i < numbers.length; i++) {
    // Created a variable current is numbers[i]
    let current = numbers[i];
    // Create a variable that is 1 less than i to be used to be compared against the current number
    let j = i - 1;
    // The while loop checks if both j is equal to or greater than 0 AND that numbers[j] is greater than current
    while (j >= 0 && numbers[j] > current) {
      // If both are correct than make numbers[j + 1] now be numbers[j] to move the number down the line
      numbers[j + 1] = numbers[j];
      // This is to make sure the while loop will eventually end
      j--;
    }
    // After exiting the while loop make number[j + 1] the new current and repeat the for loop
    numbers[j + 1] = current;
  }
  return numbers;
}

console.log(insertionSort(numbersRandomOrder));
console.log(insertionSort(numbersReversed));
