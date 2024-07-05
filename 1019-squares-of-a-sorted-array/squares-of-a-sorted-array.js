/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    

            let result = Array(nums.length).fill(0);

            for(let i=0; i < nums.length;i++){
                nums[i] = nums[i] * nums[i];
            }

            let head = 0;
            let tail = nums.length-1;
            for(let pos = nums.length-1; pos >= 0 ; pos--){

                if(nums[head] > nums[tail]){
                    result[pos] =nums[head];
                    head++;
                } else {
                    result[pos] = nums[tail];
                    tail--;
                }
            }
            return result;
};