/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  // 先排除异常情况
  if (!nums || !target && target !== 0 || !nums.length || typeof (target) !== 'number') {
    return [];
  }
  // 循环数组，有点类似传统的深度优先
  /*    for(var i = 0, length = nums.length; i < length; i++) {
          for(var j = i + 1; j < nums.length; j++) {
              if(nums[i] + nums[j] === target) {
                  return [i, j]
              }
          }
      } */
  // 可以将内层循环转为hash索引
  // 不会增加数组转对象的时间复杂度，将循环过的数据放入对象，利用js左查询对象属性是hash查询的特性，减少内层循环的时间消耗
  var map = {};
  for (var i = 0, length = nums.length; i < length; i++) {
    if (map[target - nums[i]] !== undefined) return [map[target - nums[i]], i];
    else map[nums[i]] = i;
  }
  return [];
};