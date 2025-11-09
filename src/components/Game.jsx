import { useState } from "react";
import Board from "./Board.jsx";
import GameInfo from "./GameInfo.jsx";
import GameSetup from "./GameSetup.jsx";

export default function Game() {
    const [showSetup, setShowSetup] = useState(true);
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const [playerCount, setPlayerCount] = useState(2);
    const [starter, setStarter] = useState('X');
    const currentGameValue = history[currentMove];

    const onInitialStartHandler = (e, playerCount, starter) => {
        setShowSetup(false);
        e.preventDefault();
        starter === 'X' ? setXIsNext(true) : setXIsNext(false)
    }

    const onPlayHandler = (nextSquareValues) => {
        const updateHistory = [...history.slice(0, currentMove + 1), nextSquareValues];
        setHistory(updateHistory);
        setXIsNext(next => !next);
        setCurrentMove(updateHistory.length - 1);
    };

    const onRestart = () => {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
        setXIsNext(true);
        setShowSetup(true);
    }

    const jumpToMove = (idx) => {
        setCurrentMove(idx);
        starter === 'X' ? setXIsNext(idx % 2 === 0) : setXIsNext(!(idx % 2 === 0));
    }

    return (
        <>
            {showSetup && <GameSetup
                onStartHandler={onInitialStartHandler}
                setPlayerCount={setPlayerCount}
                setStarter={setStarter}
                starter={starter}
                playerCount={playerCount}
            />}
            {!showSetup && <div className="main-container">
                <Board
                    xIsNext={xIsNext}
                    squareValues={currentGameValue}
                    onPlay={onPlayHandler}
                    onRestartHandler={onRestart}
                    playerCount={playerCount}
                    starter={starter}
                />
                <GameInfo moves={history} jumpToMoveHandler={jumpToMove} />
            </div>}
        </>
    )
}