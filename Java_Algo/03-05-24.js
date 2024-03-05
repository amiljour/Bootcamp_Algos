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
    //check if this.head is null;
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
    if(this.head ===null){
      this.head = newNode;
      return;
    }
    
    // 1. Create a current to the first node
    let current = this.head;

    // 2.move the current to the last node
    while(current.next !==null){
      // 2.1 Move the current to the next node
      current = current.next;
    }

    // 3. assign c.next to newNode
    current.next = newNode;
      
    }
    /*
      0. Instantiate the newNode
        newNode
        (data) --> null    
      
      1. Create a current to the first node
        head
        (3) --> (7) --> (9) --> null
         c

      2.move the current to the last node
        head
        (3) --> (7) --> (9) --> null
                         c     .next
         
        newNode
        (data) --> null                

      3. assign c.next to newNode
                                newNode
        (3) --> (7) --> (9) --> (data) --> null
                         c

    */
    // level 2: insert a new node into emptyList

  /** BONUS:
   * Calls insertAtBack on each item of the given array.
   * - Time: O(n * m) n = list length, m = arr.length.
   * - Space: O(1) constant.
   * @param {Array<any>} vals The data for each new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackMany(vals) {}

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
list1.printList(); // 3, 7, 9, 10
// console.log(list1.isEmpty());

// Great job! And love how you make it a 1-line code for isEmpty!
// There is no list2. You can use emptyList to test
