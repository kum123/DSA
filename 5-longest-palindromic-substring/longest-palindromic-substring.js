/**
 * @param {string} s
 * @return {string}
 */
/**
 The best approach is this one by incrementing both left and right to compare
 and time complexity o(n2)
 */


var longestPalindrome = function(str) {
    

 var max = '';
  for (var i = 0; i < str.length; i++) {
    // this loop is to take into account 
    // different palindromes like 'aba' and 'abba'
    for (var j = 0; j < 2; j++) {
      var left = i;
      var right = i + j;
      while (str[left] && str[left] === str[right]) {
        left--;
        right++;
      }
      // here imagine we get into string like
      // "sabbad", then
      // right = 5
      // left = 0
      // and actual length of "abba" should be "4"
      // 5 - 0 - 1 === 4
      if ((right - left - 1) > max.length) {
        max = str.substring(left + 1, right);
      }
        
    }
  }
  return max;

















//     if(str.length < 1 || str === null) return '';
//     let longest = '';

//     for(let i = 0; i < str.length; i++) {
                    
               
//                 let oddPolindrom = expandFromCenter(str,i-1,i+1);
//                 let evenPolindrom = expandFromCenter(str,i-1,i);
//                 if(oddPolindrom.length > longest.length){
//                     longest = oddPolindrom;
//                 }
//                 if(evenPolindrom.length > longest.length){
//                     longest = evenPolindrom;
//                 }
                
//         }
// return longest;
   
};


expandFromCenter=(str,left,right)=>{

        let i = 0;
    while(str[left - i] && str[left - i] === str[right + i]){

        i++;
    }
    i--;
return str.slice(left - i, right + i + 1)
}


