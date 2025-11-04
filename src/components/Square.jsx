export default function Square({value, onSquareClickHendler}) {    
    return (
        <button className="tic-button" onClick={onSquareClickHendler}>
            {value}
        </button>
    );
}