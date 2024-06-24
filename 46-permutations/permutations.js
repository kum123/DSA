/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
      const result = [];
    const backtrack = (nums, path) => {
        if (nums.length === 0) {
            result.push(path);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            backtrack([...nums.slice(0, i), ...nums.slice(i + 1)], [...path, nums[i]]);
        }
    };
    backtrack(nums, []);
    return result;

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