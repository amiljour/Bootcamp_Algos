const students = [
  {
    id: 1,
    name: "student1",
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false
  },
  {
    id: 2,
    name: "student2",
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false
  },
  {
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false
  }
];

function findByIdAndUpdate(id, updatedValues, collection) {
  // create a for loop to go over each object in the collection
  for (let i = 0; i < collection.length; i++){
    // if the key in the object matches the key in updatedValues change the value in the object to match the key
    if (id === collection[i].id){
      // created a for in loop to get the keys from updateValues
      for (const keyOfUpdatedValues in updatedValues) {
        // this checks to make sure that collection[i] has the key of keyOfUpdatedValues
        if (Object.hasOwn(collection[i], keyOfUpdatedValues)) {
          // if the if check is true then change the collection[i][keyOfUpdatedValues] to the updatedValues[keyOfUpdatedValues]
          collection[i][keyOfUpdatedValues] = updatedValues[keyOfUpdatedValues]
        }
      }
      // return new object
      return collection[i]
    }
  }
  // if false return null
  return null
}

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue" }, students));
console.log(findByIdAndUpdate(5, {}, students));