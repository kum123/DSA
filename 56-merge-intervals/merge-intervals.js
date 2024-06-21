/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

 if (!intervals.length) return intervals
   intervals.sort((a, b) => a[0] - b[0])
   const result = [intervals[0]];
    
    for(let [start, end] of intervals) {
        const endPrev = result.at(-1)[1]
        if(start <= endPrev) result.at(-1)[1] = Math.max(end, endPrev);
        else result.push([start, end]);
    }
    return result;
            
//          let newIntervals = [];
//             for(let i=1; i < intervals.length;i++){
                    
//                 if(intervals[i-1][1] <= intervals[i][0]){
                        
//                        let start = Math.min(intervals[i-1][0], intervals[i][0]);
//                        let end = Math.max(intervals[i-1][1],intervals[i][1]);
//                        newIntervals.push([start,end]);
//                     } else {
//                      newIntervals.push(intervals[i]);
//                 }
                
//             }

//             return newIntervals;
    
};