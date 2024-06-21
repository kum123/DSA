/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    

     
let size = intervals.length;
let index = 0;
let result = [];

// it will check end time of array intervalswith newInterval start time and move the intervals which are lesser than new intervals
while(index < size && intervals[index][1] < newInterval[0]){

    result.push(intervals[index]);
   index++;
}
// it will check start time which are lesser than equal to newInterval end time and merge with the minimum nums to make sure ascending order
while(index < size && intervals[index][0] <= newInterval[1]){

        newInterval[0] = Math.min(intervals[index][0],newInterval[0]);
        newInterval[1] = Math.max(intervals[index][1],newInterval[1]);
 index++;
}
result.push(newInterval);

while(index < size){
    result.push(intervals[index])
index++;
}

return result;



























//          let size = intervals.length;
//     let index = 0;
//     let res = [];
//     // which are smaller than newInterval start time those will move first
//     while(index < size && intervals[index][1] < newInterval[0]) {
//         res.push(intervals[index]);
//         index++;
//     }
// // which are smaller than newInterval end time those will move first
//     while(index < size && intervals[index][0] <= newInterval[1]) {
//         // here assiging min item to make sure numbers should be in ascending order
//         newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
//         newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
//         index++;
//     }
//     res.push(newInterval);
//     while(index < size) {
//         res.push(intervals[index]);
//         index++;
//     }
//     return res;
};