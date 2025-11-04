import { useState } from "react";
import Square from "./Square.jsx";

export default function Board() {
    const [squareValues, setsquareValues] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const onClickHаndler = (index) => {
        if (squareValues[index] || showWinner(squareValues)) return;

        const oldsquareValues = squareValues.slice();

        oldsquareValues[index] = xIsNext ? 'X' : 'O';
        setsquareValues(oldsquareValues);
        setXIsNext(next => !next);

    };

    const winner = showWinner(squareValues)
    const gameStatus = winner ? `Winner is ${winner}` : `Next is ${xIsNext ? 'X' : 'O'}`;

    return (
        <div className="board-container">
            <div className="status">{gameStatus}</div>
            <div className="grid">
                {squareValues.map((v, i) => <Square
                    key={i}
                    onSquareClickHаndler={() => onClickHаndler(i)}
                    value={v}
                />)
                }
            </div>
        </div>
    );
};

function showWinner(arrayTicTac) {
    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const [a, b, c] of winCombinations) {
        if ((arrayTicTac[a] && arrayTicTac[a] == arrayTicTac[b] && arrayTicTac[a] == arrayTicTac[c])) {
            return arrayTicTac[a];
        };
    };

    return null;
}