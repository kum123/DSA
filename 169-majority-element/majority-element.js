/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    


let max = 0;
let majorElement;
let map = new Map();
let hashMap = new Map();
    for(let i=0; i < nums.length;i++){
        let val =0;
        if(hashMap.has(nums[i])){
            val = hashMap.get(nums[i]);
        }
       
        hashMap.set(nums[i],val+1);
         if(hashMap.get(nums[i]) > max){
                max = hashMap.get(nums[i]);
                majorElement = nums[i];

            }
    }

        return majorElement;


};