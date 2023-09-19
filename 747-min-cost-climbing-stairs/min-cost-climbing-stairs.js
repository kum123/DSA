/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
            let N = cost.length;
            let DP = Array(N).fill(-1); 
        function findMinCost(i){
                if( i >= N) return 0;
            if(DP[i] != -1) return DP[i];
            let a = findMinCost(i+1) + cost[i];
            let b = findMinCost(i+2) + cost[i];
            let ans = Math.min(a,b);
            DP[i] = ans;
            return ans;
        }
        let min = Math.min(findMinCost(0),findMinCost(1));

    return min;

};