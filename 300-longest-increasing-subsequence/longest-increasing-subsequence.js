/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    


      

















        let N = nums.length;
        let DP = Array(N).fill(1);

        for(let i=1;i < N;i++){

            for(let j=0;j < i;j++){
           // console.log("i",i,"DP[i]",DP[i],"j",j,"DP[j]",DP[j]);
                if(nums[i] > nums[j]){
                DP[i] = Math.max(DP[i],DP[j]+1);
                }
            }
        }

        return Math.max(...DP);
};