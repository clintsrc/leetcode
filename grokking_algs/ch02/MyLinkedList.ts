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
 * Efficiency is:
 * - get(index): O(n)
 * - addAtHead(val): O(1)
 * - addAtTail(val): O(1) after implementing a tail pointer
 * - addAtIndex(index, val): O(n)
 * - deleteAtIndex(index): O(n) - could be O(1) if doubly-linked?
 */

interface Node {
  val: number;
  next: Node | null;
}

class MyLinkedList {
  private head: Node | null = null; // start of list
  private tail: Node | null = null; // end of list (provides directional capabilities)
  private size: number = 0; // number of list elements ('nodes')

  /**
   * Initializes the MyLinkedList object.
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
   * @param {number} index
   * @return {number}
   */
  get(index: number): number {
    if (index < 0 || index > this.size - 1) {
      return -1;
    }

    // Traverse the nodes to find index, starting from the current head
    let current: Node = this.head!; // size has been checked
    let i = 0;

    // traverse up to the wanted index n times
    while (i < index) {
      current = current.next!;
      i++; // move to the next node
    }

    return current.val;
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
      next: this.head, // point to the list's current head
    };

    // Update the list's head to point to this new node
    this.head = newNode;

    // The list's tail is the same node
    if (this.size === 0) {
      this.tail = newNode;
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
    //Use existing logic for an empty list
    if (this.tail === null) {
      this.addAtHead(val);
    } else {
      // Create the new node
      const newNode: Node = {
        val: val, // input value
        next: null, // set it as the last node
      };

      // Update the list's current tail to point to the new node
      this.tail.next = newNode;
      // The last node now points to the new node
      this.tail = newNode;

      this.size++;
    }
  }

  /**
   * Add a node of value val before the indexth node in
   * the linked list. If index equals the length of the
   * linked list, the node will be appended to the end of
   * the linked list. If index is greater than the length,
   * the node will not be inserted.
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
      // Prepend
      this.addAtHead(val);
    } else if (index === this.size) {
      // Append
      this.addAtTail(val);
    } else {
      // Middle insertion
      // Traverse the list
      let current: Node = this.head!;
      let i = 0;
      // Find the indexed element
      while (i < index - 1 && current.next !== null) {
        current = current.next!;
        i++;
      }

      // Create the new node
      const newNode: Node = {
        val: val, // input value
        next: current.next, // point to the found nodes' next
      };

      // Insert before new node by pointing to the new node
      current.next = newNode;

      this.size++;
    }
  }

  /**
   * Delete the indexth node in the linked list, if the
   * index is valid.
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index: number): void {
    if (index < 0 || index > this.size - 1) {
      // Out of bounds, not deleted
      return;
    }

    // Delete the head by adjusting the list's head directly
    if (index === 0) {
      this.head = this.head!.next; // the head is now the next

      // If there's only one node, reset the tail also
      if (this.size === 1) {
        this.tail = null;
      }

      this.size--;

      return;
    }

    // Middle deletion
    // Traverse the list
    let previousNode: Node = this.head!;
    let i = 0;

    // Find the element previous to the indexed element, 'index - 1'
    while (i < index - 1 && previousNode.next !== null) {
      previousNode = previousNode.next!;
      i++;
    }

    if (previousNode.next === this.tail) {
      this.tail = previousNode;
    }

    // previousNode.next is the 'index' element
    // previousNode.next?.next is the following 'index + 1' element
    // which could be the last element (null)
    previousNode.next = previousNode.next?.next || null;

    this.size--;

    return;
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

export default MyLinkedList;
