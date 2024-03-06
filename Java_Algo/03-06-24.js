/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 * https://kalkicode.com/data-structure/single-linked-list-visualization
 */
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * SLL(Singly Linked List)
 * keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SLL {
  constructor() {
    this.head = null;
  }

  /**
   * Determines if this list is empty.
   * @returns {boolean}
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBack(data) {
    // 0. Instantiate the newNode
    const newNode = new ListNode(data);

    // edge case: if head is null, head is the newNode
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    // 1. Create a current to the first node
    let current = this.head;
    // 2.move the current to the last node
    while (current.next !== null) {
      // as long as it is not the last node
      current = current.next; // move the current to the next node
    }

    // 3. assign c.next to newNode
    current.next = newNode;
  }

  /**
   * Creates a new node with the given data and inserts that node at the front
   * of the list.
   * @param {any} data The data for the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtFront(data) {
    // edge case: how do we handle an empty list
    // 0. Instantiate the newNode
    const newNode = new ListNode(data);
    //make the newNode.next point to this.head
    newNode.next = this.head;
    // console.log("this.head", this.head);
    //make this.head point to the newNode data
    this.head = newNode;
    // console.log("this.head after", this.head);
  }
  /*
    Before: 

    head
    (3) --> (7) --> (9) --> null

    After insertAtFront(1):
    head
    (1) --> (3) --> (7) --> (9) --> null
  */

  /**
   * Removes the first node of this list.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The data from the removed node.
   */
  removeHead() {
    //Check if the list is empty
    //if this.head is pointing to null->it's empty(but it's)
    if (this.head === null) {
      return null;
    }
    //get the node that is going to be removed
    const removedNode = this.head;
    //make the removedNode point to null
    removedNode.next = null;
    //Case1: only has one node->make
    this.head = this.head.next;
    console.log("Remove node this.head", this.head);
    console.log("******", removedNode, "*******");
    return removedNode;
  }

  /*
    Before: 

    head
    (3) --> (7) --> (9) --> null

    After removeHead():
    head
    (7) --> (9) --> null
  */

  //given
  printList() {
    // if the list is empty?
    if (this.head === null) {
      console.log("This is an empty list");
      return;
    }
    console.log("HEAD: " + this.head.data);
    // how to traverse through different nodes?
    // 1. Create a temp variable to store curr ListNode
    let current = this.head;
    // 2. write a condition as long as current is not null
    while (current) {
      // as long as current is available (not null)
      // 3. print the current data
      console.log(current.data);
      // 4. (increment) move the current to the next node
      current = current.next;
    }
  }
}

const emptyList = new SLL();

const list1 = new SLL();
// head
// (3) --> (7) --> (9) --> null

emptyList.printList();

list1.printList();

list1.insertAtBack(3);
list1.insertAtBack(7);
list1.insertAtBack(9);
list1.insertAtBack(10);
// list1.printList(); // 3, 7, 9, 10
console.log(list1);
list1.insertAtFront(1);
list1.printList(); // 1, 3, 7, 9, 10
list1.removeHead();
// list1.printList(); // 3, 7, 9, 10
// list1.removeHead();
// list1.removeHead();
// list1.printList(); // 9, 10
// list1.removeHead();
// list1.printList(); //10
// list1.removeHead();
// list1.printList(); //null

// Test case 1 -
