import LuckyN from './LuckyN';
import { sum } from './utils';

function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSame(dice) {
  return dice.every((v) => v === dice[0]);
}

function App() {
  return (
    <>
      <LuckyN winCheck={lessThan4}/>
      <LuckyN winCheck={allSame}/>
    </>
  )
}

export default App
