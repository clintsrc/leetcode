/**
 * 2703. Return Length of Arguments Passed
 *
 * https://leetcode.com/problems/return-length-of-arguments-passed/
 * Write a function argumentsLength that returns the count of arguments passed to it.
 *
 * The time complexity is O(1) for accessing the array's length property.
 *
 * @param {...(null|boolean|number|string|Array|Object)} args - the arguments passed
 *   are copied into the `args` array using the spread operator
 * @return {number} - the number of arguments that were passed in
 */
// Define a recursive union type that represents valid JSON values
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    // The ... spread operator copies the passed arguments into the args array
    // The size of the args array represents the number of arguments that were passed in
    return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

export default argumentsLength;