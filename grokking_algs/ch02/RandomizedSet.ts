/**
 * 380. Insert Delete GetRandom O(1)
 *
 * https://leetcode.com/problems/insert-delete-getrandom-o1/
 * Implement the RandomizedSet class:
 * - RandomizedSet() Initializes the RandomizedSet object.
 * - bool insert(int val) Inserts an item val into the set if not present.
 *   Returns true if the item was not present, false otherwise.
 * - bool remove(int val) Removes an item val from the set if present.
 *   Returns true if the item was present, false otherwise.
 * - int getRandom() Returns a random element from the current set of
 *   elements (it's guaranteed that at least one element exists when this
 *   method is called). Each element must have the same probability of
 *   being returned.
 *
 * You must implement the functions of the class such that each function works
 * in average O(1) time complexity.
 *
 * O(1) Average efficiency with hybrid Array and HashMap:
 * Read with getRandom() usign an Array is efficiency O(1) using an index lookup
 * Update with insert() using a HashMap + Array	O(1)
 * Delete with remove() using a HashMap + Array	O(1) "Swap-then-pop" avoids re-indexing
 */
class RandomizedSet {
  private map: Map<number, number>;
  private values: number[];

  // Initializes the RandomizedSet object
  constructor() {
    this.map = new Map(); // acts as an efficient index to the array (add, delete)
    this.values = []; // the core data itself, efficient reads (getRandom)
  }

  /* Inserts an item val into the set if not present.
     Returns true if the item was not present, false otherwise. */
  insert(val: number): boolean {
    if (this.map.has(val)) {
      // element preexists
      return false;
    } else {
      // update the core array
      this.values.push(val);
      // update the hash index
      // map key is the unique value, map value is the array position
      this.map.set(val, this.values.length - 1);
      return true;
    }
  }

  /* Removes an item val from the set if present.
     Returns true if the item was present, false otherwise. */
  remove(val: number): boolean {
    if (this.map.has(val)) {
      const index = this.map.get(val)!;
      const lastVal = this.values[this.values.length - 1];

      // We want to resize the array to eliminate the last
      // position. It's necessary in order for getRandom()
      // to have access to valid elements

      /* "Swap-then-pop": swap the removed value with the
          last value in the array */
      this.values[index] = lastVal;
      this.map.set(lastVal, index);
      // resize the array
      this.values.pop();

      // Now the record-keeping
      this.map.delete(val);

      return true;
    } else {
      // element did not exist
      return false;
    }
  }

  /* Returns a random element from the current set of elements
     (it's guaranteed that at least one element exists when this
     method is called). Each element must have the same probability
     of being returned. */
  getRandom(): number {
    if (this.values.length === 0) {
      throw new Error("getRandom() called on an empty set.");
    }

    const randomIndex = Math.floor(Math.random() * this.values.length);
    return this.values[randomIndex];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

export default RandomizedSet;
