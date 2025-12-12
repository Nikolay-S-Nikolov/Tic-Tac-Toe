export default function PCStrength({
    onClose,
    difficulty,
    setDifficulty
}) {
    function onDifficultyChangeHandler(e) {
        setDifficulty(e, 'difficulty');
    }

    return (
        <div className="strength-container">
            <div className="backdrop" onClick={onClose} ></div>

            <div className="difficulty-selector">
                <h2>Select Computer Difficulty</h2>
                <label>
                    <input
                        type="radio"
                        name="difficulty"
                        value="easy"
                        checked={difficulty === "easy"}
                        onChange={onDifficultyChangeHandler}
                    />
                    Easy (Random Moves)
                </label>

                <label>
                    <input
                        type="radio"
                        name="difficulty"
                        value="hard"
                        checked={difficulty === "hard"}
                        onChange={onDifficultyChangeHandler}
                    />
                    Hard (Smart Moves)
                </label>
                <button className="btn" onClick={onClose}>Confirm Difficulty</button>
            </div>
        </div >

    );
};