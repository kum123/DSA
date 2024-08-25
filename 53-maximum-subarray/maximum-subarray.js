/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {



     let maxSum = -Infinity;
     let prev = 0;
     for(let i=0; i < nums.length;i++){
        prev = Math.max(prev+nums[i],nums[i]);
        maxSum = Math.max(maxSum,prev);
     }

     return maxSum;





















//  let prev =0;
//     let max = -Infinity;
    
//     for(let i = 0; i < nums.length;i++){
//         // Compare previous contiguous sum with current number
//             prev = Math.max(prev + nums[i],nums[i]);
//          // Check if the current prev is the greatest sum 
//             max = Math.max(max,prev);

//     }
// return max;
};