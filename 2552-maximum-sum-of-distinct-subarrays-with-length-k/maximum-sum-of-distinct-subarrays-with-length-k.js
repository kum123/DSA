/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    
                let max_sum = 0;
                let sum = 0;
                let i = 0;
                let j = 0;
                let windowSet = new Set();
               while( j < nums.length){
                if(!windowSet.has(nums[j]) && j - i + 1 < k){
                    sum += nums[j];
                    windowSet.add(nums[j]);
                    j++;
                } else if( !windowSet.has(nums[j]) && j-i+1 == k){
                        sum += nums[j];
                        max_sum = Math.max(sum,max_sum);
                        windowSet.add(nums[j]);
                         sum -= nums[i];
                        windowSet.delete(nums[i]);
                        i++;
                        j++;
                } else {
                    sum -= nums[i];
                    windowSet.delete(nums[i]);
                    i++;
                }
               }
          

        return max_sum;

                

};