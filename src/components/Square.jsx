export default function Square({value, onSquareClickHаndler}) {    
    return (
        <button className="tic-button" onClick={onSquareClickHаndler}>
            {value}
        </button>
    );
}