const { isEven, isNull } = require('./util');
const { isEqual, isHigherEqualThan, isLowerEqualThan, isHigherThan, isLowerThan } = require('./comparing');
const swapElementInArray = require('./swap-element-in-array');
const debug = require('debug')('partition');

function getToBeSwappedIndex(getNextIndex, compare, array, index, pivotIndex) {
  if(index === pivotIndex) {
    return index;
  }
  
  if(compare(array[index], array[pivotIndex])) {
    return index;
  }

  const nextIndex = getNextIndex(index);
  return getToBeSwappedIndex(getNextIndex, compare, array, nextIndex, pivotIndex);
}

const getStartIndexToBeSwapped = getToBeSwappedIndex.bind(null, 
  index => index + 1, 
  (indexValue, pivotValue) => {
    return indexValue >= pivotValue
  }
);

const getEndIndexToBeSwapped = getToBeSwappedIndex.bind(null, 
  index => index - 1, 
  (indexValue, pivotValue) => {
    return indexValue <= pivotValue
  }
);

function getPivotIndex(startIndex, endIndex) {
  const numberOfElements = endIndex - startIndex;
  if(isEven(numberOfElements)) {
    return (numberOfElements / 2) + startIndex;
  }

  return ((numberOfElements - 1) / 2) + startIndex;
}

function getNextPivotIndex(pivotIndex, startIndex, endIndex) {
  if(isEqual(startIndex, pivotIndex)) {
    return endIndex;
  }

  if(isEqual(endIndex, pivotIndex)) {
    return startIndex;
  }

  return pivotIndex;
}

function partition(array, pivotIndex, startIndex, endIndex) {
  if(isEqual(startIndex, pivotIndex) && isEqual(endIndex, pivotIndex)) {
    return {
      partitionedArray : array,
      nextPivotIndex : pivotIndex
    }
  }

  const startIndexToBeSwapped = getStartIndexToBeSwapped(array, startIndex, pivotIndex);
  const endIndexToBeSwapped = getEndIndexToBeSwapped(array, endIndex, pivotIndex);
  const swappedElementArray = swapElementInArray(array, startIndexToBeSwapped, endIndexToBeSwapped);
  const nextPivotIndex = getNextPivotIndex(pivotIndex, startIndexToBeSwapped, endIndexToBeSwapped);
  const nextStartIndex = isEqual(startIndexToBeSwapped, nextPivotIndex) ?  startIndexToBeSwapped : startIndexToBeSwapped + 1;
  const nextEndIndex = isEqual(endIndexToBeSwapped, nextPivotIndex) ?  endIndexToBeSwapped : endIndexToBeSwapped - 1;

  return partition(swappedElementArray, nextPivotIndex, nextStartIndex, nextEndIndex);
}

function quickSort(array, pivotIndex = null, startIndex = null, endIndex = null) {
  if(isNull(pivotIndex) && isNull(startIndex) && isNull(endIndex)) {
    startIndex = 0;
    endIndex = (array.length - 1);
    pivotIndex = getPivotIndex(startIndex, endIndex);
    
    const centerPartitioningResult = quickSort(array, pivotIndex, startIndex, endIndex);
    
    const leftEndIndex = (centerPartitioningResult.nextPivotIndex - 1);
    const leftPivotIndex = getPivotIndex(startIndex, leftEndIndex);
    const leftPartitioningResult = quickSort(centerPartitioningResult.partitionedArray, leftPivotIndex, startIndex, leftEndIndex);

    const rightStartIndex = (centerPartitioningResult.nextPivotIndex + 1);
    const rightPivotIndex = getPivotIndex(rightStartIndex, endIndex);
    const rightPartitioningResult = quickSort(leftPartitioningResult.partitionedArray, rightPivotIndex, rightStartIndex, endIndex);

    return rightPartitioningResult.partitionedArray;

  } else {
    
    if((isEqual(pivotIndex, startIndex) && isEqual(pivotIndex, endIndex)) || isHigherThan(startIndex, endIndex)) {
      return {
        partitionedArray : array,
        nextPivotIndex : pivotIndex
      }
    }
      
    const centerPartitioningResult = partition(array, pivotIndex, startIndex, endIndex);
    
    const leftEndIndex = (centerPartitioningResult.nextPivotIndex - 1);
    const leftPivotIndex = getPivotIndex(startIndex, leftEndIndex);
    const leftPartitioningResult = quickSort(centerPartitioningResult.partitionedArray, leftPivotIndex, startIndex, leftEndIndex);
    
    const rightStartIndex = (centerPartitioningResult.nextPivotIndex + 1);
    const rightPivotIndex = getPivotIndex(rightStartIndex, endIndex);
    const rightPartitioningResult = quickSort(leftPartitioningResult.partitionedArray, rightPivotIndex, rightStartIndex, endIndex);
    
    return rightPartitioningResult;
  }
}

module.exports = {
  partition,
  getNextPivotIndex,
  getPivotIndex,
  quickSort
}