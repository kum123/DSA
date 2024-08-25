/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {



        let maxSumSub = -Infinity;
        let prev = 0;
        for(let i=0; i < nums.length;i++){
           prev = Math.max(prev+nums[i],nums[i]);
            maxSumSub = Math.max(maxSumSub,prev);
        }
        return maxSumSub;





















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