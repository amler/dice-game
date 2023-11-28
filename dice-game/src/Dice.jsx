import './Dice.css';
import Die from "./Die";

function Dice ({dice, color}) {
    return (
        <section className="Dice">
            { dice.map((v, i) => (
                <Die key={i} val={v} color={color}/>
            ))}
        </section>
    );
}

export default Dice;