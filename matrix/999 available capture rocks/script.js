/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let capture = 0;
    let row = board.length;
    let col = board[0].length;

    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(board[i][j] === 'R'){
                // check upwards
                for(let k=i-1; k>=0; k--){
                    if(board[k][j] === 'B'){
                        break;
                    }
                    if(board[k][j] === 'p'){
                        capture++;
                        break;
                    }
                }
                // check downwards
                for(let k=i+1; k<row; k++){
                    if(board[k][j] === 'B'){
                        break;
                    }
                    if(board[k][j] === 'p'){
                        capture++;
                        break;
                    }
                }
                // check left
                for(let k=j-1; k>=0; k--){
                    if(board[i][k] === 'B'){
                        break;
                    }
                    if(board[i][k] === 'p'){
                        capture++;
                        break;
                    }
                }
                // check right
                for(let k=j+1; k<col; k++){
                    if(board[i][k] === 'B'){
                        break;
                    }
                    if(board[i][k] === 'p'){
                        capture++; 
                        break;
                    }
            }   
        }
    } 
}
    return capture;
};

let board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]];

console.log(numRookCaptures(board)); //