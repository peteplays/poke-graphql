import { assert } from 'chai';

import { getMean, getMedian, getMode } from './calc';

const { equal } = assert;

describe('Calc', () => {
  describe('getMean', () => {
    it('should return a int or float', () => {
      equal(4, getMean([2, 4, 6]));
      equal(29.25, getMean([10, 15, 59, 33]));
    });
  });

  describe('getMedian', () => {
    describe('pass in an odd amount of vals', () => {
      it('should return a single number', () => {
        equal('4', getMedian([1, 4, 4, 5, 6]));
        equal('23', getMedian([34, 10, 22, 58, 50, 10, 23]));
      });
    });
    describe('pass in an even amount of vals', () => {
      it('should return a `number - number`', () => {
        equal('25 - 33', getMedian([33, 25, 4, 35, 25, 65]));
        equal('16 - 64', getMedian([89, 13, 4, 10, 80, 64, 16, 75]));
      });
      it('should return a single number if both middle numbers are the same', () => {
        equal('4', getMedian([4, 1, 4, 6]));
        equal('22', getMedian([33, 22, 1, 34, 22, 22]));
      });
    });
  });

  describe('getMode', () => {
    describe('pass in an odd amount of vals', () => {
      it('should return a string single number', () => {
        equal('4', getMode([6, 4, 2, 4, 4]));
        equal('5', getMode([5, 22, 4, 5, 44]));
        equal('10', getMode([34, 10, 22, 58, 50, 10, 23]));
      });
    })
    describe('pass in an even amount of vals', () => {
      it('should return a string comma delimited in ascending order', () => {
        equal('4, 5', getMode([2, 4, 4, 5, 5, 6]));
        equal('15, 33, 55', getMode([4, 15, 15, 55, 55, 33, 33, 85]));
        equal('22, 33', getMode([33, 22, 1, 33, 22, 23]));
      });
    });
  });
});
