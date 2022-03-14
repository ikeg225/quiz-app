import '../css/quiztop.css'
import { useRef, useLayoutEffect, useState } from 'react'

export default function QuizTop({ question, name, length, currentQuestion, score }) {
    const divRef = useRef();
    const[bars, setBars] = useState([]);

    useLayoutEffect(() => {
        const width = divRef.current.clientWidth;
        let bars = []

        for (let curr = 0; curr < length; curr++) {
            let color = ""
            if (curr >= score.length) {
                color = "white"
            } else {
                color = score[curr] === 1 ? "green" : "red";
            }
            bars.push(<div key={curr} className={color} style={{width: width}}></div>)
        }
        setBars(bars)
    }, [score, length]);

    function questionFormat() {
        if (currentQuestion > 9) {
            return <span className="currentQuestion">{currentQuestion}</span>
        } else {
            return <span className="currentQuestion">0{currentQuestion}</span>
        }
    }

    return (
        <div className="quiztop" ref={divRef}>
            <div className="quizHeader">
                <h1 className="quizName">{name}</h1>
                <h1 className="questionNumber">{questionFormat()}/{length}</h1>
            </div>
            <div className="progressBar">
                {bars}
            </div>
            <h1 className="question">{question.question}</h1>
        </div>
    )
}