/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
//  const map = {};

//   for (let i = 0; i < nums.length; i++) {
//     const another = target - nums[i];

//     if (another in map) {
//       return [map[another], i];
//     }

//     map[nums[i]] = i;
//   }

//   return null;




    let hashMap=new Map();
    for(let i=0; i < nums.length;i++){
        if(hashMap[nums[i]] >= 0){
        return [hashMap[nums[i]],i];
        }else{
        hashMap[target - nums[i]] = i;
    }
     }

  // for(let i=0; i < nums.length;i++){
  //       if(hashMap[nums[i]] >= 0){
  //       return [hashMap[nums[i]],i];
  //       }else{
  //       hashMap[target - nums[i]] = i;
  //   }
  //    }
   return null;
 };

