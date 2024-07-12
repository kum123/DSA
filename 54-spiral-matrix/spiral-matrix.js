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
  let rowLength = matrix.length, colLength=matrix[0].length;
    let [col, colSize, row, rowSize] = [0, colLength-1, 0, rowLength-1];

    let arr = [];

    while(col<=colSize && row <= rowSize){
        for(let i=col; i<=colSize; i++) arr.push(matrix[row][i])
        row++;


        for(let i=row; i<=rowSize; i++) arr.push(matrix[i][colSize])
        colSize--;


        if(row<=rowSize){               // condition 1
            for(let i=colSize; i>=col; i--) arr.push(matrix[rowSize][i])
            rowSize--;
        }
      

        if(col<=colSize){               // condition 2
            for(let i=rowSize; i>=row; i--) arr.push(matrix[i][col])
            col++;
        }
      
        

    }


    return arr

};