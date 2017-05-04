const { isHigherThan, isEqual } = require('./comparing');
const swapElementInArray = require('./swap-element-in-array');
const debug = require('debug')('bubble');

function getTwoIndexesToBeSwapped(index) {
  return [index, index + 1];
}

function bubbleSort(array, currentIndex = 0, indexLimit = (array.length - 1)) {
  if(isEqual(indexLimit, 0)) {
    return array;
  }
  
  if(isEqual(currentIndex, indexLimit)) {
    const nextIndexLimit = indexLimit - 1;
    const firstIndex = 0;
    return bubbleSort(array, firstIndex, nextIndexLimit)
  }

  const indexesToSwap = getTwoIndexesToBeSwapped(currentIndex);
  const lowerIndexValue = array[indexesToSwap[0]];
  const higherIndexValue = array[indexesToSwap[1]];
  
  const nextIndex = currentIndex + 1;
  
  if(isHigherThan(lowerIndexValue, higherIndexValue)) {
    let swappedElementArray = swapElementInArray(array, indexesToSwap[1], indexesToSwap[0]);
    return bubbleSort(swappedElementArray, nextIndex, indexLimit);
  } 

  return bubbleSort(array, nextIndex, indexLimit);
}

module.exports = {
  getTwoIndexesToBeSwapped,
  bubbleSort
}