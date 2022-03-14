import '../css/results.css';
import good from '../images/good.webm';
import bad from '../images/bad.webm';

export default function Results({score, length, result}) {
    const scoreRel = (0.7 <= (score / length)) ? true : false;

    return (
        <div className={result ? "resultDetails active" : "resultDetails"}>
            <h1>{scoreRel ? "Great job!" : "Nice try!"} You got {score}/{length}.</h1>
            <video className="resultImg" src={scoreRel ? good : bad} width="600" height="300" controls="controls" autoplay="true" loop="true"/>
        </div>
    )
}