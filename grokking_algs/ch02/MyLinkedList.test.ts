import MyLinkedList from './MyLinkedList';
import MyDLinkedList from './MyDLinkedList';

test('Linked list operations', () => {
  const outputs = [];
  const obj = new MyLinkedList();
  outputs.push(undefined);       // Constructor doesn't return anything
  outputs.push(obj.addAtHead(1));  // [1]
  outputs.push(obj.addAtTail(3));  // [1, 3]
  outputs.push(obj.addAtIndex(1, 2));  // [1, 2, 3]
  outputs.push(obj.get(1));      // 2
  outputs.push(obj.deleteAtIndex(1)); // [1, 3]
  outputs.push(obj.get(1));      // 3

  const expected = [undefined, undefined, undefined, undefined, 2, undefined, 3];
  expect(outputs).toEqual(expected);
});


test('Doubly-Linked list operations', () => {
  const outputs = [];
  const obj = new MyDLinkedList();
  outputs.push(undefined);       // Constructor doesn't return anything
  outputs.push(obj.addAtHead(1));  // [1]
  outputs.push(obj.addAtTail(3));  // [1, 3]
  outputs.push(obj.addAtIndex(1, 2));  // [1, 2, 3]
  outputs.push(obj.get(1));      // 2
  outputs.push(obj.deleteAtIndex(1)); // [1, 3]
  outputs.push(obj.get(1));      // 3

  const expected = [undefined, undefined, undefined, undefined, 2, undefined, 3];
  expect(outputs).toEqual(expected);
});
