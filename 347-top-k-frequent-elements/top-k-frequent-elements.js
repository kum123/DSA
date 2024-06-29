/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
                // in normal object hashMap mean example hashMap = {} we can not store negative number as key
            // let hashMap = new Map();
            //     for(let i=0; i < nums.length;i++){
            //          let val = 0;
            //         if(hashMap.has(nums[i])){
            //            val = hashMap.get(nums[i]);
            //         } 
            //     hashMap.set(nums[i], val+1);
            //     }
              
            //     let result = [];
            //      console.log(hashMap)
            //     for(let [key,val] of hashMap){
            //         // console.log(key,hashMap[key])
            //             if(val >= k){
            //                 result.push(key);
            //             }
            //     }
            //     return result.length > 0 ? result : [];

                 let result = []
    let numbers = {}
    for(let i = 0; i < nums.length; i++) {
        if(numbers[nums[i]]) {
            numbers[nums[i]]++
        } else {
            numbers[nums[i]] = 1
        }
    }
    let array = Object.entries(numbers).sort((a,b) => {
        return a[1] - b[1]
    })
    while(result.length != k) {
        let curr = array.pop()
        result.push(curr[0])
    }
    return result
};