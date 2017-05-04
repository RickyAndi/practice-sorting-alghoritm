/**
 * @function isNull
 * @param {any} value - value to check if it is null or not
 * @returns {Boolean} - whether the value is null or not
 */
function isNull(value) {
  return value === null;
}

/**
 * @function isEven
 * @param {Number} number - number to check whether is even or not
 * @returns {Boolean} - whether the number is even or not 
 */
function isEven(number) {
  return number % 2 === 0;
}

/**
 * @function isOdd
 * @param {Number} - number to check whether is even or not
 * @returns {Boolean} - whether the number is odd or not 
 */
function isOdd(number) {
  return number % 2 !== 0;
}

/**
 * @function not
 * @param {Boolean} boolean - Boolean value to be negated
 * @returns {Boolean} negated boolean value
 */
function not(boolean) {
  return !boolean;
}

function getTwoIndexesToBeSwapped(index) {
  return [index, index + 1];
}

function getTwoIndexesToBeSwappedInBackWard(index) {
  return [index, index - 1];
}

module.exports = {
  isNull,
  isEven,
  isOdd,
  not,
  getTwoIndexesToBeSwapped,
  getTwoIndexesToBeSwappedInBackWard
};