/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

        if(nums.length <= 2) return nums.length;


            let k = 2;

            for(let i=2; i < nums.length;i++){
                if(nums[i] != nums[k-1] || nums[i] != nums[k-2]){
                    nums[k] = nums[i];
                    k++;
                }
            }
        return k;
















    //                    // Special case...
    // if(nums.length <= 2) {
    //     return nums.length;
    // }
    // // Initialize an integer k that updates the kth index of the array...
    // // only when the current element does not match either of the two previous indexes...
    // let k = 2;
    // // Traverse elements through loop...
    // for(let i = 2; i < nums.length; i++){
    //     // If the index does not match the (k-1)th and (k-2)th elements, count that element...
    //     if(nums[i] != nums[k - 2] || nums[i] != nums[k - 1]){
    //         nums[k] = nums[i];
    //         k++;
    //     // If the index matches the (k-1)th and (k-2)th elements, we skip it...
    //     }
    // }
    // return k;       //Return k after placing the final result in the first k slots of nums...
};