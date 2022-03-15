import '../css/results.css';
import good from '../images/good.gif';
import bad from '../images/bad.gif';

export default function Results({score, length, result}) {
    const scoreRel = (0.7 <= (score / length)) ? true : false;

    return (
        <div className={result ? "resultDetails active" : "resultDetails"}>
            <h1>{scoreRel ? "Great job!" : "Nice try!"} You got {score}/{length}.</h1>
            <img src={scoreRel ? good : bad} className="resultImg" />
        </div>
    )
}