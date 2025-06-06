/**
 * 707. Design Linked List
 *
 * https://leetcode.com/problems/design-linked-list/
 * Design your implementation of the linked list. You can choose to use a singly or
 * doubly linked list.
 * A node in a singly linked list should have two attributes: val and next. val is the
 * value of the current node, and next is a pointer/reference to the next node.
 * If you want to use the doubly linked list, you will need one more attribute prev to
 * indicate the previous node in the linked list. Assume all nodes in the linked list
 * are 0-indexed.
 *
 * Implement the MyLinkedList class:
 *
 * MyLinkedList() Initializes the MyLinkedList object.
 * int get(int index) Get the value of the indexth node in the linked list. If the
 *  index is invalid, return -1.
 * void addAtHead(int val) Add a node of value val before the first element of the
 *  linked list. After the insertion, the new node will be the first node of the
 *  linked list.
 * void addAtTail(int val) Append a node of value val as the last element of the
 *  linked list.
 * void addAtIndex(int index, int val) Add a node of value val before the indexth
 *  node in the linked list. If index equals the length of the linked list, the node
 *  will be appended to the end of the linked list. If index is greater than the
 *  length, the node will not be inserted.
 * void deleteAtIndex(int index) Delete the indexth node in the linked list, if the
 *  index is valid.
 *
 * Doubly linked list uses getNode helper method for bidirectional traversal
 *
 * Efficiency is:
 * DLL traversal is O(n) for traversal; worst case is when index is near the middle
 * - get(index): O(n) – traverses from head or tail
 * - addAtHead(val): O(1)
 * - addAtTail(val): O(1) - uses a tail pointer
 * - addAtIndex(index, val): O(n) – traverses to index for insert
 * - deleteAtIndex(index): O(n) – traverses to index for deletion
 */

interface Node {
  val: number;
  previous: Node | null; // 'left' / 'backward' direction
  next: Node | null; // 'right' / 'forward' direction
}

// Doubly linked list

// class MyLinkedList {
class MyDLinkedList {
  private head: Node | null = null; // start of list
  private tail: Node | null = null; // end of list (provides directional capabilities)
  private size: number = 0; // number of list elements ('nodes'), 0-indexed

  /**
   * Initialize the MyLinkedList object.
   * @param void
   * @return void
   */
  constructor() {
    this.head = null; // empty list
    this.tail = null; // empty list
    this.size = 0;
  }

  /**
   * Get the value of the indexth node in the linked list.
   * If the index is invalid, return -1.
   * Uses getNode helper method for bidirectional traversal
   * @param {number} index
   * @return {number}
   */
  get(index: number): number {
    if (index < 0 || index >= this.size) {
      return -1;
    }

    // Find the node at the specified index
    const currentNode: Node | null = this.getNode(index);

    if (!currentNode) {
      // Node not found
      return -1;
    }

    return currentNode.val;
  }

  /**
   * Add a node of value val before the first element of
   * the linked list. After the insertion, the new node
   * will be the first node of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtHead(val: number): void {
    // create a new Node with the input value
    const newNode: Node = {
      val: val,
      next: this.head, // The current head becomes the next node
      previous: null, // No previous node: this will be the new head
    };

    if (this.size === 0) {
      // Empty list
      // The list's head and tail are the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // The current head's previous now points to the new node
      this.head!.previous = newNode;
      // The list's head is the new node
      this.head = newNode;
    }

    this.size++;
  }

  /**
   * Append a node of value val as the last element of the
   * linked list.
   * @param {number} val
   * @return {void}
   */
  addAtTail(val: number): void {
    if (this.size === 0) {
      // Empty list (DRY)
      // NOTE: size increment is handled in addAtHead for an empty list
      this.addAtHead(val);
    } else {
      // create a new Node with the input value
      const newNode: Node = {
        val: val,
        next: null, // No next node: this will be the new tail
        previous: this.tail, // The current tail becomes the previous node
      };

      // Update the list's current tail to point to the new node
      this.tail!.next = newNode;
      // The last node now points to the new node
      this.tail = newNode;

      // Keep inside the block since addAtHead() increments an empty list
      this.size++;
    }
  }

  /**
   * Add a node with input value before the index-th node in
   * the linked list. If index equals the length of the
   * linked list, the node will be appended to the end of
   * the linked list. If index is greater than the length,
   * the node will not be inserted.
   * Uses getNode helper method for bidirectional traversal
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) {
      // Out of bounds, not inserted
      return;
    }

    if (index === 0) {
      // Prepend (DRY)
      this.addAtHead(val);
    } else if (index === this.size) {
      // Append (DRY)
      this.addAtTail(val);
    } else {
      // Find the node previous to the index position (the insertion point)
      let previousNode: Node | null = this.getNode(index - 1);

      if (previousNode === null) {
        // This should never happen
        return;
      }

      // Create the new node
      const newNode: Node = {
        val: val, // input value
        previous: previousNode, // point back to the previousNode
        next: previousNode.next, // point forward to what was after previousNode
      };

      // previousNode now points forward to the newNode
      previousNode.next = newNode;

      if (newNode.next !== null) {
        // If there’s a node after the newNode it points back to newNode
        newNode.next.previous = newNode;
      }

      this.size++;
    }
  }

  /**
   * Delete the indexth node in the linked list, if the
   * index is valid.
   * Uses getNode helper method for bidirectional traversal
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      // Out of bounds, not deleted
      return;
    }

    let nodeToDelete: Node | null = null;

    // Delete the head by adjusting the list's head directly
    if (index === 0) {
      nodeToDelete = this.head;
      this.head = this.head!.next; // change to the second node's head

      // If there's only one node, reset the tail too
      if (this.size === 1) {
        this.tail = null;
      }
    } else {
      // Find the element at the index position before the targeted index
      const previousNode: Node | null = this.getNode(index - 1);

      if (!previousNode || !previousNode.next) {
        // Node not found
        return;
      }

      nodeToDelete = previousNode.next;
      previousNode.next = nodeToDelete.next; // drop the node link

      if (nodeToDelete.next !== null) {
        // update the back link
        nodeToDelete.next.previous = previousNode;
      }

      // If deleting the tail, update tail pointer
      if (nodeToDelete === this.tail) {
        this.tail = previousNode;
      }
    }

    this.size--;

    return;
  }

  /**
   * Helper method to locate a node by index using bidirectional
   * traversal
   * @param index - The zero-based index of the node to retrieve.
   * @returns The node at the specified index, or null if the
   *  index is out of bounds.
   */
  getNode(index: number): Node | null {
    if (
      index < 0 ||
      index >= this.size ||
      this.head === null ||
      this.tail === null
    ) {
      return null;
    }

    // Find the node at the index position
    let currentNode: Node;
    const midIdx = Math.floor(this.size / 2);

    if (index <= midIdx) {
      // Traverse from the head
      currentNode = this.head!;
      let i = 0;

      while (i < index) {
        currentNode = currentNode.next!;
        i++;
      }
    } else {
      // Traverse from the tail
      currentNode = this.tail!;
      let i = this.size - 1; // 0-based index

      while (i > index) {
        currentNode = currentNode.previous!;
        i--;
      }
    }
    return currentNode;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

export default MyDLinkedList;
