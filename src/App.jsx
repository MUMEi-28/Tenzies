
import Die from "./components/Die.jsx"

import { useState } from "react"
import Confetti from "react-confetti"

export default function App()
{
  function GenerateRandomDice()
  {
    const newDice = [];
    for (let i = 0; i < 10; i++)
    {
      newDice.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: i
      });
    }

    return newDice;
  }
  const [dice, setDice] = useState(() => GenerateRandomDice())
  const [counter, setCounter] = useState(0);

  function RollDice()
  {
    if (!isGameWon)
    {
      setCounter(function (prevState) { return prevState + 1 })
      setDice(function (prevState)
      {
        return prevState.map(function (die)
        {
          return die.isHeld ? die : { ...die, value: Math.floor(Math.random() * 6) + 1 }
        })
      })
    }
    else
    {
      setDice(GenerateRandomDice);
      setCounter(0)
    }

    console.log("COUNTER IS: " + counter)
  }




  function Hold(id)
  {
    setDice(oldDice => oldDice.map(die =>
      die.id === id ?
        { ...die, isHeld: !die.isHeld } :
        die
    ))
  }



  const isGameWon = dice.every(die => die.isHeld) &&
    dice.every(die => die.value === dice[0].value)
  if (isGameWon)
  {
    console.log("Game won!")
  }


  return (
    <>

      {isGameWon &&

        <Confetti />
      }
      <div className="grid grid-cols-5 gap-4 bg-zinc-50 rounded-lg px-[2rem] pt-[2vh] pb-[4vh]">
        <div className="col-span-5 flex justify-center flex-col text-center">
          <h1 className="text-4xl font-bold mb-8">{!isGameWon ? "Tenzies" : "You Won!"}</h1>
          <div className="max-w-lg mx-auto">
            <p>{isGameWon ? `You did ${counter} rerolls to win the game` : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls"}</p>
          </div>
        </div>

        {dice.map(function (dieObj)
        {
          return (

            <Die key={dieObj.id}
              value={dieObj.value}
              isHeld={dieObj.isHeld}
              hold={function () { return Hold(dieObj.id) }}
            />
          )

        })}

        <div className="col-span-5 flex justify-center mt-9">
          <button className="bg-indigo-500 text-white shadow-md text-[2rem] font-sans rounded-2xl px-9 py-2"
            onClick={RollDice}>{isGameWon ? "New Game" : "Roll"}</button>
        </div>
      </div>

      <footer className="absolute text-white bottom-7">
        &copy; {new Date().getFullYear()} by MJ.
      </footer>
    </>
  )
}

