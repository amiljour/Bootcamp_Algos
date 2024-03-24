

/**
 * Class to represent a Node for a DoublyLinkedList.
 */
class ListNode {
  /**
   * Executed when the new keyword is used to construct a new node instance.
   * @param {any} data The data the new node will store.
   */
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
  /**
   * Executed when the new keyword is used to construct a new DoublyLInkedList
   * instance that inherits these methods and properties.
   */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }
  toArray() {
    const vals = [];
    let runner = this.head;

    while (runner) {
      vals.push(runner.data);
      runner = runner.next;
    }
    return vals;
  }

  insertAtBack(data) {
    const newTail = new ListNode(data);

    if (this.isEmpty()) {
      // if no head set the newTail to be both the head and the tail
      this.head = newTail;
      this.tail = newTail;
    } else {
      this.tail.next = newTail;
      newTail.prev = this.tail;

      this.tail = newTail;
    }
    return this;
  }

  /**
   * Adds all the given items to the back of this list.
   * @param {Array<any>} items Items to be added to the back of this list.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBackMany(items = []) {
    items.forEach((item) => this.insertAtBack(item));
    return this;
  }
  // Base case, insert only once
  // Edge Case 1: insertAfter Head?
  // Edge Case 2: insertAfter Tail?
  // What if we want to insert more than once?
  /**
   * Inserts a new node with the given newVal after the node that has the
   * given targetVal as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} targetVal The node data to find.
   * @param {any} newVal Data for the new node.
   * @returns {boolean} Indicates if the new node was added.
   */
  // 1. Create the new node
  // 2. search for the targetVal by loop through the list (while loop)
  // 3. when the targetVal is found, move around the pointers

  insertAfter(targetVal, newVal) {
    //create a new node
    const newNode = new ListNode(newVal);
    //newNode with the newVal
    // check if the list is empty
    if (this.isEmpty()){
      //the list is empty => return false
      return false;
    }
    //the list is not empty
    let current = this.head;
    while( current !== null && current.data !== targetVal){
      // 1. find the target value if it exist => adjust the pointer
      current = current.next;
      console.log("current: ", current.data);
    }

    // if the target value was not found
    if (current === null){
      return false;
    }
    // current.data === targetVal
    // four pointer need to be chaged
      //1. change the newNode.next = current.next 
    newNode.next = current.next
    newNode.prev = current
    if (current.next !== null){ // base case
      current.next.prev = newNode // the new nodes pointer 8 -> 7
    } else {
      this.tail = newNode
    }
    current.next = newNode
    return true
  }

  /**
   * Inserts a new node with the given newVal before the node that has the
   * given targetVal as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} targetVal The node data to find.
   * @param {any} newVal Data for the new node.
   * @returns {boolean} Indicates if the new node was added.
   */
  insertBefore(targetVal, newVal) {}



  /**
   * Finds the given node in this list and removes it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {DLLNode} node A node in this list.
   * @returns {DoublyLinkedList} This list.
   */
  removeData(data){

  }

}
const list1 = new DoublyLinkedList();
list1.insertAtBackMany([5,7,1,4,7])
console.log(list1.toArray())
