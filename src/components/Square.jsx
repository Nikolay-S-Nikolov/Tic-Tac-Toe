export default function Square({value, onSquareClickHandler}) {    
    return (
        <button className="tic-button" onClick={onSquareClickHandler}>
            {value}
        </button>
    );
}