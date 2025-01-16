

export default function DieContainer(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <button className="die-container" style={styles} 
                onClick={props.onClick}>
            <span className="die-num">{props.value}</span>
        </button>
    )
}