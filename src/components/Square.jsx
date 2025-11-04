export default function Square({ value }) {
    return (
        <button className="tic-button" onClick={onSquareClick}>
            {value}
        </button>
    );
}

function onSquareClick(e) {
    console.log('clicked')
}