/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(N) {
    
    // to reach till stairs upto maximum two ways ways (0->1-2)/(0->2 direct jump) 2 
   
    // DP approach 
    //let memorization = {};
    //function ways(N){
    //      if( N == 1 || N == 2 ){
    //     return N;
    // }
    // if(memorization[N]) return memorization[N];
    // let ans = ways(N-1) + ways(N-2);
    // memorization[N] = ans;
    // return memorization[N];
    // }
    // return ways(N);

    //      if( N == 1 || N == 2 ){
    //     return N;
    // }
    // let stairs = Array(N+1).fill();
    // stairs[0] = 1;
    // stairs[1] = 1;
    // for(let i=2; i <=N ;i++){
         

    //     stairs[i] = stairs[i-1] + stairs[i-2];
    // }
    // return stairs[N];
    if(N == 1 || N == 2) return N;
    let dp = new Array(N+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for(let i=2; i <= N;i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[N];

};