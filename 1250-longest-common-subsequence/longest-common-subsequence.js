/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
            

     let N = text1.length;
     let M = text2.length;
        
        let dp = Array(N).fill().map(()=> Array(M).fill(-1));




function findCommonSequence(i,j){
    
    if( i < 0 || j < 0 ) return 0;

        if(dp[i][j] == -1)  {
           
            if(text1[i] == text2[j]){
    
                dp[i][j] = findCommonSequence(i-1,j-1) + 1;
            } else 
            {
                    let a = findCommonSequence(i-1,j);
                    let b = findCommonSequence(i,j-1);
                    dp[i][j]  =  Math.max(a,b);
                
            }
        }
return dp[i][j];

}




return findCommonSequence(N-1,M-1)








            
};