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
   * Retrieves the data of the second to last node in this list.
   * @returns {any} The data of the second to last node or null 
   *   if there is no second to last node.

   */
  secondToLast() {
    let runner = this.head;
    if (runner === null || runner.next === null) {
      return null;
    }
    while (runner.next.next !== null) {
      runner = runner.next;
    }
    return runner;
  }

  /**
   * BONUS
   * Retrieves the data of the Kth to last node in this list.
   * @returns {any} The data of the Kth to last node or null
   *   if there is no second to last node.
   */

  kthToLast(k) {
    //create variables to for the runner
    let runner = this.head;
    let runner2 = this.head;

    for (let i = 0; i < k; i++) {
      if (!runner) return null;
      runner = runner.next;
    }
    while (runner && runner.next) {
      runner = runner.next;
      runner2 = runner2.next;
    }
    return runner2 ? runner2.data : null;
  }

  /**
   * Removes the node that has the matching given val as it's data.
   * @param {any} val The value to compare to the node's data
   *   to find the node to be removed.
   * @returns {boolean} Indicates if a node was removed or not.
   */
  removeData(data) {
    //HINT: The list is constructed by connecting nodes with pointers
    // Play with the pointers so that you can remove that node from the list.
    if (!this.head) return false;
    if (this.head.data === data) {
      this.head = this.head.next;
      return true;
    }
    //use runner.next to find if we match data
    let runner = this.head;
    // While loop to check runner.next
    while (runner.next) {
      //if runner.next.data match data
      //=>runner.next = runner.next.next
      if (runner.next.data === data) {
        runner.next = runner.next.next;
        return true;
      }
      runner = runner.next;
    }
    return false;
  }
  // Great job!
  // prev, curr
  // Base case : remove a node that is not a head/tail
  // Edge case1: remove the node if it is tail
  // Edge case2: remove the node if it is head

  // level1 : only remove the first matching item
  // level 2: remove all matching items
}

var list1 = new SLL();

var list2 = new SLL();
list2.insertAtBack(5);
list2.insertAtBack(6);
list2.insertAtBack(7);
list2.insertAtBack(8);
list2.insertAtBack(10);
list2.insertAtBack(73);
list2.insertAtBack(90);
list2.printList();
list2.kthToLast(2);
console.log("**********************")
console.log(list2.kthToLast(2))
// console.log(list2.secondToLast());//
// list2.removeData(8);
//Yeah! I saw it! Thanks, good job to you too jack!
//Great job austin!
// list2.printList();
//       HEAD
// list2: (1) --> (2) --> (3) --> null

// list1.printList();
// list2.printList();
