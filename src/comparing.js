/**
 * @function isLowerEqualThan
 * @param {Number} numA - number that will be compared
 * @param {Number} numB - number that will compare
 * @returns {Boolean} whether the numA is lower equal than numB
 */
function isLowerEqualThan(numA, numB) {
  return numA <= numB;
}

/**
 * @function isHigherEqualThan
 * @param {Number} numA - number that will be compared
 * @param {Number} numB - number that will compare
 * @returns {Boolean} whether the numA is higher equal than numB
 */
function isHigherEqualThan(numA, numB) {
  return numA >= numB;
}

/**
 * @function isLowerThan
 * @param {Number} numA - number that will be compared
 * @param {Number} numB - number that will compare
 * @returns {Boolean} whether the numA is lower than numB
 */
function isLowerThan(numA, numB) {
  return numA < numB;
}

/**
 * @function isHigherThan
 * @param {Number} numA - number that will be compared
 * @param {Number} numB - number that will compare
 * @returns {Boolean} whether the numA is higher than numB
 */
function isHigherThan(numA, numB) {
  return numA > numB;
}

/**
 * @function isEqual - check whether two values is equal
 * @param {Number|String} numA - the value to check
 * @param {Number|String} numB - the value to check
 * @returns {Boolean} - whether the two values is equal or not
 */
function isEqual(numA, numB) {
  return numA === numB;
}

module.exports = {
    isLowerEqualThan,
    isHigherEqualThan,
    isLowerThan,
    isHigherThan,
    isEqual
}