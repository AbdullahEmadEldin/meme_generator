import React from 'react'
import DieContainer from './die_container'
import RollBtn from './roll_btn'

export default function Main() {
    const [dice, setDice] = React.useState(() => generateNewDice());
    const gameWon =
        dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)

    /// generate 10 dice
    function generateNewDice() {
        return new Array(10)
            .fill()
            .map((_, index) => ({
                id: index,
                value: Math.floor(Math.random() * 6) + 1,
                isHeld: false
            }))
    }

    /// roll dice to change all numbers or the held one.
    function rollDice() {
        if (gameWon) {
            setDice(generateNewDice())
        } else {
            setDice(oldDice => oldDice.map((die, index) =>
                die.isHeld ?
                    die :
                    { ...die, value: Math.ceil(Math.random() * 6) }
            ))
        }
    }
    function holdDie(die, currentElementIndex) {
        // update the isHeld value
        setDice(prevDice =>
            prevDice
                .map((die, i) => i === currentElementIndex
                    ? { ...die, isHeld: !die.isHeld }
                    : die)
        )

    }
    //
    const diceElements = dice.map((die, currentElementIndex) => (
        <DieContainer value={die.value} key={currentElementIndex} isHeld={die.isHeld} onClick={() => holdDie(die, currentElementIndex)} />
    ))
    return (
        <main>
            <div className="dies-grid">
                {diceElements}
            </div>
            <RollBtn onClick={rollDice} gameWon={gameWon} />
        </main>
    )
} 