/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    
    //let row = 0; let col = 0; let N = matrix[0].length;

    //let ans = [];
    // while( N > 1 ) {

    //     for(let i=0; i < N;i++){
    //         console.log(col,N);
    //         ans.push(matrix[row][col]);
    //         col++;
    //     }
    //     console.log(ans);
    //     for(let j=1; j <= N-1;j++){
    //         //console.log(ans);
    //         ans.push(matrix[row][col]);
    //         row++;
    //     }
    //      console.log(ans);
    //      for(let i=1; i <= N-1;i++){
    //         ans.push(matrix[row][col]);
    //         col--;
    //     }
    //      for(let j=1; j <= N-1;j++){
    //         ans.push(matrix[row][col]);
    //         row--;
    //     }
    //     row++;
    //     col++;
    //     N = N-2;

    // }
    // if(N==1) ans.push(matrix[row][col]);
    // return ans;
  let r = matrix.length, c=matrix[0].length;
    let [left, right, top, bottom] = [0, c-1, 0, r-1];

    let arr = [];

    while(left<=right && top <= bottom){
        for(let i=left; i<=right; i++) arr.push(matrix[top][i])
        top++;


        for(let i=top; i<=bottom; i++) arr.push(matrix[i][right])
        right--;


        if(top<=bottom){               // condition 1
            for(let i=right; i>=left; i--) arr.push(matrix[bottom][i])
            bottom--;
        }
      

        if(left<=right){               // condition 2
            for(let i=bottom; i>=top; i--) arr.push(matrix[i][left])
            left++;
        }
      
        

    }


    return arr

};