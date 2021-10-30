// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //  My solution
  // const workingNum = n < 0 ? Math.abs(n) : n;
  // const reversed = parseInt(workingNum.toString().split('').reverse().join(''));
  // return n < 0 ? -reversed : reversed;

  //  Solution 1
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
