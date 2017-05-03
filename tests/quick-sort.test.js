const { getPivotIndex, getNextPivotIndex, partition, quickSort } = require('../src/quick-sort');
const { expect } = require('chai');

describe('Quick Sort Module', () => {
  describe('getPivotIndex function', () => {
    describe('can get pivot index of an array provided by start index and end index', () => {
      it('test 1 : on array [0,1,2,3,4,5,6], with start index 0, end index 6, pivot index will be on index 3', () => {
        const pivotIndex = getPivotIndex(0, 6);
        const expectedPivotIndex = 3;
        expect(pivotIndex).to.equal(expectedPivotIndex)
      });

      it('test 2 : on array [0,1,2,3,4,5,6], with start index 3, end index 6, pivot index will be on index 4', () => {
        const pivotIndex = getPivotIndex(3, 6);
        const expectedPivotIndex = 4;
        expect(pivotIndex).to.equal(expectedPivotIndex)
      });

      it('test 3 : on array [0,1,2,3,4,5,6], with start index 0, end index 4, pivot index will be on index 2', () => {
        const pivotIndex = getPivotIndex(0, 4);
        const expectedPivotIndex = 2;
        expect(pivotIndex).to.equal(expectedPivotIndex)
      });

      it('test 4 : on array [0,1,2,3,4,5,6], with start index 0, end index 2, pivot index will be on index 1', () => {
        const pivotIndex = getPivotIndex(0, 2);
        const expectedPivotIndex = 1;
        expect(pivotIndex).to.equal(expectedPivotIndex)
      });

       it('test 5 : on array [0,1,2,3,4,5,6], with start index 2, end index 6, pivot index will be on index 4', () => {
        const pivotIndex = getPivotIndex(2, 6);
        const expectedPivotIndex = 4;
        expect(pivotIndex).to.equal(expectedPivotIndex)
      });
    });
  });

  describe('getNextPivotIndex function', () => {
    describe('can decide change in pivot index', () => {
      it('test 1 : startIndex -> 0, endIndex -> 5, pivotIndex -> 5, expected -> 0', () => {
        const startIndex = 0;
        const endIndex = 5;
        const pivotIndex = 5;
        const expectedNextPivotIndex = 0;
        expect(getNextPivotIndex(pivotIndex, startIndex, endIndex)).to.equal(expectedNextPivotIndex);
      });
      it('test 2 : startIndex -> 0, endIndex -> 5, pivotIndex -> 0, expected -> 5', () => {
        const startIndex = 0;
        const endIndex = 5;
        const pivotIndex = 0;
        const expectedNextPivotIndex = 5;
        expect(getNextPivotIndex(pivotIndex, startIndex, endIndex)).to.equal(expectedNextPivotIndex);
      });
    });
  });

  describe('partition function', () => {
    describe('can do quick sort partition on array, will return object, contains sorted and partitioned array and pivot index after partitioning', () => {
      it('test 1 : on array [9,8,7,6,5,4,3,2,1] will return { partitionedArray : [1,2,3,4,5,6,7,8,9], nextPivotIndex : 4}', () => {
        const array = [9,8,7,6,5,4,3,2,1];
        const expectedObjectResult = {
          partitionedArray : [1,2,3,4,5,6,7,8,9], 
          nextPivotIndex : 4
        };
        const startIndex = 0;
        const endIndex = 8;
        const pivotIndex = getPivotIndex(startIndex, endIndex);
        const objectResult = partition(array, pivotIndex, startIndex, endIndex); 
        expect(objectResult).to.eql(expectedObjectResult);
      });
      it('test 2 : on array [5,2,10,6,20,3,5,54] will return { partitionedArray : [5,2,5,3,6,20,10,54], nextPivotIndex : 4}', () => {
        const array = [5,2,10,6,20,3,5,54];
        const expectedObjectResult = {
          partitionedArray : [5,2,5,3,6,20,10,54], 
          nextPivotIndex : 4
        };
        const startIndex = 0;
        const endIndex = 7;
        const pivotIndex = getPivotIndex(startIndex, endIndex);
        const objectResult = partition(array, pivotIndex, startIndex, endIndex);
        expect(objectResult).to.eql(expectedObjectResult);
      });
      it('test 3 : on array [5,2,5,3] will return { partitionedArray : [2,5,5,3], nextPivotIndex : 0}', () => {
        const array = [5,2,5,3];
        const expectedObjectResult = {
          partitionedArray : [2,5,5,3], 
          nextPivotIndex : 0
        };
        const startIndex = 0;
        const endIndex = 3;
        const pivotIndex = getPivotIndex(startIndex, endIndex);
        const objectResult = partition(array, pivotIndex, startIndex, endIndex);
        expect(objectResult).to.eql(expectedObjectResult);
      });
      it('test 4 : on array [5,5,3] will return { partitionedArray : [3,5,5], nextPivotIndex : 1}', () => {
        const array = [5,5,3];
        const expectedObjectResult = {
          partitionedArray : [3,5,5], 
          nextPivotIndex : 1
        };
        const startIndex = 0;
        const endIndex = 2;
        const pivotIndex = getPivotIndex(startIndex, endIndex);
        const objectResult = partition(array, pivotIndex, startIndex, endIndex);
        expect(objectResult).to.eql(expectedObjectResult);
      });
      it('test 5 : on array [20,10,54] will return { partitionedArray : [10,20,54], nextPivotIndex : 0}', () => {
        const array = [20,10,54];
        const expectedObjectResult = {
          partitionedArray : [10,20,54], 
          nextPivotIndex : 0
        };
        const startIndex = 0;
        const endIndex = 2;
        const pivotIndex = getPivotIndex(startIndex, endIndex);
        const objectResult = partition(array, pivotIndex, startIndex, endIndex);
        expect(objectResult).to.eql(expectedObjectResult);
      });
      it('test 6 : on array [100,1,25,101,3,65,32,3,3,71,43,56] will return { partitionedArray : [56,1,25,43,3,3,32,3,65,71,101,100], nextPivotIndex : 8 }', () => {
        const array = [100,1,25,101,3,65,32,3,3,71,43,56];
        const expectedObjectResult = { 
          partitionedArray : [56,1,25,43,3,3,32,3,65,71,101,100], 
          nextPivotIndex : 8 
        }
        const startIndex = 0;
        const endIndex = 11;
        const pivotIndex = getPivotIndex(startIndex, endIndex);
        const objectResult = partition(array, pivotIndex, startIndex, endIndex);
        expect(objectResult).to.eql(expectedObjectResult);
      });
      it('test 7 : on array [56,1,25,43,3,3,32,3] will return { partitionedArray : [3,1,25,32,3,3,43,56], nextPivotIndex : 6 }', () => {
        const array = [56,1,25,43,3,3,32,3];
        const expectedObjectResult = { 
          partitionedArray : [3,1,25,32,3,3,43,56], 
          nextPivotIndex : 6
        }
        const startIndex = 0;
        const endIndex = 7;
        const pivotIndex = getPivotIndex(startIndex, endIndex);
        const objectResult = partition(array, pivotIndex, startIndex, endIndex);
        expect(objectResult).to.eql(expectedObjectResult);
      });
      it('test 8 : on array [3,1,25,32,3,3] will return { partitionedArray : [3,1,3,3,25,32], nextPivotIndex : 4 }', () => {
        const array = [3,1,25,32,3,3];
        const expectedObjectResult = { 
          partitionedArray : [3,1,3,3,25,32], 
          nextPivotIndex : 4
        }
        const startIndex = 0;
        const endIndex = 5;
        const pivotIndex = getPivotIndex(startIndex, endIndex);
        const objectResult = partition(array, pivotIndex, startIndex, endIndex);
        expect(objectResult).to.eql(expectedObjectResult);
      });
      it('test 9 : on array [3,1,3,3] will return { partitionedArray : [1,3,3,3], nextPivotIndex : 0 }', () => {
        const array = [3,1,3,3];
        const expectedObjectResult = { 
          partitionedArray : [1,3,3,3], 
          nextPivotIndex : 0
        }
        const startIndex = 0;
        const endIndex = 3;
        const pivotIndex = getPivotIndex(startIndex, endIndex);
        const objectResult = partition(array, pivotIndex, startIndex, endIndex);
        expect(objectResult).to.eql(expectedObjectResult);
      });
    });
  });

  describe('quickSort function', () => {
    describe('can sort array of numbers in ascending', () => {
      it('test 1 : on array [9,8,7,6,5,4,3,2,1] will get [1,2,3,4,5,6,7,8,9]', () => {
        const array = [9,8,7,6,5,4,3,2,1];
        const expectedSortedArray = [1,2,3,4,5,6,7,8,9];
        expect(quickSort(array)).to.eql(expectedSortedArray);
      });
      it('test 2 : on array [5,2,10,6,20,3,5,54] will get [2,3,5,5,6,10,20,54]', () => {
        const array = [5,2,10,6,20,3,5,54];
        const expectedSortedArray = [2,3,5,5,6,10,20,54];
        expect(quickSort(array)).to.eql(expectedSortedArray);
      });
      it('test 3 : on array [100,1,25,101,3,65,32,3,3,71,43,56] will get [1,3,3,3,25,32,43,56,65,71,100,101]', () => {
        const array = [100,1,25,101,3,65,32,3,3,71,43,56];
        const expectedSortedArray = [1,3,3,3,25,32,43,56,65,71,100,101];
        expect(quickSort(array)).to.eql(expectedSortedArray);
      });
    });
  })
});
