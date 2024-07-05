/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {



                if(nums.length < 2) return nums[0]; 
                // create array to store the maximum till that index
                let DP = Array(nums.length).fill(0);

                // memorize maximum loot at first two indexes
                //here we storing for zero index array value to check this value with different comdinations
                DP[0] = nums[0];
                DP[1] = Math.max(nums[0],nums[1])

                for(let i=2; i < nums.length;i++){
                    // it will compare which one is max item by doing sum with current array item (nums[i] + DP[i-2]) with already stored max item at DP[i-1];
                    DP[i] = Math.max(DP[i-2] + nums[i],DP[i-1]);
                }

          return DP[nums.length-1];















           /* Approach
1.Use two variables, rob and norob, to keep track of the maximum amount of money robbed with or without robbing the current house.
2.Iterate through each house, and at each step, calculate the maximum amount of money if the current house is robbed (newRob) and if it is not robbed (newNoRob).
3.Update rob and norob for the next iteration.
The final result is the maximum amount between the two scenarios: robbing the last house or not robbing it. */
        //   let rob =0;
        //   let noRob = 0;
        //   for(let i=0; i < nums.length;i++){
        //        let newRob = noRob + nums[i];
        //        let newNoRob = Math.max(rob,noRob);
        //        rob = newRob;
        //        noRob = newNoRob;
        //   }

        //   return Math.max(rob,noRob);
};