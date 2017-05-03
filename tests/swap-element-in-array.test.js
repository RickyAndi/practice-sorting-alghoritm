const swapElementInArray = require('../src/swap-element-in-array');
const { expect } = require('chai');

describe('swapElementInArray function', () => {
  describe('can swap element in array provided by array and two indexes to be swapped', () => {
    it('test 1 : on array [1,2,3,4,5] swap index 3 and 4, and array will become [1,2,3,5,4]', () => {
      const array = [1,2,3,4,5];
      const indexA = 3;
      const indexB = 4;
      const expectedSwappedArray = [1,2,3,5,4];
      expect(swapElementInArray(array, indexA, indexB)).to.eql(expectedSwappedArray);
    });
  });  
});
