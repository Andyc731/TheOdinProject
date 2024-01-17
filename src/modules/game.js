import { Ship, Gameboard, Player } from './battleship';

async function gameLoop(player, computer) {
    const alignmentButton = document.getElementById('alignment-button');
    let isHorizontal = false;
    let alignment = 'horizontal';

    alignmentButton.addEventListener('click', () => {
        isHorizontal ? alignment = 'horizontal' : alignment = 'vertical';
        isHorizontal = !isHorizontal;
        console.log(alignment);
    })

    const shipSizes = [2, 3, 3, 4, 5]
    while (player.playerBoard.shipsAlive < shipSizes.length) {
        const shipSize = shipSizes[player.playerBoard.shipsAlive];

        let place;
        do {
        place = await playerPlaceShip();
        } while (!player.playerBoard.canPlace(place.x, place.y, alignment, Ship(shipSize)));
        console.log(place);
        player.playerBoard.placeShip(place.x, place.y, alignment, Ship(shipSize));
        displayBoards(player, computer);
    }


    let turnToggle = true;
    while (!player.playerBoard.allShipsSunk() && !computer.playerBoard.allShipsSunk()) {
        if (turnToggle) {
            const attackCoord = await playerTurn();
            if (!computer.playerBoard.playedBoard[attackCoord.y][attackCoord.x]) {
                player.attack(computer.playerBoard, attackCoord.x, attackCoord.y);
                turnToggle = !turnToggle;
            }
        } else {
            const coordinates = computer.randomCoord(player.playerBoard);
            computer.attack(player.playerBoard, coordinates.x, coordinates.y)
            turnToggle = !turnToggle;
        }
        displayBoards(player, computer);
    }
}

function playerPlaceShip() {
    return new Promise(resolve => {
        const playerCells = document.querySelectorAll('.container.player .cell');

        function playerMoveHandler(event) {
            
            const clickedCell = event.target;
            const xInput = Number(clickedCell.dataset.x);
            const yInput = Number(clickedCell.dataset.y);

            playerCells.forEach(cellDiv => {
                cellDiv.removeEventListener('click', playerMoveHandler);
            });

            resolve({ x: xInput, y: yInput });
        }

        playerCells.forEach(cellDiv => {
            cellDiv.addEventListener('click', playerMoveHandler);
        });
    })
}

function playerTurn() {
    return new Promise(resolve=> {
        const computerCells = document.querySelectorAll('.container.computer .cell');

        function playerMoveHandler(event) {
            
            const clickedCell = event.target;
            const xInput = Number(clickedCell.dataset.x);
            const yInput = Number(clickedCell.dataset.y);

            computerCells.forEach(cellDiv => {
                cellDiv.removeEventListener('click', playerMoveHandler);
            });

            resolve({ x: xInput, y: yInput });
        }

        computerCells.forEach(cellDiv => {
            cellDiv.addEventListener('click', playerMoveHandler);
        });
    })
}



function displayBoards(player, computer) {
    const BOARD_LENGTH = 10;

    function updateCell(board, selector, className, i, j) {
        if (board[i][j]) {
            const cellDiv = document.querySelector(`${selector} [data-x="${j}"][data-y="${i}"]`);
            cellDiv.classList.add(className);
        }
    }

    for (let i = 0; i < BOARD_LENGTH; i++) {
        for (let j = 0; j < BOARD_LENGTH; j++) {
            updateCell(computer.playerBoard.playedBoard, '.computer', 'played', i, j);
            updateCell(player.playerBoard.playedBoard, '.player', 'played', i, j);
            updateCell(player.playerBoard.board, '.player', 'ship', i, j);
        }
    }
}

export default gameLoop;