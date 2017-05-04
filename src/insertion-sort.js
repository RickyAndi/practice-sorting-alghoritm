const swapElementInArray = require('./swap-element-in-array');
const { getTwoIndexesToBeSwapped, getTwoIndexesToBeSwappedInBackWard } = require('./util');
const { isHigherThan, isLowerThan, isLowerEqualThan, isEqual } = require('./comparing');

function backWardInsertion(array, currentIndex) {
  if(isEqual(currentIndex, 0)) {
    return array;
  }

  const twoIndexesToBeSwapped = getTwoIndexesToBeSwappedInBackWard(currentIndex);
  const lowerIndexValue = array[twoIndexesToBeSwapped[1]];
  const higherIndexValue = array[twoIndexesToBeSwapped[0]];
  if(isLowerThan(higherIndexValue, lowerIndexValue)) {
    let swappedElementArray = swapElementInArray(array, twoIndexesToBeSwapped[0], twoIndexesToBeSwapped[1]);
    
    const nextIndex = currentIndex - 1;
    return backWardInsertion(swappedElementArray, nextIndex);
  }

  return array;
}

function insertionSort(array, currentIndex = 0, indexLimit = (array.length - 1)) {
  if(isEqual(currentIndex, indexLimit)) {
    return array;
  }
  
  const twoIndexesToBeSwapped = getTwoIndexesToBeSwapped(currentIndex);
  const lowerIndexValue = array[twoIndexesToBeSwapped[0]];
  const higherIndexValue = array[twoIndexesToBeSwapped[1]];
  const nextIndex = currentIndex + 1;

  if(isHigherThan(lowerIndexValue, higherIndexValue)) {
    const higherIndex = twoIndexesToBeSwapped[1];
    const swappedArray = backWardInsertion(array, higherIndex);
    return insertionSort(swappedArray, nextIndex, indexLimit);
  }

  return insertionSort(array, nextIndex, indexLimit);
}

module.exports = {
  insertionSort
}