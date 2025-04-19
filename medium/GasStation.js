/**
 * There are n gas stations along a circular route, where the amount of gas at the ith
 * station is gas[i]. You have a car with an unlimited gas tank and it costs cost[i] of
 * gas to travel from the ith station to its next (i + 1)th station. You begin the
 * journey with an empty tank at one of the gas stations.
 *
 * Given two integer arrays gas and cost, return the starting gas station's index if
 * you can travel around the circuit once in the clockwise direction, otherwise
 * return -1. If there exists a solution, it is guaranteed to be unique.
 *
 * NOTE: This uses a greedy algorithm. Instead of testing each station individually,
 * we track whether the total gas is enough to cover the total cost. If so, a solution
 * must exist.
 *
 * As we iterate, if the tank goes negative, it means we could not complete the
 * trip the current starting station, so we discard the entire segment up to this
 * point and start fresh from the next station.
 *
 * This works because any station in the failed segment would have provided even less
 * net gas before the tank ran dry, so none of them can be a valid starting point.
 *
 * @param {number[]} gas array represents the amount of gas at each station
 * @param {number[]} cost array represents the amout of gas to travel from one station
 *  to the next
 * @return {number} the starting gas station (array index) or -1 if it can't be
 *  completed
 */
var canCompleteCircuit = function(gas, cost) {
  // greedy algorithm: check the overall resource availablility
  let total_gas = gas.reduce((acc, value) => acc + value, 0 )
  let total_cost = cost.reduce((acc, value) => acc + value, 0 )

  if( total_gas < total_cost ) return -1
  // otherwise we know there are sufficient resources once we find a valid starting point...

  let currentTank = 0;
  let startingStation = 0; // station

  for(let i = 0; i < gas.length; i++ ) {
      currentTank += gas[i] - cost[i];

      // try restarting from the next station
      if (currentTank < 0) {
          startingStation = i + 1;
          // reset the tank
          currentTank = 0;
      }
  }

  return startingStation;
};