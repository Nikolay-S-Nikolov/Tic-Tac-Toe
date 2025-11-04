import Square from "./Square.jsx";

export default function Board() {
    return (
        <div className="board-container">
            <div className="grid">
                {Array(9).fill().map((_, i) => <Square key={i} value="" />)}
            </div>
        </div>
    )
}