/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
            
        const N = nums.length;        
        const totalSum = (N *(N+1)/2);
        let curSum = 0;    
        for(let i=0; i < nums.length;i++){
                curSum += nums[i];
                
        }

            return totalSum - curSum;
};