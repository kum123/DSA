/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    





            let prefix = [];
            let suffix = [];
            prefix[0] = height[0];
             let maxUnits = 0;
            let N = height.length;
            for(let i=1; i < N ;i++){
                prefix[i] = Math.max(prefix[i-1],height[i]);
            }
            suffix[N-1] = height[N-1];
             for(let i=N-2; i >= 0 ;i--) {
                suffix[i] = Math.max(suffix[i+1],height[i]);
            }

            for(let i=1; i < N;i++){
                
                let units = Math.min(prefix[i],suffix[i]) - height[i];

                    if(units > 0){
                        maxUnits += units; 
                    }
            }

          return maxUnits;
            

































      /*the questions is about how much units of water can trap between building with respective building height
        we can take help of prefix sum to find answer
        
  Basically prefix and suffix helps to get the max building heights left and right sides and these heights helps later to calculate maximum water units can be stored between the buildings 

         */
        // let prefixMax = [];
        // let suffixMax = [];
        // let N = height.length;
        // let maxUnits = 0;
        // prefixMax[0] = height[0];
        // for(let i=1; i < N;i++){
        //     prefixMax[i] = Math.max(prefixMax[i-1],height[i]);
        // }
        // suffixMax[N-1] = height[N-1];
        //  for(let i=N-2; i >= 0;i--){
        //     suffixMax [i] = Math.max(suffixMax[i+1],height[i]);
        // }
        // we need to ignore first building so starting from 1
       // for(let i=1 ; i < N;i++){
                /* Here we will take out min height between these left and right building and substract the 
                current building height because those many height we can not store water  */
//               let units = Math.min(prefixMax[i],suffixMax[i]) - height[i]; 
//                 if( units > 0){
//                 maxUnits += units;
//                     }
//             }
        
//         return maxUnits;
};