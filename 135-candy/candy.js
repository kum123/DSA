/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    
    let N = ratings.length;
    let candies = Array(N).fill(1);
        
    for(let i=1; i < N;i++){
        if(ratings[i] > ratings[i-1]){
           
        candies[i] =  candies[i-1] + 1;
        }
    }
    for(let j = N-2; j >= 0 ;j--){
        if(ratings[j] > ratings[j+1]){
            candies[j] = Math.max(candies[j], candies[j+1]+1);
        }
    }
        
    return candies.reduce((acc,cur) => acc + cur);
};