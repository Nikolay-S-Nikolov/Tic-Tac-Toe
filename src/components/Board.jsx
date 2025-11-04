import { useState } from "react";
import Square from "./Square.jsx";
import Status from "./Status.jsx";
import RestartButton from "./RestartButton.jsx";

export default function Board({ xIsNext, squareValues, onPlay, onRestartHandler }) {

    const onClickHandler = (index) => {
        if (squareValues[index] || showWinner(squareValues)) return;

        const oldsquareValues = squareValues.slice();

        oldsquareValues[index] = xIsNext ? 'X' : 'O';
        onPlay(oldsquareValues);
    };

    const winner = showWinner(squareValues);
    const gameOwer = squareValues.every(v => v ? true : false);
    const gameStatus = winner ? `Winner is ${winner}`
        : gameOwer ? 'Game over no winner'
            : `Next is ${xIsNext ? 'X' : 'O'}`;

    return (
        <div className="board-container">
            <Status value={gameStatus} />
            <div className="board">
                {squareValues.map((v, i) => <Square
                    key={i}
                    onSquareClickHandler={() => onClickHandler(i)}
                    value={v}
                />)
                }
            </div>
            <RestartButton endGame={(!gameOwer && !winner)} restartHendler={onRestartHandler} />
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