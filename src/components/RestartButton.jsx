export default function RestartButton({endGame, restartHendler}) {
    return (
        <button className="restart-btn" disabled={endGame} onClick={restartHendler}>
            Restart
        </button>
    )
}