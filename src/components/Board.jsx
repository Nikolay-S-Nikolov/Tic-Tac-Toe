import Square from "./Square.jsx";
import Status from "./Status.jsx";
import RestartButton from "./RestartButton.jsx";
import { useEffect } from "react";

export default function Board({
    xIsNext,
    squareValues,
    onPlay,
    onRestartHandler,
    playerCount,
    starter
}) {

    useEffect(() => {
        if (playerCount === 1) {
            const isPCsTurn = (starter === 'X' && !xIsNext) || (starter === 'O' && xIsNext);
            if (isPCsTurn) {
                const nextIdx = getRandomIndex(squareValues)
                if (squareValues[nextIdx] || showWinner(squareValues)) return;

                const oldsquareValues = squareValues.slice();
                oldsquareValues[nextIdx] = xIsNext ? 'X' : 'O';

                setTimeout(()=>onPlay(oldsquareValues),400);
            }
        }
    }, [xIsNext, starter, playerCount, squareValues,onPlay])

    function getRandomIndex(board) {
        const nullIndices = board
            .map((value, index) => value === null ? index : null)
            .filter(index => index !== null);

        if (nullIndices.length === 0) return null;

        const randomIndex = Math.floor(Math.random() * nullIndices.length);
        return nullIndices[randomIndex];
    }


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
            : `The next move is Player ${xIsNext ? 'X' : 'O'}`;

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