/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
        let count = 0; let i =0;
    while(count != s.length && i < t.length){
        if(s[count] == t[i]){
            count++;
            i++;
        } else {
            i++;
        }
    }
    return count == s.length ? true : false;
};