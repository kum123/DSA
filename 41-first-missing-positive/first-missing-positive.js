/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // const swap = (arr, i, j) => {
    //     [arr[i], arr[j]] = [arr[j], arr[i]];
    // };
    
    // const n = nums.length;
    
    // // Place each positive integer i at index i-1 if possible
    // for (let i = 0; i < n; i++) {
    //     while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
    //         console.log("nums[i]",nums[i]," nums[nums[i] - 1]", nums[nums[i] - 1])
    //         swap(nums, i, nums[i] - 1);
    //     }
    // }
    
    // // Find the first missing positive integer
    // for (let i = 0; i < n; i++) {
    //     if (nums[i] !== i + 1) {
    //         return i + 1;
    //     }
    // }
    
    // // If all positive integers from 1 to n are present, return n + 1
    // return n + 1;
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], 1);
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!m.has(i)) return i;
    }
    return nums.length + 1;
};