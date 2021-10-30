// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //  My Solution
  // let reverseStr = '';
  // for (var i = (str.length-1); i >= 0; i--) {
  //   reverseStr += str[i];
  // }
  // return reverseStr;

  // Solution 1
  // return str.split('').reverse().join('');

  // Solution 2
  // let reversed = '';
  // for (let character of str) {
  //   reversed = character + reversed;
  // }
  // return reversed;

  // Solutiion 3
  // debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('add')

module.exports = reverse;
