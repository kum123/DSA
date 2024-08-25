/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    

    const isPolindrome = function(str,left,right){
        let count = 0;
        while( left >= 0 && right < str.length && str.charAt(left) === str.charAt(right)){
            left--;
            right++;
            count++;
        }
        return count;
    }

        let ans = 0;
    for(let i=0; i < s.length;i++){
        let even = isPolindrome(s,i,i+1);
        let odd = isPolindrome(s,i-1,i+1);
        ans += odd + even + 1;
    }
    return ans;



};