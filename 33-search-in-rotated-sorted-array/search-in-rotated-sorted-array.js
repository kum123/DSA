/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (A, B) {


   
        let low = 0;
        let high = A.length-1;
        while(low <= high){
                let mid = Math.round((low+high)/2);
                    if(A[mid] == B){
                        return mid;
                    }
                if(A[low] < A[mid]){
                    if( B >= A[low] && B < A[mid]){
                        high = mid - 1;
                    } else {
                        low = mid + 1;
                    }
                } else {
                    if( B > A[mid] && B <= A[high]){
                        low = mid + 1;
                    } else {
                        high = mid - 1;
                    }
                }
            
        }

        return -1;




























    // this approach helps to find the given B integer in any one of the part of array in easy optimized steps of operation
    // let N = A.length;
    // let low = 0; let high = N - 1;
    // while (low <= high) {
    //     let mid = Math.round((low + high) / 2);

    //     if (A[mid] == B) {
    //         return mid;
    //     }
    //     else if (A[low] < A[mid]) {
    //         // if this condition satisfying means it's located close to  left part of subarray
    //         //low to mid is sorted 
    //         if (B >= A[low] && B < A[mid]) {
    //             high = mid - 1;
    //         }
    //         else {
    //             low = mid + 1;
    //         }
    //     }
    //     else {
    //         // if this condition satisfying means it's located close to  right  part of subarray
    //         //mid to high is sorted 
    //         if (B > A[mid] && B <= A[high]) {
    //             low = mid + 1;
    //         }
    //         else {
    //             high = mid - 1;
    //         }
    //     }
    // }
    // return -1;
};