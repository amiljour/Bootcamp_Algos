class UtilClass {
  // class declaration
  greetMessage() {
    return "Hi";
  }
  totalCount(numArr) {
    // Given an array of numbers,  return the sum of the array
    //loop thru the array and add each number to the sum
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
      sum += numArr[i];
    }
    return sum;
    // Great job! And love your pseudo code!
  }
  printMessages(msgArr) {
    // Given an array of String, write a function to print messages
    for (let i = 0; i < msgArr.length; i++) {
      console.log(msgArr[i]);
    }
  }
}
// outside the class (similar to main method in Java)
var messagesPerDay = [5, 8, 6];
var messages = [
  "Please call back!",
  "Make sure you install jdk",
  "DO NOT INSTALL VS CODE EXTENSION!",
];

// instantiate the class to use
var newBot = new UtilClass();
console.log(newBot.greetMessage());
console.log(newBot.totalCount(messagesPerDay));
newBot.printMessages(messages);