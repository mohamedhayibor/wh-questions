'use strict'

/** params: string or array
*/

const countWh = (arg) => {
  // throw error if arg type is not a string or array
  if (arg.length < 1) {
    throw Error('Expected a non-empty string or array.')
  }

  let temp = arg;
  // check for string types then turn it into an array
  if (typeof arg === 'string') {
    temp = temp.split(' ');
  }

  // implement on arrays
  return temp.reduce( (sum, word) => {
    let val = word.toLowerCase();
    return (val === 'how' || val === 'why' || val === 'what' ||
    val === 'where' || val === 'when' || val === 'who') ? sum + 1 : sum;
  }, 0);
};

module.exports = countWh;
