import '../css/quiztop.css'

export default function QuizTop({ name, length, currentQuestion, score }) {
    return (
        <div>
            <div className="quizHeader">
                <h1>{name}</h1>
                <h1>{currentQuestion}/{length}</h1>
            </div>
            <div className="progressBar">

            </div>
        </div>
    )
}