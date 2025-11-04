import { useState } from "react";

export default function Square() {

    const [value, setValue] = useState(null);

    const onSquareClickHendler = () => {
        setValue('X');
    };
    
    return (
        <button className="tic-button" onClick={onSquareClickHendler}>
            {value}
        </button>
    );
}