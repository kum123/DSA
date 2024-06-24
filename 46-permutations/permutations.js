/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
      const permutations = [];
    
    function backtrack(start) {
        if (start === nums.length) {
            permutations.push([...nums]);
        } else {
            for (let i = start; i < nums.length; i++) {
                [nums[start], nums[i]] = [nums[i], nums[start]];
                backtrack(start + 1);
                [nums[start], nums[i]] = [nums[i], nums[start]];
            }
        }
    }
    
    backtrack(0);
    return permutations;

// let res = [];
//     dfs(nums, [], Array(nums.length).fill(false), res);
//     return res;






//     function dfs(letters, path, used, res) {
//     if (path.length == letters.length) {
//         // make a deep copy since otherwise we'd be append the same list over and over
//         res.push(Array.from(path));
//         return;
//     }
//     for (let i = 0; i < letters.length; i++) {
//         // skip used letters
//         if (used[i]) continue;
//         // add letter to permutation, mark letter as used
//         path.push(letters[i]);
//         used[i] = true;
//         dfs(letters, path, used, res);
//         // remove letter from permutation, mark letter as unused
//         path.pop();
//         used[i] = false;
//     }
// }
};