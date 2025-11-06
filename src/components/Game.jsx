import { useState } from "react";
import Board from "./Board.jsx";
import GameInfo from "./GameInfo.jsx";

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentGameValue = history[currentMove];

    const onPlayHandler = (nextSquareValues) => {
        const updateHistory = [...history.slice(0, currentMove + 1), nextSquareValues];
        setHistory(updateHistory);
        setXIsNext(next => !next);
        setCurrentMove(updateHistory.length - 1);
    };

    const onRestart = () => {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
        setXIsNext(true)
    }

    const jumpToMove = (idx) => {
        setCurrentMove(idx);
        setXIsNext(idx % 2 === 0);
    }

    return (
        <div className="main-container">
            <Board xIsNext={xIsNext} squareValues={currentGameValue} onPlay={onPlayHandler} onRestartHandler={onRestart} />
            <GameInfo moves={history} jumpToMoveHandler={jumpToMove} />
        </div>
    )
}