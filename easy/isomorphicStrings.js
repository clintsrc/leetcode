/**
 * 205. Isomorphic Strings
 *
 * https://leetcode.com/problems/isomorphic-strings/
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving
 * the order of characters. No two characters may map to the same character, but a character may map to itself.
 *
 * @param {string} s first string
 * @param {string} t second string
 * @return {boolean} true if the strings are isomorphic, false otherwise
 */
var isIsomorphic = function (s, t) {
  // isomorphic strings must be the same length
  if (s.length != t.length) {
      return false;
  }

  // map strings to chars
  let sToCharT = {};
  // reverse map to catch duplicate values
  let tToCharS = {};

  // iterate through the length of the strings (arbitrarily choosing s)
  for (let i = 0; i < s.length; i++) {
      let charS = s[i];
      let charT = t[i];

      // Check whether s[i] has already been mapped in the dictionary
      if (sToCharT[charS]) {
          // The letter is alrady mapped to a different value
          // we have a mismatch and therefore a non-unique mapping
          if (sToCharT[charS] !== charT) {
              return false;
          }
      } else {
          // go ahead and map it
          sToCharT[charS] = charT;
      }

      // Now the reverse map
      if (tToCharS[charT]) {
          if (tToCharS[charT] !== charS) {
              return false;
          }
      } else {
          tToCharS[charT] = charS;
      }
  }

  return true;
};

module.exports = isIsomorphic;