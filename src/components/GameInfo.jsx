import HystoryBtn from "./HystoryBtn.jsx";

export default function GameInfo({ moves, jumpToMoveHandler }) {
    return (
        <div className="game-info">
            <div className="status"> Hystory</div>
            <ol>
                {moves.map((_, i) => <HystoryBtn
                    key={i}
                    value={i > 0 ? `Go to move #${i}` : 'Go to game start'}
                    onClickHandler={() => jumpToMoveHandler(i)}
                />)}
            </ol>
        </div>
    );
};