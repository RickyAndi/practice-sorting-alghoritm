const { isHigherThan, isEqual } = require('./comparing');
const swapElementInArray = require('./swap-element-in-array');
const debug = require('debug')('bubble');

function getTwoIndexesToBeSwapped(index) {
  return [index, index + 1];
}

function recursiveBubbleSort(array, currentIndex = 0, indexLimit = (array.length - 1)) {
  if(isEqual(indexLimit, 0)) {
    return array;
  }
  
  if(isEqual(currentIndex, indexLimit)) {
    const nextIndexLimit = indexLimit - 1;
    const firstIndex = 0;
    return recursiveBubbleSort(array, firstIndex, nextIndexLimit)
  }

  const indexesToBeSwapped = getTwoIndexesToBeSwapped(currentIndex);
  const lowerIndexValue = array[indexesToBeSwapped[0]];
  const higherIndexValue = array[indexesToBeSwapped[1]];
  const nextIndex = currentIndex + 1;
  
  if(isHigherThan(lowerIndexValue, higherIndexValue)) {
    let swappedElementArray = swapElementInArray(array, indexesToBeSwapped[1], indexesToBeSwapped[0]);
    return recursiveBubbleSort(swappedElementArray, nextIndex, indexLimit);
  } 

  return recursiveBubbleSort(array, nextIndex, indexLimit);
}

function loopBubbleSort() {

}

module.exports = {
  getTwoIndexesToBeSwapped,
  bubbleSort : recursiveBubbleSort,
}