import { useState } from "react";
import Square from "./Square.jsx";

export default function Board() {
    const [squareValues, setsquareValues] = useState(Array(9).fill(null));

    const onClickHendler = (index) => {
        const oldsquareValues = squareValues.slice();
        oldsquareValues[index] = 'X';
        setsquareValues(oldsquareValues);
    };

    return (
        <div className="board-container">
            <div className="grid">
                {squareValues.map((v, i) => <Square
                    key={i}
                    onSquareClickHendler={() => onClickHendler(i)}
                    value={v}
                />)
                }
            </div>
        </div>
    );
};