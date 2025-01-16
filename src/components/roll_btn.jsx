export default function RollBtn(props) {
    return (
        <button className="roll-btn" onClick={props.onClick}>{props.gameWon ? "New Game" : "Roll"}</button>
    )
}