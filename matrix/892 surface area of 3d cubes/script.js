let grid = [[8,4]];

function surfacearea3dcube(grid) {
    let area = 0;
    let rows = grid.length;
    let cols = grid[0].length;

     for(let i=0; i < rows; i++){
        for(let j=0; j < cols; j++){
            if(grid[i][j ]> 0){
                area +=2;
                area +=grid[i][j] * 4;
                console.log(area);
            //     if(i > 0){      
            //         area -= Math.min(grid[i][j], grid[i-1][j]) * 2;
            //     }
            //     if(j > 0){
            //         area -= Math.min(grid[i][j], grid[i][j-1]) * 2; 
            // }
        }
    }
  
     }
       return area;
}

console.log(surfacearea3dcube(grid)); // Output:


