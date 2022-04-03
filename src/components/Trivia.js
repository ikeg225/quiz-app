import Question from './Question';
import Results from './Results';
import QuizTop from './QuizTop';
import { useState } from 'react';
import '../css/trivia.css';

let score = []

function Trivia({ quiz, quizLength, randomized }) {
  
  const [selected, setSelected] = useState("")
  const [count, setCount] = useState(0)
  const question = quiz.questions[randomized[count]]
  const [none, setNone] = useState(true)
  const [exp, setExp] = useState(false) 
  const [options, setOptions] = useState(question.options)
  const [result, setResult] = useState(false)

  function selectedOption(event) {
    setSelected(event.target.value)
    setNone(false)
    document.getElementsByClassName("trivia")[0].classList = "trivia activeGreen";
    document.getElementsByClassName("quiztop")[0].classList = "quiztop activeGreen";
  }

  function submitAnswer(event) {
    event.preventDefault()
    if (selected === question.correct) {
      score = score.concat(1)
    } else {
      score = score.concat(0)
      document.getElementsByClassName("trivia")[0].classList = "trivia activeRed";
      document.getElementsByClassName("quiztop")[0].classList = "quiztop activeRed";
    }
    setNone(false)
    setExp(true)
  }

  function nextQuestion() {
    setExp(false)
    document.getElementsByClassName("trivia")[0].classList = "trivia";
    document.getElementsByClassName("quiztop")[0].classList = "quiztop";
    if ((quizLength - 1) === count) {
      setResult(true)
    } else {
      setOptions(quiz.questions[randomized[count + 1]].options)
      setCount(count + 1)
      setSelected("")
      setNone(true)
    }
  }

  function restartQuiz() {
    score = []
    setCount(0)
    setNone(true)
    setExp(false)
    setOptions(quiz.questions[randomized[0]].options)
    setResult(false)
    setSelected("")
  }
  
  return (
    <div className="trivia">
      <div className="fixed">
        <QuizTop question={question} name={quiz.name} length={quizLength} currentQuestion={count + 1} score={score} 
        result={result} images={quiz.images} />
        {!result && <form onSubmit={submitAnswer}>
          <Question func={selectedOption} options={options} quizName={quiz._id}
          selected={selected} explain={exp} correct={question.correct} currQuestion={randomized[count]}/>
          <button className={none ? "next" : (exp ? "none" : "next active")} type="submit">Submit</button>
        </form>}
        <div className="nextQuestion">
          <button className={exp ? "next active" : "none"} onClick={nextQuestion}>Next</button>
        </div>
        {question.desc.length !== 0 && <div className={exp ? "explain active" : "explain"}>
            <h2 className="explainHeader">Explanation:</h2>
            <h2 className="explainContent" dangerouslySetInnerHTML={{ __html:  question.desc }} />
        </div>}
      </div>
      <div className={result ? "results active" : "results"}>
        <Results score={score.reduce((previousValue, currentValue) => previousValue + currentValue, 0)} 
        length={quizLength} result={result} scores={quiz.scores} quizName={quiz._id} />
        <button className={result ? "next active" : "none"} onClick={restartQuiz}>Play Again</button>
      </div>
    </div>
  );
}

export default Trivia;