/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    
       let N = costs.length/2;
       let refund = [];
       let minCost = 0;
       let index = 0;
       for(let cost of costs){
            refund[index++] = cost[1] - cost[0];
            minCost += cost[0];
       }
       refund.sort((a,b)=> a - b);
       for(let i=0; i< N;i++){
            minCost += refund[i];
       }
       return minCost;

};