import '../css/quiztop.css'

export default function QuizTop({ name, length, currentQuestion, score }) {

    function bar() {
        let bars = []
        for (let curr = 0; curr < length; curr++) {
            let color = ""
            if (curr >= score.length) {
                color = "white"
            } else {
                color = score[curr] == 1 ? "green" : "red";
            }
            bars.push(<div key={curr} className={color}></div>)
        }
        return bars          
    }

    function questionFormat() {
        if (currentQuestion > 9) {
            return <span className="currentQuestion">{currentQuestion}</span>
        } else {
            return <span className="currentQuestion">0{currentQuestion}</span>
        }
    }

    return (
        <div className="quiztop">
            <div className="quizHeader">
                <h1 className="quizName">{name}</h1>
                <h1 className="questionNumber">{questionFormat()}/{length}</h1>
            </div>
            <div className="progressBar">
                {bar()}
            </div>
        </div>
    )
}