/**
 * Ref: https://www.cs.usfca.edu/~galles/visualization/Heap.html
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
  constructor() {
    /**
     * 0th index not used, so null is a placeholder.
     * Not using 0th index makes calculating the left and right
     * children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
    this.heap = [null];
  }
  /**
   * Retrieves the size of the heap, ignoring the null placeholder.
   * @returns {?number} Null if empty.
   */
  size() {
    // - 1 since 0 index is unused
    return this.heap.length - 1;
  }

  /**
   * Retrieves the top (minimum number) in the heap without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {?number} Null if empty.
   */
  top() {
    // if the heap is empty return null
    // else return the this.heap[1]
    return this.heap.length > 1 ? this.heap[1] : null;
  }

  /**
   * Inserts a new number into the heap and maintains the heaps order.
   * 1. Push new num to back then.
   * 2. Iteratively swap the new num with it's parent while it is smaller than its parent.
   *   parent : Math.floor(i/2)
   *   left child: i*2   | right child: i*2+1
   * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
   * - Space: O(1) constant.
   * @param {number} num The num to add.
   */
  insert(num) {
    // push the num into this.heap (array)
    this.heap.push(num);
    // create a variable for the child that was just added
    let currentIndex = this.heap.length - 1;
    // create a variable for the parent of the child that was added
    let parentIndex = Math.floor(currentIndex / 2);
    // create a while loop
    while (
      // checks the current index that was added isn't at 0 or 1
      currentIndex > 1 &&
      // checks if the current index isn't greater then the parent index
      this.heap[currentIndex] < this.heap[parentIndex]
    ) {
      // create a temp variable to hold the current number
      let temp = this.heap[currentIndex];
      // Assign the value of the parent element to the current number
      this.heap[currentIndex] = this.heap[parentIndex];
      // swap in the temp variable into the old parent variable
      this.heap[parentIndex] = temp;
      // make the current index now the parent since it was swapped
      currentIndex = parentIndex;
      // make the parent index the new parent since the swap
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  /**
   * Logs the tree horizontally with the root on the left and the index in
   * parenthesis using reverse inorder traversal.
   */
  printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
    if (parentIdx > this.heap.length - 1) {
      return;
    }

    spaceCnt += spaceIncr;
    this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${this.heap[parentIdx]} (${parentIdx})`
    );

    this.printHorizontalTree(parentIdx * 2, spaceCnt);
  }
}

var heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(2);
heap.insert(20);
heap.insert(25);
heap.insert(15);
heap.insert(3);
heap.insert(7);
heap.insert(14);

heap.printHorizontalTree();
