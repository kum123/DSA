/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
//    let i=0;
     
//     for (let j=1; j < nums.length;j++){
    
//         if(nums[i] === nums[j]){

//                  nums.splice(j,1);
//                   j--;
//             }
//         else{
//                 i++;
//             }
//     }

     if (nums.length === 0) {
        return 0;
    }

    let k = 1; // Initialize the count of unique elements to 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i]; // Overwrite the next unique element
            k++;
        }
    }

    return k;
   
 
};