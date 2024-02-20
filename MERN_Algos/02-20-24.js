/*
    findObjectsFilter({searchFor}, [itemsArr])

    given a 'search for' {object} with primitive values and a list of objects
    return a new list of objects containing the same key value pairs as the search for
*/

// for of Array
// for in Object
// Object.keys -> ['key1', 'key2']
// hasOwn()

// given searchFor and items
const items = [
  { firstName: "Bob", lastName: "Robert", age: 31 }, //0
  { firstName: "John", lastName: "Smith", age: 25 }, //1
  { firstName: "Bob", lastName: "White", age: 31 }, //2
  { firstName: "Bob", lastName: "Smith", age: 27 }, //3
];
// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
  firstName: "Bob",
  age: 31,
};
// return a new list of objects containing the same key pair values
const output1 = [
  { firstName: "Bob", lastName: "Robert", age: 31 },
  { firstName: "Bob", lastName: "White", age: 31 },
];

const searchFor2 = {
  lastName: "Smith",
};
const output2 = [
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjectsFilter(searchObj, items) {
  // PSEUDOCODE!!!!
  // Create a variable to hold the array that match
  let newArr = [];
  // Loop over each object in the array
  for (let i = 0; i < items.length; i++) {
    // Create a flag to know if it has passed the if check
    let flag = true;
    // Create a for loop to search through the key in the searchObj
    for (const keyOfSearchObj in searchObj) {
      // This if check is to make sure you don't run it if there isn't a key in keyOfSearchObj
      if (Object.hasOwn(items[i], keyOfSearchObj)) {
        // This if check checks if the key matches and if it doesn't match
        if (items[i][keyOfSearchObj] !== searchObj[keyOfSearchObj]) {
          // Change the flag to false and break the loop since it will not be pushed
          flag = false;
          break
        }
      }
    }
    // If the flag is still true then push the object to the newArr
    if (flag === true) {
      newArr.push(items[i]);
    }
  }
  // Return the newArr
  return newArr;
}

console.log(findObjectsFilter(searchFor1, items));
console.log(findObjectsFilter(searchFor2, items));