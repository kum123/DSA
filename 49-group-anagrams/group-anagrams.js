/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

              
                            if(strs.length == 1) return [strs];
                            let obj = {};
                            for(let i=0; i < strs.length;i++){
                                let eachItem = strs[i].split('').sort().join('');
                                obj[eachItem] ? obj[eachItem].push(strs[i]) : obj[eachItem] = [strs[i]];
                            }

                            return Object.values(obj);
};