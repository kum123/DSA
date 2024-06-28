/**
 * @param {string} s
 * @return {string}
 */
/**
 The best approach is this one by incrementing both left and right to compare
 and time complexity o(n2)
 */


var longestPalindrome = function(str) {
    
    if(str.length < 1 || str === null) return '';
    let longest = '';

    for(let i = 0; i < str.length; i++) {
                    
               
                let oddPolindrom = expandFromCenter(str,i-1,i+1);
                let evenPolindrom = expandFromCenter(str,i-1,i);
                if(oddPolindrom.length > longest.length){
                    longest = oddPolindrom;
                }
                if(evenPolindrom.length > longest.length){
                    longest = evenPolindrom;
                }
                
        }
return longest;
   
};


expandFromCenter=(str,left,right)=>{

        let i = 0;
    while(str[left - i] && str[left - i] === str[right + i]){

        i++;
    }
    i--;
return str.slice(left - i, right + i + 1)
}


