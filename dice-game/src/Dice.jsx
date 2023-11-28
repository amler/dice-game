import './Dice.css';
import Die from "./Die";

function Dice ({dice}) {
    return (
        <section className="Dice">
            { dice.map((v, i) => (
                <Die key={i} val={v} />
            ))}
        </section>
    );
}

export default Dice;