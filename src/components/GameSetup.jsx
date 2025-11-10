import { useState } from "react";
import PCStrength from "./PCStrength.jsx";

export default function GameSetup({
    onStartHandler,
    setPlayerCount,
    playerCount,
    setStarter,
    starter,
    difficulty,
    setDifficulty
}) {
    const [showPCStrength, setShowPCStrength] = useState(false);

    function onSetStarterChoice(e) {
        setStarter(e.target.value);
    }

    function onCloseDifficultyHandler() {
        setShowPCStrength(false)
    }

    return (
        <div className="setup-container">
            <form className="initial-setup" onSubmit={(e) => {
                onStartHandler(e, playerCount, starter);
            }} >
                <div className="player-count">
                    <label htmlFor="players">Number of Players:</label>
                    <select
                        id="players"
                        name="players"
                        value={playerCount}
                        onChange={(e) => {
                            setPlayerCount(Number(e.target.value));
                            setShowPCStrength(playerCount === 2 ? true : false);
                        }}
                    >
                        <option value="1">1 Player (vs Computer)</option>
                        <option value="2">2 Players</option>
                    </select>
                </div>

                <div className="starter-choice">
                    <p>Who goes first?</p>
                    <label>
                        <input
                            type="radio"
                            name="starter"
                            value="X"
                            checked={starter === "X"}
                            onChange={onSetStarterChoice}
                        />
                        Player X
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="starter"
                            value="O"
                            checked={starter === "O"}
                            onChange={onSetStarterChoice}
                        />
                        Player O
                    </label>
                </div>
                <button className="btn" type="submit">Start Game</button>
            </form>
            {showPCStrength && <PCStrength
                onClose={onCloseDifficultyHandler}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
            />}
        </div>
    );
};