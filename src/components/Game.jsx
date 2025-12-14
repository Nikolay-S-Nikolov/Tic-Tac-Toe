import { useReducer } from "react";

import Board from "./Board.jsx";
import GameInfo from "./GameInfo.jsx";
import GameSetup from "./GameSetup.jsx";

import gameReducer from "../reducers/gameReducer.js"

export default function Game() {
    const [ state, dispatch ] = useReducer(gameReducer, {
        showSetup: true,
        xIsNext: true,
        history: [Array(9).fill(null)],
        currentMove: 0,
        startingSetup: {
            playerCount: 1,
            starter: "X",
            difficulty: "hard",
        },
    })

    const currentGameValue = state.history[state.currentMove];

    const onInitialStartHandler = (initialState) => {
        dispatch({ type: "START_GAME", payload: initialState })
    }

    const onPlayHandler = (nextSquareValues) => {
        dispatch({ type: 'PLAY', payload: nextSquareValues });
    };

    const onRestart = () => {
        dispatch({ type: 'RESTART' })
    }

    const jumpToMove = (idx) => {
        dispatch({ type: 'JUMP_TO_MOVE', payload: idx })
    }

    return (
        <>
            {state.showSetup && <GameSetup onSubmitHandler={onInitialStartHandler} startingSetup={state.startingSetup} />}

            {!state.showSetup && <div className="main-container">
                <Board
                    xIsNext={state.xIsNext}
                    squareValues={currentGameValue}
                    onPlay={onPlayHandler}
                    onRestartHandler={onRestart}
                    playerCount={state.startingSetup.playerCount}
                    starter={state.startingSetup.starter}
                    difficulty={state.startingSetup.difficulty}
                />
                <GameInfo moves={state.history} jumpToMoveHandler={jumpToMove} />
            </div>}
        </>
    )
}