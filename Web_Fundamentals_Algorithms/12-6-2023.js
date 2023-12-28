/* 
  Given an array and an item to search for,
  return the first index where the item is found,

  return -1 to represent not found
  */

const arrA = ["a", "b", "c"];
const searchItemA = "c";
const expectedA = 2;

const arrB = ["a", "b", "c"];
const searchItemB = 5;
const expectedB = -1;

const arrC = ["c", "a", "b", "c"];
const searchItemC = "c";
const expectedC = 0;

const arrD = [];
const searchItemD = 5;
const expectedD = -1;

/**
 * Finds the index from the given array where the given item is found.
 * @param {Array<any>} items An array of any kind of items.
 * @param {any} searchItem The item to find.
 * @returns {number} The index of found item, or -1 if not found.
 */
function indexOf(items, searchItem) {
    // code here
    for (var i = 0; i <= items.length; i++) {
        if (items[i] == searchItem) {
            return i
        }
    }
    return -1
}
// Tests
console.log("\n************Algo #1***********")
const resultA = indexOf(arrA, searchItemA);
console.log(resultA, "should be", expectedA);

const resultB = indexOf(arrB, searchItemB);
console.log(resultB, "should be", expectedB);

const resultC = indexOf(arrC, searchItemC);
console.log(resultC, "should be", expectedC);

const resultD = indexOf(arrD, searchItemD);
console.log(resultD, "should be", expectedD);


/*****************************************************************/

/* 
Given an array and an int which represents the position starting from the back,
return the nth-to-last element.
 
JS has introduced the .at method for this purpose, but solve this algo w/o it.
*/

// Last element:
const arr1 = ["a", "b", "c", "d"];
const idx1 = 1;
const expected1 = "d";

// Second to last element:
const arr2 = ["a", "b", "c", "d"];
const idx2 = 2;
const expected2 = "c";

const arr3 = ["a", "b", "c", "d"];
const idx3 = 0;
const expected3 = null;

const arr4 = ["a", "b", "c", "d"];
const idx4 = -1;
const expected4 = null;

const arr5 = [];
const idx5 = 2;
const expected5 = null;

/**
 * Retrieves the nth to last indexed item from the given array.
 * @param {Array<any>} items An array of any kind of items.
 * @param {number} nthToLast
 * @returns {any} The item at the nthToLast index or null.
*/
function nthLast(items, nthToLast) {
    // code here
    
    return null;
}

// Tests
console.log("\n************Algo #2***********")
const result1 = nthLast(arr1, idx1);
console.log(result1, "should be", expected1);

const result2 = nthLast(arr2, idx2);
console.log(result2, "should be", expected2);

const result3 = nthLast(arr3, idx3);
console.log(result3, "should be", expected3);

const result4 = nthLast(arr4, idx4);
console.log(result4, "should be", expected4);

const result5 = nthLast(arr5, idx5);
console.log(result5, "should be", expected5);