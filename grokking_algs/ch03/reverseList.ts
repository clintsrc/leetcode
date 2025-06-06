/**
 * 206. Reverse Linked List
 * Given the head of a singly linked list, reverse the list, and return the
 * reversed list.
 *
 * Follow up: A linked list can be reversed either iteratively or recursively.
 * Could you implement both?
 *
 * NOTES:
 * Iterative solution O(n) linear: iterates through the loop once
 * Recursive solution O(n) linear: calls function once for each element
 *
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * This is the iterative solution
 *
 * before: head -> [1] -> [2] -> [3] -> null
 * after:  head -> [3] -> [2] -> [1] -> null
 * 1.next = 2 becomes 2.next = 1
 * 2.next = 3 becomes 3.next = 2
 * 3.next = null: no change, it's the new head
 * 1.next = null becomes the new tail
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
/* function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;

  // Traverse to the end of the list
  while (current !== null) {
    // Save a reference to the next node before we overwrite current.next
    let next = current.next; // 2

    // This is the swap itself
    // Reverse the pointer: current now points to the previous node
    current.next = prev; // null

    // Move prev forward to current
    prev = current; // 1

    // Move current forward to the next node in the original list
    // This is why we temporarily saved it
    current = next; // 2
  }

  // prev now points to the new head of the reversed list
  return prev;
} */

/**
 * This is the recursive solution
 *
 * before: head -> [1] -> [2] -> [3] -> null
 * after:  head -> [3] -> [2] -> [1] -> null
 * 1.next = 2 becomes 2.next = 1
 * 2.next = 3 becomes 3.next = 2
 * 3.next = null: no change, it's the new head
 * 1.next = null becomes the new tail
 *
 * Call stack:
 * reverseList(1)
 *   calls -> reverseList(2)
 *     calls -> reverseList(3)
 *       base case: returns node 3
 *
 * Unwind:
 * reverseList(2)
 *   head.next.next = head
 *   3.next = 2
 *   head.next = null
 *   returns node 3
 *
 * reverseList(1)
 *   head.next.next = head
 *   2.next = 1
 *   head.next = null
 *   returns node 3
 *
 * Final list:
 * [3] -> [2] -> [1] -> null
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head: ListNode | null): ListNode | null {

  // *** Base case: if list is empty or has one node, return it as the new head
  if (head === null || head.next == null) return head;

  // *** Recursive case
  // Pass the next node, get new head of the reversed sublist
  // (Call is suspended here)
  const newHead = reverseList(head.next);

  // (Call resumes here when the recursive call returns)
  // Change the next node's next pointer to the node behind it
  head.next.next = head;
  // Disconnect the old next node to prevent an infinite loop
  head.next = null;

  // Return new head of reversed list
  return newHead;
}

export default reverseList;
