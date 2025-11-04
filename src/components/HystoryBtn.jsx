export default function HystoryBtn({ value, onClickHandler }) {
    return (
        <>
            <li><button className="btn" onClick={onClickHandler}>{value}</button></li>
        </>
    );
};