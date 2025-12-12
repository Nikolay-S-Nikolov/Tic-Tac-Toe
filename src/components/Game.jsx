import { useState } from "react";
import Board from "./Board.jsx";
import GameInfo from "./GameInfo.jsx";
import GameSetup from "./GameSetup.jsx";

export default function Game() {
    const [showSetup, setShowSetup] = useState(true);
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const [startingSetup, setStartingSetup] = useState({
        playerCount: 1,
        starter: 'X',
        difficulty: 'hard'
    });
    const currentGameValue = history[currentMove];


    const onInitialStartHandler = (initialState) => {
        setStartingSetup(initialState);
        setShowSetup(false);
        setXIsNext(initialState.starter === "X");
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
        startingSetup.starter === 'X' ? setXIsNext(idx % 2 === 0) : setXIsNext(!(idx % 2 === 0));
    }

    return (
        <>
            {showSetup && <GameSetup onSubmitHandler={onInitialStartHandler} startingSetup={startingSetup} />}

            {!showSetup && <div className="main-container">
                <Board
                    xIsNext={xIsNext}
                    squareValues={currentGameValue}
                    onPlay={onPlayHandler}
                    onRestartHandler={onRestart}
                    playerCount={startingSetup.playerCount}
                    starter={startingSetup.starter}
                    difficulty={startingSetup.difficulty}
                />
                <GameInfo moves={history} jumpToMoveHandler={jumpToMove} />
            </div>}
        </>
    )
}