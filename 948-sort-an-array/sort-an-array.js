/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    
            function merge(A,B){

                    let N = A.length;
                    let M = B.length;
                    let i = 0; let j = 0;
                    let ans = [];
                    while( i < N && j < M){
                        if(A[i] < B[j]){
                            ans.push(A[i]);
                            i++;
                        } else {
                             ans.push(B[j]);
                            j++;
                        }
                    }
                    while (i < N){
                        ans.push(A[i]);
                        i++;
                    }
                      while (j < M){
                        ans.push(B[j]);
                        j++;
                    }
                    return ans;
            }



    function mergeSort(arrItems,low,high){
                if(low == high){
                    let arr = [];
                    arr[0] = arrItems[low];
                    return arr;
                }
                let ans = [];
                let mid = Math.floor((low+high)/2);
                let A = mergeSort(arrItems,low,mid);
                let B = mergeSort(arrItems,mid+1,high);
                ans = merge(A,B);
                return ans;
    }
    return mergeSort(nums,0,nums.length-1);    

};