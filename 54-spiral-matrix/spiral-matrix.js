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
let ans = [];
    let R = matrix.length, C=matrix[0].length;
  let l = 0,
    r = C - 1;
  let t = 0,
    b = R - 1;

  // top row of remainig rows
  while (l <= r && t <= b) {
    for (let i = l; i <= r; i++) {
      ans.push(matrix[t][i]);
    }
    t++;

    // left col of remaining cols
    for (let i = t; i <= b; i++) {
      ans.push(matrix[i][r]);
    }
    r--;

    // bottom row of remainig rows
    for (let i = r; i >= l && t<=b; i--) {
      ans.push(matrix[b][i]);
    }
    b--;
 

    // left col of remainig cols
    for (let i = b; i >= t && l<=r; i--) {
      ans.push(matrix[i][l]);
    }
    l++;

  }

  return ans;
};