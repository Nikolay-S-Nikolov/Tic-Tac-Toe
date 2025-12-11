import style from './Square.module.css'

export default function Square({ value, onSquareClickHandler, wining }) {

    return (
        <button className={`${style.ticBtn} ${wining ? style.winer : ''}`} onClick={onSquareClickHandler}>
            {value}
        </button>
    );
}