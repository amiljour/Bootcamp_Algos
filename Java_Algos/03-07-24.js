// class Node
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// class SLL - Singly Linked List
class SLL {
  constructor() {
    this.head = null;
  }

  insertAtBack(data) {
    var newNode = new ListNode(data);
    if (this.head) {
      var runner = this.head;
      while (runner.next) {
        runner = runner.next;
      }
      runner.next = newNode;
    } else {
      this.head = newNode;
    }
  }
  //given
  printList() {
    if (!this.head) {
      console.log("Empty list");
      return;
    }
    var runner = this.head;
    while (runner) {
      console.log(runner.data);
      runner = runner.next;
    }
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * @param {any} val The data to search for in the nodes of this list.
   * @returns {boolean}
   */
  contains(data) {
    // create a variable for this.head
    let runner = this.head;
    // create a while loop
    while (runner) {
      // if this.head is = to the data return true
      if (runner.data === data) {
        return true;
      }
      // else, move runner to .next
      else {
        runner = runner.next;
      }
    }
    // If it goes through the while loop and nothing is a match return false
    return false;
  }

  /**
   * Removes the last node of this list.
   * @returns {any} The data from the node that was removed.
   * Base case: a list with more than 2 nodes
   * Edge case: a list with only 2 nodes
   * Edge case: a list with only 1 node
   * Edge case: a list that is empty
   */
  removeBack() {
    // for empty list
    if (!this.head) return null;
    // for if there is only one in the list
    if (!this.head.next) {
      let data = this.head.data;
      this.head = null;
      return data;
    }
    // create a runner variable at this.head
    let runner = this.head;
    // create a while loop that if runner.next.next DOESN'T = null then have runner become runner.next to get the next node untill you get null for next.next
    while (runner.next.next) {
      runner = runner.next;
    }
    // make the last variable = data to return it
    let data = runner.next.data;
    // make the runner.next = null
    runner.next = null;
    // return data
    return data;
  }
  // Great job!!
  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @param {?ListNode} current The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {boolean}
   */
  containsRecursive(val, current = this.head) {
    // create an if statement if it is at the end of the list
    if (current === null) return false;
    // create an if statement for if current data is = to val
    if (current.data === val) return true;
    return this.containsRecursive(val, current.next);
  }

  // EXTRA
  /**
   * Recursively finds the maximum integer data of the nodes in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {ListNode} runner The start or current node during traversal, or null
   *    when the end of the list is reached.
   * @param {ListNode} maxNode Keeps track of the node that contains the current
   *    max integer as it's data.
   * @returns {?number} The max int or null if none.
   */
  recursiveMax(runner = this.head, maxNode = this.head) {}
}

var list1 = new SLL();

var list2 = new SLL();
list2.insertAtBack(5);
list2.insertAtBack(6);
list2.insertAtBack(7);
list2.insertAtBack(8);
list2.insertAtBack(6);
list2.insertAtBack(7);
list2.insertAtBack(8);
list2.printList();
console.log(list2.contains(5));
console.log(list2.contains(3));
list2.removeBack();
//       HEAD
// list2: (5) --> (6) --> (7) --> (8) -->null
//       HEAD
// list2: (5) --> (6) --> (7) --> null

// list1.printList();
list2.printList();
console.log(list2.containsRecursive(5));
console.log(list2.containsRecursive(3));
