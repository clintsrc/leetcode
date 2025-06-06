// reverseList.test.ts
import reverseList from "./reverseList";

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function buildList(values: number[]): ListNode | null {
  if (values.length === 0) return null;
  const head = new ListNode(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }
  return head;
}

function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

describe("reverseList", () => {
  it("reverses [1, 2, 3, 4, 5]", () => {
    const head = buildList([1, 2, 3, 4, 5]);
    const reversed = reverseList(head);
    expect(listToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
  });

  it("reverses [1, 2]", () => {
    const head = buildList([1, 2]);
    const reversed = reverseList(head);
    expect(listToArray(reversed)).toEqual([2, 1]);
  });

  it("reverses an empty list", () => {
    const head = buildList([]);
    const reversed = reverseList(head);
    expect(listToArray(reversed)).toEqual([]);
  });
});
