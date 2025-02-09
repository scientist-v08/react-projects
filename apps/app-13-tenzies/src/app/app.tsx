import { useState } from 'react';
import ButtonTile from './button-tile';
import Confetti from 'react-confetti';

export default function App() {
  const [numbers, setNumbers] = useState<number[]>(() =>
    generateRandomNumbers()
  );
  const [disabledStates, setDisabledStates] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const gameWon =
    disabledStates.every((die) => die) &&
    numbers.every((die) => die === numbers[0]);

  function generateRandomNumbers(): number[] {
    const numbers: number[] = [];
    for (let i = 0; i < 10; i++) {
      numbers.push(Math.floor(Math.random() * 10));
    }
    return numbers;
  }

  function handleDisbale(index: number, state: boolean): void {
    setDisabledStates([
      ...disabledStates.slice(0, index),
      state,
      ...disabledStates.slice(index + 1),
    ]);
  }

  function rollDice(): void {
    if (!gameWon) {
      setNumbers((prevNumbers) =>
        prevNumbers.map((prevNumber, index) => {
          return disabledStates[index]
            ? prevNumber
            : Math.floor(Math.random() * 10);
        })
      );
    } else {
      setNumbers(generateRandomNumbers());
      setDisabledStates([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ]);
    }
  }

  return (
    <main>
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="main__div">
        {numbers.slice(0, 5).map((item, index) => (
          <ButtonTile
            key={index}
            inputNumber={item}
            index={index}
            disabled={disabledStates[index]}
            indexToDisable={handleDisbale}
          />
        ))}
      </div>
      <div className="main__div">
        {numbers.slice(5, 10).map((item, index) => (
          <ButtonTile
            key={index}
            inputNumber={item}
            index={index + 5}
            disabled={disabledStates[index + 5]}
            indexToDisable={handleDisbale}
          />
        ))}
      </div>
      <button className="roll-dice" onClick={rollDice}>
        {gameWon ? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}
