/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
    //     let N = matrix.length; let M = matrix[0].length
    //   let copyMatrix = [...matrix];
    //   function markZeros(x,y){

    //         // for(let k=i ; k < N;k++){
    //         //     matrix[k][j] = 0;
    //         // }
    //         // for(let k=i; k >=0;k--){
    //         //     matrix[k][j] = 0;
    //         // }
    //         //  for(let k=j ; k < M;k++){
    //         //     matrix[i][k] = 0;
    //         // }
    //         // for(let k=j; k >=0;k--){
    //         //     matrix[i][k] = 0;
    //         // }
    //          // update row
    //   for(var j = 0; j < matrix[0].length; j++){
    //     matrix[x][j] = 0
    //   }
      
    //   // udpate column
    //   for(var j = 0; j < matrix.length; j++){
    //     matrix[j][y] = 0
    //   }
    //   }  

    //   for(let i=0; i < N;i++){
    //     for(let j=0; j < M;j++){
    //         if(copyMatrix[i][j] == 0){
    //             markZeros(i,j);
    //         }
    //     }
    //   }    
    //   return matrix;

      var track = []
    
    // find zeros
    for(var i = 0; i < matrix.length; i++){
      for(var j = 0; j < matrix[0].length; j++){
        if(matrix[i][j] === 0) track.push([i, j])                
      }
    }

    for(var i = 0; i < track.length; i++){
      var [x, y] = track[i]
      
      // update row
      for(var j = 0; j < matrix[0].length; j++){
        matrix[x][j] = 0
      }
      
      // udpate column
      for(var j = 0; j < matrix.length; j++){
        matrix[j][y] = 0
      }

    }
};