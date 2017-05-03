/**
 * @function swapElementInArray - swap element inside an array
 * @param {Array} array - array which is its elements will be swapped
 * @param {Number} indexA - index of array to be swapped
 * @param {Number} indexB - index of array to be swapped
 * @returns {Array} array which its elements swapped
 */
function swapElementInArray(array, indexA, indexB) {
  const tempA = array[indexA];
  const tempB = array[indexB];
  array[indexA] = tempB;
  array[indexB] = tempA;
  return array;
}

module.exports = swapElementInArray;