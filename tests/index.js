var assert         = require('chai').assert;
var array          = require('../index')

describe('Array-Operations', function() {
  describe('#difference()', function() {
    it('should throw type error for invalid array argument', function() {
      assert.throws(function() {
        array.difference({}, null);
      }, /Invalid argument, Please pass proper array argument/);

    });

    it('should return difference of the array for correct input', function() {
      assert.deepEqual([1, 2, 3], array.difference([1, 2, 3], [5, 6]));
      assert.deepEqual([3], array.difference([1, 2, 3], [1, 2, 4]));
    });
  })

  describe('#max()', function() {
    it('should throw type error for invalid array argument', function() {
      assert.throws(function() {
        array.max(null);
      }, /Invalid argument, Please pass proper array argument/);

    });

    it('should return max of the array for correct input', function() {
      assert.equal(3, array.max([1, 2, 3]));
      assert.isNull(array.max([]));
      assert.equal("c", array.max(["a", "b", "c"]));
    });
  })

  describe('#min()', function() {
    it('should throw type error for invalid array argument', function() {
      assert.throws(function() {
        array.min(null);
      }, /Invalid argument, Please pass proper array argument/);

    });

    it('should return min of the array for correct input', function() {
      assert.equal(1, array.min([1, 2, 3]));
      assert.isNull(array.min([]));
      assert.equal("a", array.min(["a", "b", "c"]));
    });
  })

  describe('#union()', function() {
    it('should throw type error for invalid array argument', function() {
      assert.throws(function() {
        array.union(null, {});
      }, /Invalid argument, Please pass proper array argument/);

    });

    it('should return min of the array for correct input', function() {
      assert.deepEqual([1, 2, 3], array.union([1, 2, 3], [2, 3]));
      assert.deepEqual([], array.union([], []));
      assert.deepEqual([1, 2, 3, 4], array.union([1, 2, 3], [4]));
    });
  })

  describe('#removeDuplicates()', function() {
    it('should throw type error for invalid array argument', function() {
      assert.throws(function() {
        array.removeDuplicates({});
      }, /Invalid argument, Please pass proper array argument/);

    });

    it('should return removeDuplicates of the array for correct input', function() {
      assert.deepEqual([1, 2, 3, 4], array.removeDuplicates([1, 2, 3, 3, 4, 4, 2, 1]));
      assert.deepEqual([], array.removeDuplicates([]));
      assert.deepEqual(["1", "2"], array.removeDuplicates(["1", "2", "2", "1"]));
    });
  })
})
