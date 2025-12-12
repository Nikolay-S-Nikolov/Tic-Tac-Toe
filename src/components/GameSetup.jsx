import { useState } from "react";
import PCStrength from "./PCStrength.jsx";

export default function GameSetup({    
    onSubmitHandler
}) {
    const [showPCStrength, setShowPCStrength] = useState(false);
    const [formData, setFormData] = useState(
        {
            playerCount: 1,
            starter: 'X',
            difficulty: 'hard'
        }
    );

    function handleSubmit(e) {
        e.preventDefault();
        onSubmitHandler(formData);
    }

    function handleChoiceChange(e, fieldName) {
        setFormData({ ...formData, [fieldName]: e.target.value });
    }

    function onCloseDifficultyHandler() {
        setShowPCStrength(false)
    }

    function handlePlayerCountChange(e) {
        setFormData({ ...formData, playerCount: parseInt(e.target.value, 10) });
        setShowPCStrength(formData.playerCount === 2 ? true : false);
    }

    return (
        <div className="setup-container">
            <form className="initial-setup" onSubmit={handleSubmit} >
                <div className="player-count">
                    <label htmlFor="players">Number of Players:</label>
                    <select
                        id="players"
                        name="players"
                        value={formData.playerCount}
                        onChange={handlePlayerCountChange}
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
                            checked={formData.starter === "X"}
                            onChange={(e) => {handleChoiceChange(e, 'starter')}}
                        />
                        Player X
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="starter"
                            value="O"
                            checked={formData.starter === "O"}
                            onChange={(e) => {handleChoiceChange(e, 'starter')}}
                        />
                        Player O
                    </label>
                </div>
                <button className="btn" type="submit">Start Game</button>
            </form>
            {showPCStrength && <PCStrength
                onClose={onCloseDifficultyHandler}
                difficulty={formData.difficulty}
                setDifficulty={handleChoiceChange}
            />}
        </div>
    );
};