/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n == 0){
        return 0;
    }
    // this is DP approach 


    // let memorization = {};
    //     if( n <= 2){
    //         return 1;
    //     }
    // if(memorization[n]) return memorization[n];
    // let ans = fib(n-1) + fib(n-2);
    // memorization[n] = ans;
    // return memorization[n];

        if( n <= 1) return n;
        const DP = Array(n+1).fill(0);
        DP[0] = 0;
        DP[1] = 1;
        for(let i=2; i <= n;i++){
            DP[i] = DP[i-1] + DP[i-2];
        }
        return DP[n];
// this is regular for loop

    // let a = 0;
    // let b = 1;
    // for(let i=2;i<=n;i++){
    //     let temp = b;
    //     b = b + a;
    //     a = temp;

    // }
    // return b;
};