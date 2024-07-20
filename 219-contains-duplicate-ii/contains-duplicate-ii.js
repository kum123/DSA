/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {

//      const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (i - map.get(nums[i]) <= k) {
//       return true;
//     }
//     map.set(nums[i], i);
//   }
//   return false;
  let set = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;
        set.add(nums[i]);
        if (set.size > k) set.delete(nums[i - k]);
    }
    return false;
};