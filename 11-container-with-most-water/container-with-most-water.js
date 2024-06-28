/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    

let i=0; let j = height.length-1;
    let maxContainer = -Infinity;
        while (i < j){

                let val = Math.min(height[i],height[j]) * (j-i);
                if(val > maxContainer){
                    maxContainer = val;
                }
                if(height[i] < height[j]){
                    i++;
                } else {
                    j--;
                }

        }

        return maxContainer;

















//         let i = 0; let j = height.length-1;
//         let ans = 0;    
//         while( i < j){
                
//             let temp = Math.min(height[i],height[j]) * (j-i);
//             if(temp > ans){
//                 ans = temp;
//             }
//             if(height[i] < height[j]){

//                 i++;
//             }else{
        
//             j--;
//             }

//         }

// return ans;
};