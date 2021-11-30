// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  //  My Solution
  // str = str.toLowerCase();
  // const vowels = ['a', 'e', 'i', 'o', 'u'];
  // let noOfVowels = 0;
  // for (let i = 0; i < str.length; i++) {
  //   if (vowels.includes(str[i])) {
  //     noOfVowels++;
  //   }
  // }
  // return noOfVowels;

  // Solution 1
  // let count = 0;
  // const checker = ['a', 'e', 'i', 'o', 'u'];
  // for (let char of str.toLowerCase()) {
  //   if (checker.includes(char)) {
  //     count++;
  //   }
  // }
  // return count;

  // Solution 2
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
