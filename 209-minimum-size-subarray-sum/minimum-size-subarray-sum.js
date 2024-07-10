/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    



                let start = 0;
                let end = 0;
                let minWindow = Infinity;
                // the reason adding the nums[0] the first item or individual array itself may match to target
                let sumArray = nums[0];

                while( start <= end && end < nums.length ){
                    if(sumArray >= target){
                        minWindow = Math.min(minWindow,end-start+1);
                        sumArray -= nums[start];
                        start++;
                    } else {
                         end++;
                        sumArray += nums[end];
                       
                    }
                }


return minWindow == Infinity ? 0 : minWindow ;

























//                 // initialize the start and end of the window from starting point
// 	let start = 0;
//     let end = 0;
// // consider the minValue to be infinity,
// // just to define the variable 
//     let minValue = Infinity;
// // sum of subarray initialized to initial array value
//     let subarraySum = nums[0];

// // slide the window upto array length
// // start of the window always be less than or may be equal to end
//     while(start <= end && end < nums.length){
//     // if sum satisfies the condition
//         if(subarraySum >= target){
//         // extract the minimum subarray length
//         // end-start+1 => end >= start (always greater or equal)
//         // when end === start, then end - start === 0
//         // but window stays atleast on one element (+1) of array 
//             minValue = Math.min(minValue, end-start+1);
//         // move the start of window by one element
//         // and remove last start element from sub array sum
        
//             subarraySum -= nums[start];
//             start++;
//         } else {
//     // if sum didn't satisfies the condition, drag the window end
//     // till the sum >= target
//             end++;
//             subarraySum += nums[end];
//         }
//     }
//     // return 0, as no subarray satisfies the given condition
//     return minValue === Infinity ? 0 : minValue;
};