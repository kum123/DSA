/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {






let hashSet = new Set();

let S =0; E=0; N = s.length;
let ans = 0;
while( E < N){

    if(!hashSet.has(s.charAt(E))){
        hashSet.add(s.charAt(E));
        E++;
    } else {
        hashSet.delete(s.charAt(S));
        S++;
    }
ans = Math.max(ans,hashSet.size);




}

return ans;






    /*
        the longest substring without repeating characters means
        the charcat




*/
// let map = {};
// let maxLen = 0;
// let start = 0;
//  for(let end = 0 ; end < s.length ; end++){
//         let lastChar = s[end];
//      //checking exist(do increment) or not (assign 0)
//      if(map[lastChar] == undefined)
//         {
//           map[lastChar] = 0;
//         }
//          map[lastChar] += 1;
//      // checking duplicates and decrementing
//         while(map[lastChar] > 1)
//         {
//              let firstChar = s[start];
//             map[firstChar] -= 1;
//             start += 1;
//          }
//         // if start index is not incrementing means their is no duplicates. so end - start means those duplicates removing and because loop begin with index zero we are adding  with + 1 to length of longest substring
//          maxLen = Math.max(maxLen, end - start + 1);
//     }
//     return maxLen;
    
     
};