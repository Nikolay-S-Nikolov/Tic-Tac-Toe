export default function HystoryBtn({ value, onClickHandler }) {
    return (
        <>
            <li><button onClick={onClickHandler}>{value}</button></li>
        </>
    );
};