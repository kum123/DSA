/**
 * @param {string} s
 * @return {string}
 */
/**
 The best approach is this one by incrementing both left and right to compare
 and time complexity o(n2)
 */


var longestPalindrome = function(s) {
    

//  Brute force will be O(N)3 the best time complexity will be O(N)2
//     let longest = "";

//     for (let i = 0; i < s.length; i++) {
//         let odd = expandAroundCenter(i, i);
//         let even = expandAroundCenter(i, i + 1);

//         if (odd.length > longest.length) {
//             longest = odd;
//         }

//         if (even.length > longest.length) {
//             longest = even;
//         }
//     }

//     return longest;



//  function expandAroundCenter(left, right) {
//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             left--;
//             right++;
//         }
//         return s.substring(left + 1, right);
//     }

let longest = "";

        for(let i=0; i < s.length;i++){

            let odd = expandFromCenter(i,i);
            let even = expandFromCenter(i,i+1);

            if(odd.length > longest.length){
                    longest = odd;
            }
            if(even.length > longest.length){
                    longest = even;
            }
        }

        return longest;

function expandFromCenter(left,right){

            while(left >= 0 && right < s.length && s[left] == s[right]){
                left--;
                right++;
            }
           // console.log(left+1,right,s.substring(left+1,right))
          return  s.substring(left+1,right);
}































   
};




