const { bubbleSort, getTwoIndexesToBeSwapped } = require('../src/bubble-sort');
const { expect } = require('chai');

describe('Bubble Sort Module', () => {
  describe('getTwoIndexesToBeSwapped function', () => {
    describe('can get array with two number, which are index (which is the provided argument) and index + 1', () => {
      it('test 1 : with input 0, will get [0,1]', () => {
        const index = 0;
        const expectedArray = [0,1];
        expect(getTwoIndexesToBeSwapped(index)).to.eql(expectedArray);
      });
      it('test 2 : with input 1, will get [1,2]', () => {
        const index = 1;
        const expectedArray = [1,2];
        expect(getTwoIndexesToBeSwapped(index)).to.eql(expectedArray);
      });
      it('test 3 : with input 2, will get [2,3]', () => {
        const index = 2;
        const expectedArray = [2,3];
        expect(getTwoIndexesToBeSwapped(index)).to.eql(expectedArray);
      });
    })
  });
  describe('bubbleSort function', () => {
    describe('can sort array in ascending way', () => {
      it('test 1 : on array [9,8,7,6,5,4,3,2,1] will get [1,2,3,4,5,6,7,8,9]', () => {
        const array = [9,8,7,6,5,4,3,2,1];
        const expectedSortedArray = [1,2,3,4,5,6,7,8,9];
        expect(bubbleSort(array)).to.eql(expectedSortedArray);
      });
      it('test 2 : on array [5,2,10,6,20,3,5,54] will get [2,3,5,5,6,10,20,54]', () => {
        const array = [5,2,10,6,20,3,5,54];
        const expectedSortedArray = [2,3,5,5,6,10,20,54];
        expect(bubbleSort(array)).to.eql(expectedSortedArray);
      });
      it('test 3 : on array [100,1,25,101,3,65,32,3,3,71,43,56] will get [1,3,3,3,25,32,43,56,65,71,100,101]', () => {
        const array = [100,1,25,101,3,65,32,3,3,71,43,56];
        const expectedSortedArray = [1,3,3,3,25,32,43,56,65,71,100,101];
        expect(bubbleSort(array)).to.eql(expectedSortedArray);
      });
    })
  });
});
