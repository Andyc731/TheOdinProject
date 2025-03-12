
function shortestPath(graph, start, target) {
    const queue = [];
    const visited = [];

    queue.push({ position: start, path: [start] });
    visited.push(start.toString());

    while (queue.length) {
        const { position, path } = queue.shift();
    
        if (position.toString() === target.toString()) {
            return path;
        }
        for (const neighbor of graph[position.toString()]) {
            const neighborString = neighbor.toString();
            if (!visited.includes(neighborString)) {
                visited.push(neighborString);
                console.log(path);
                queue.push({ position: neighbor, path: path.concat(neighbor) });
            }
        }
    }

    return null;
}
  


function buildBoard(length) {
    const chessboardGraph = {};
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            const key = `${i}, ${j}`
            chessboardGraph[key] = possibleMovesArray(i, j);
        }
    }
    return chessboardGraph;
}

//   console.log(buildBoard(8));
  

function possibleMovesArray(i, j) {
    const array = [[i + 1, j + 2], [i + 1, j - 2], [i - 1, j + 2], [i - 1, j - 2], [i + 2, j + 1], [i + 2, j - 1], [i - 2, j + 1], [i - 2, j - 1]];
    const possibleMoves = [];

    array.forEach(position => {
        if (isValidPosition(position[0], position[1])) {
            possibleMoves.push(`${position[0]}, ${position[1]}`);
        }
    })

    return possibleMoves;
}

function isValidPosition(x, y) {
    const BOARDLENGTH = 8;
    return x >= 0 && x < BOARDLENGTH && y >= 0 && y < BOARDLENGTH;
}
  
const start = '3, 3';
const target = '-1, 3';
const path = shortestPath(buildBoard(8), start, target);

if (path) {
    console.log('Shortest path:', path);
} else {
    console.log('No path found.');
}
  