// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  //  My Solution
  // stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  // stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
  // const chrMapA = {};
  // const chrMapB = {};
  // let ctrlKeys;
  // let returnVal = true;
  // for (let char of stringA) {
  //   if (chrMapA[char]) {
  //     chrMapA[char]++;
  //   } else {
  //     chrMapA[char] = 1;
  //   }
  // }
  // for (let char of stringB) {
  //   if (chrMapB[char]) {
  //     chrMapB[char]++;
  //   } else {
  //     chrMapB[char] = 1;
  //   }
  // }
  // if (Object.keys(chrMapA).length > Object.keys(chrMapB).length){
  //   ctrlKeys = Object.keys(chrMapA);
  // } else {
  //   ctrlKeys = Object.keys(chrMapB);
  // }
  // for (val of ctrlKeys) {
  //   if (chrMapA[val]  !== chrMapB[val]) {
  //     returnVal = false;
  //     break;
  //   }
  // }
  // return returnVal;

  //  Solution 1
  // const aCharMap = buildCharMap(stringA);
  // const bCharMap = buildCharMap(stringB);
  // if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
  //   return false;
  // }
  // for (let char in aCharMap) {
  //   if (aCharMap[char] !== bCharMap[char]) {
  //     return false
  //   }
  // }
  // return true; 

  //  Solution 2
  return cleanString(stringA) === cleanString(stringB);

}
//  Solution 1 Helper
// function buildCharMap (str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g).toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

//  Solution 2 Helper
function cleanString (str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
