/**
 * 121. Best Time to Buy and Sell Stock
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * You are given an array prices where prices[i] is the price of a given stock on the
 *  ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and
 *  choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot
 *  achieve any profit, return 0.
 *
 * NOTE: This is a greedy algorithm because at each step, we track the
 * minimum price found so far, then  calculate the potential profit from
 * that minimum. The buy price is updated if a lower value is found, but
 * it's not tracked as the final buy price for each transaction.
 *
 * It is O(n) time complexity because it only iterates through a single array.
 * It is O(1) space complexity because a fixed set of variables are declared and
 *  updated.
 *
 * @param {number[]} prices array of numbers for daily stock price changes
 * @return {number} the maximum profit possible buying low, selling high, or 0 if no
 *  profit is achievable
 */
var maxProfit = function(prices) {
  let currentMinPrice = prices[0]; // track the min price
  let maxProfit = 0; // trade might not be needed

  for (let price = 1; price < prices.length; price++) {
      let currentProfit = prices[price] - currentMinPrice;

      if(currentProfit > maxProfit) {
          maxProfit = currentProfit // found a profit
      }

      if (prices[price] < currentMinPrice) {
          currentMinPrice = prices[price]; // found a lower buy price
      }
  }

  return maxProfit;
};

module.exports = maxProfit;