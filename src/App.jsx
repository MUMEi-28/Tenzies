
import Die from "./components/Die.jsx"

import { useState } from "react"

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

  /*  function GenerateRandomDice()
   {
     return new Array(10)
       .fill(0)
       .map(() => ({
         value: Math.ceil(Math.random() * 6),
         isHeld: false
       }))
   }
  */

  const [dice, setDice] = useState(GenerateRandomDice)

  function RollDice()
  {
    setDice(GenerateRandomDice)
  }

  return (
    <>
      <div className="grid grid-cols-5 gap-4 bg-zinc-50 rounded-lg px-[2rem] pt-[2vh] pb-[4vh]">
        <div className="col-span-5 flex justify-center flex-col text-center">
          <h1 className="text-4xl font-bold mb-8">Tenzies</h1>
          <div className="max-w-lg mx-auto">
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
          </div>
        </div>

        {dice.map(function (dieObj)
        {
          return <Die key={dieObj.id} value={dieObj.value} />
        })}

        {/*    {dice.map(num => <Die value={num} />)} */}


        <div className="col-span-5 flex justify-center mt-9">
          <button className="bg-indigo-500 text-white shadow-md text-[2rem] font-sans rounded-2xl px-9 py-2"
            onClick={RollDice}>Roll</button>
        </div>
      </div>



    </>
  )
}

