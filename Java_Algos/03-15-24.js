//http://btv.melezinek.cz/binary-search-tree.html
class BSTNode {
  // TreeNode , node
  constructor(data) {
    this.data = data;
    this.left = null; // a BSTNode with a smaller value
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where
 * the data of left nodes are <= to their parent and
 * the data of right nodes are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Recursively counts the total number of nodes in this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during the traversal of this tree.
   * @returns {number} The total number of nodes.
   */
  size(node = this.root) {
    //check if node exist
    if (!node) return 0;
    // node.left childern size + node.right size
    return 1 + this.size(node.left) + this.size(node.right);
  }





  
  /**
   * Calculates the height of the tree which is based on how many nodes from
   * top to bottom (whichever side is taller).
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {number} The height of the tree.
   */
  height(node = this.root) {
    // A node that is null has a height -1 so that the root node has a 0 height
    if (!node) return -1;
    // return the sum of Math.max from node.left and node.right
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  /**
   * Determines if this tree is a full tree. A full tree is a tree where every
   * node has both a left and a right except for the leaf nodes (last nodes)
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {boolean} Indicates if this tree is full.
   */
  isFull(node = this.root) {
    // zero children / 2 children
    // an empty tree is considered full
    if (!node) {
      return true;
    }
    // if the node does not have both left and right => full
    if (!node.left && !node.right) {
      return true;
    }
    // checks if node.left and node.right exist
    if (node.left && node.right) {
      //if the children exitst => recursively find the node.left and node.right
      return this.isFull(node.left) && this.isFull(node.right);
    }
    // if all are false return false
    return false;
  }

  // HELPER METHOD
  // Logs this tree horizontally with the root on the left.
  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
      return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${node.data}`,
    );

    this.print(node.left, spaceCnt);
  }
  insert(newVal, curr = this.root) {
    let newNode = new BSTNode(newVal);
    if (!curr) {
      this.root = newNode;
      return this;
    }
    while (curr) {
      if (newVal < curr.data) {
        if (!curr.left) {
          curr.left = newNode;
          return this;
        }
        curr = curr.left;
      } else if (newVal >= curr.data) {
        if (!curr.right) {
          curr.right = newNode;
          return this;
        }
        curr = curr.right;
      }
    }
  }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.insert(10);
// oneNodeTree.print();

/* twoLevelTree
          root
          10
        /   \
      5     15
  */
const twoLevelTree = new BinarySearchTree();
twoLevelTree.insert(10).insert(5).insert(15);
twoLevelTree.print();

/* threeLevelTree 
          root
          10
        /   \
      5     15
    / \    / \
  2   8  
  */
const threeLevelTree = new BinarySearchTree();
threeLevelTree.insert(10).insert(5).insert(2).insert(8).insert(15);

threeLevelTree.print();
/* fullTree
                      root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
  */

const fullTree = new BinarySearchTree();
fullTree
  .insert(25)
  .insert(15)
  .insert(10)
  .insert(22)
  .insert(4)
  .insert(12)
  .insert(18)
  .insert(24)
  .insert(50)
  .insert(35)
  .insert(70)
  .insert(31)
  .insert(44)
  .insert(66)
  .insert(90);

console.log(fullTree.size());
console.log(fullTree.height());
console.log(fullTree.isFull());

console.log(threeLevelTree.height());
