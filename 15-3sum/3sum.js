/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    

    let N = nums.length;
    let triplets = [];
        nums.sort((a,b)=> a - b)
    for(let i=0; i < N-2; i++){
        if(i > 0 && nums[i] == nums[i-1]){
            continue;
        }
        let start = i + 1;
        let end = N - 1;
        while(start < end){
            let sum = nums[i] + nums[start] + nums[end];
            if(sum == 0){
                triplets.push([ nums[i],nums[start],nums[end]])
                    while(start < end && nums[start] == nums[start+1]){
                        start++;
                        }
             while(start < end && nums[end] == nums[end-1]){
                                    end--;
                    }
            start++;
            end--;
            } else if( sum < 0){
                start++;
            } else {
                end--;
            }
        }
    }
    return triplets;
};