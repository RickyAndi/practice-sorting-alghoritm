const { insertionSort } = require('../src/insertion-sort');
const { expect } = require('chai');

describe('Insertion Sort Module', () => {
  describe('insertionSort function', () => {
    describe('can sort array in ascending way', () => {
      it('test 1 : on array [9,8,7,6,5,4,3,2,1] will get [1,2,3,4,5,6,7,8,9]', () => {
        const array = [9,8,7,6,5,4,3,2,1];
        const expectedSortedArray = [1,2,3,4,5,6,7,8,9];
        expect(insertionSort(array)).to.eql(expectedSortedArray);
      });
      it('test 2 : on array [5,2,10,6,20,3,5,54] will get [2,3,5,5,6,10,20,54]', () => {
        const array = [5,2,10,6,20,3,5,54];
        const expectedSortedArray = [2,3,5,5,6,10,20,54];
        expect(insertionSort(array)).to.eql(expectedSortedArray);
      });
      it('test 3 : on array [100,1,25,101,3,65,32,3,3,71,43,56] will get [1,3,3,3,25,32,43,56,65,71,100,101]', () => {
        const array = [100,1,25,101,3,65,32,3,3,71,43,56];
        const expectedSortedArray = [1,3,3,3,25,32,43,56,65,71,100,101];
        expect(insertionSort(array)).to.eql(expectedSortedArray);
      });
    })
  });
});
