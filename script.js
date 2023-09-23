const createGameboard = (() => {
    const container = document.querySelector(".container");
    const winDialog = document.getElementById("winDialog");
    const drawDialog = document.getElementById("drawDialog");
    const resetButtons = document.querySelectorAll(".reset");
    
    resetButtons.forEach((button) => {
        button.addEventListener("click", () => {
            reset();
            winDialog.close();
            drawDialog.close();
        })
    })

    const gameboard = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ]
    
    let playerTurn = true;

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        
        cell.addEventListener("click", () => {
            if (cell.textContent === "") {
                const currentPlayer = playerTurn ? player1 : player2;
                playerTurn = !playerTurn;
                cell.textContent = currentPlayer.marker;
                gameboard[i] = currentPlayer.marker;
                
                console.log(gameboard); 
                if (checkWin(gameboard, currentPlayer)) {
                    endGame();
                } else if(checkFull() && !checkWin(gameboard, currentPlayer)) {
                    isDraw();
                }
            }
            
            
        })
        container.appendChild(cell);
    }

    const checkFull = () => {
        return (gameboard.every((item) => {return item !== 0}));
    }

    const isDraw = () => {
        drawDialog.showModal();
    }
    
    const endGame = () => {
        winDialog.showModal();
    }
    
    const reset = () => {
        const cells = document.querySelectorAll(".cell");
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = "";
            gameboard[i] = 0;
        }
        playerTurn = true;
    }

    const checkWin = (gameboard, currentPlayer) => {
        for (let i = 0; i < winningCombo.length; i++) {
            let counter = 0;
            for (let j = 0; j < winningCombo[j].length; j++) {
                if (gameboard[winningCombo[i][j]] === currentPlayer.marker) {
                    counter++;
                }
            }
            if (counter === 3) {
                console.log("you win");
                return true;
            }
        }
        return false;
    }
    
    return {gameboard, reset};
})();

// for (let i = 0; i < 3; i++) {
    //     const row = document.createElement("div");
    //     row.classList.add("row");
    //     for (let j = 0; j < 3; j++) {
        //         const cell = document.createElement("div");
        //         cell.classList.add("cell");
        
        //         cell.addEventListener("click", () => {
            //             if (cell.textContent === "") {
                //                 const currentPlayer = playerTurn ? player1 : player2;
                //                 cell.textContent = currentPlayer.marker;
                //                 playerTurn = !playerTurn;
                //                 gameboard[i][j] = currentPlayer.marker;

                //                 console.log(gameboard);
                //             }
                
                //         })
                //         row.appendChild(cell);
                //     }
                //     container.appendChild(row);
                //     console.log(row);
                // }
                
                //check for winning combinations
                // for (let k = 0; k < winningCombo.length; k++) {
                    //     let count = 0;
                    //     for (let l = 0; l < winningCombo[k].length; l++){
                    //         if (gameboard[winningCombo[k][l][0]][winningCombo[k][l][1]] === currentPlayer.marker) {
                    //             count++;
                    //             console.log(count);
                    //         }
                    //     }
                    //     if(count === 3) {
                        //         console.log("you win");
                        //     }
                        // }
                        
                        
const winningCombo = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// const winningCombo = [
    //     [[0, 0], [1, 0], [2, 0]],
//     [[0, 1], [1, 1], [2, 1]],
//     [[0, 2], [1, 2], [2, 2]],
//     [[0, 0], [0, 1], [0, 2]],
//     [[1, 0], [1, 1], [1, 2]],
//     [[2, 0], [2, 1], [2, 2]],
//     [[0, 0], [1, 1], [2, 2]],
//     [[0, 2], [1, 1], [2, 0]]
// ]

const player = (player, marker) => {
    return {player, marker};
}

const player1 = player(1, "x");
const player2 = player(2, "circle");