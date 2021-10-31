// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //  My Solution
  // const res = {};
  // let highest = 0;
  // let prop;
  // str.split('').forEach((x) => {
  //   if (!res[x]) {
  //     res[x] = 1;
  //   } else {
  //     res[x] = res[x] + 1;
  //   }
  // })
  // Object.keys(res).forEach(x => {
  //   if (res[x] > highest) {
  //     highest = res[x];
  //     prop = x;
  //   }
  // })
  // return prop;

  // Solution 1
  const charMap = {};
  let max = 0;
  let maxC = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxC = char;
    }
  }
  return maxC;

}

module.exports = maxChar;
