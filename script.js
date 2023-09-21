const container = document.querySelector(".container");

const createGameboard = () => {
    
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
                checkWin(gameboard, currentPlayer)
            }


        })
        container.appendChild(cell);
    }

    const checkWin = (gameboard, currentPlayer) => {
        for (let i = 0; i < winningCombo.length; i++) {
            let counter = 0;
            for (let j = 0; j < winningCombo[j].length; j++) {
                if (gameboard[winningCombo[i][j]-1] === currentPlayer.marker) {
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
    
    return {gameboard};
}
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
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7]
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




const gameboard = createGameboard();
console.log(gameboard.gameboard);
console.log(player1);