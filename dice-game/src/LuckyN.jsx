import { useState } from "react";
import { getRolls } from "./utils";
import Dice from "./Dice";

function LuckyN({ numDice = 2, goal = 7 }) {
  const [dice, setDice] = useState(getRolls(numDice)) // not worried about initializer function
  return (
    <main className="LuckyN">
      <h1>
        Lucky {goal}
      </h1>
      <Dice dice={dice} />
    </main>
  );
}
  
export default LuckyN;
  