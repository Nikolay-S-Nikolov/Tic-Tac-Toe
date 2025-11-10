import style from './Square.module.css'

export default function Square({ value, onSquareClickHandler, wining }) {
    const classNameArray = ["tic-button"];
    if (wining){
        classNameArray.push(style.winer);
    }

    return (
        <button className={classNameArray.join(' ')} onClick={onSquareClickHandler}>
            {value}
        </button>
    );
}