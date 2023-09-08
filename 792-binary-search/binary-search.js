/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    

             let left = 0; let right = nums.length - 1;
        
        // Under this condition
        while (left <= right) {
            // Get the middle index and the middle value.
            let mid =  Math.floor(left + (right - left) / 2); // Math.floor((left +right)/2);
            
            // Case 1, return the middle index.
            if (nums[mid] == target) {
                return mid;
            } 
            // Case 2, discard the smaller half.
            else if (nums[mid] < target) {
                left = mid + 1;   
            } 
            // Case 3, discard the larger half.
            else {
                right = mid - 1;
            }
        }
        return -1;

 

};