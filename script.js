const player = (marker) => {
    return {marker};
}
const createGameboard = (() => {
    const container = document.querySelector(".container");
    const winDialog = document.getElementById("winDialog");
    const drawDialog = document.getElementById("drawDialog");
    const resetButtons = document.querySelectorAll(".reset");
    
    const player1 = player("X");
    const player2 = player("O");

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

    gameboard.forEach((part, index, board) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
        
        cell.addEventListener("click", () => {
            if (cell.textContent === "") {
                const currentPlayer = playerTurn ? player1 : player2;
                playerTurn = !playerTurn;

                cell.textContent = currentPlayer.marker;
                board[index] = currentPlayer.marker;
                
                if (checkWin(gameboard, currentPlayer)) {
                    endGame();
                } else if(checkFull()) {
                    isDraw();
                }
            }
            
            
        })
    })
    
    let playerTurn = true;

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
        return winningCombo.some((combo) => {
            return combo.every((index) => {
                return gameboard[index] === currentPlayer.marker
            })
        })
    }
    
    return {gameboard, reset};
})();                      
                        
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