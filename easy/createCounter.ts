/**
 * 2620. Counter
 *
 * https://leetcode.com/problems/counter/
 * Given an integer n, return a counter function. This counter function
 * initially returns n and then returns 1 more than the previous value every
 * subsequent time it is called (n, n + 1, n + 2, etc).
 *
 * NOTE: A parent function has a counter variable. It returns a function
 * that has access to that variable, allowing it to persist across multiple calls.
 *
 * Time complexity is O(1) per call, as each call to the counter function
 * involves just a single increment operation. It's best to keep the closure as
 * stripped down as possible for best efficiency
 *
 * @param {number} n - starting value for the counter.
 * @return {Function} counter - function that returns an incrementing counter value.
 */
function createCounter(n: number): () => number {
  let counter = n;

  // closure function (over the counter variable)
  return function() {
      return counter++;
  }
}


/**
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/

export default createCounter;