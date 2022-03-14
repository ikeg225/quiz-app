import Question from './components/Question';
import Results from './components/Results';
import QuizTop from './components/QuizTop';
import { useState } from 'react';
import { getQuiz } from './functions';
import './css/app.css';

const url = new URL(window.location.href);
const search = url.searchParams.get("search");

let score = []
const quiz = getQuiz(search)
const quizLength = quiz[0].length;

function App() {
  
  const [selected, setSelected] = useState("")
  const [count, setCount] = useState(1)
  const question = quiz[count]
  const [none, setNone] = useState(true)
  const [exp, setExp] = useState(false) 
  const [options, setOptions] = useState(question.options.sort())
  const [result, setResult] = useState(false)

  function selectedOption(event) {
    setSelected(event.target.value)
    setNone(false)
  }

  function submitAnswer(event) {
    event.preventDefault()
    if (selected === question.answer) {
      score = score.concat(1)
    } else {
      score = score.concat(0)
    }
    setNone(false)
    setExp(true)
  }

  function nextQuestion() {
    setExp(false)
    if (quizLength === count) {
      setResult(true)
    } else {
      setOptions(quiz[count + 1].options.sort())
      setCount(count + 1)
      setSelected("")
      setNone(true)
    }
  }

  function restartQuiz() {
    score = []
    setCount(1)
    setNone(true)
    setExp(false)
    setOptions(quiz[1].options.sort())
    setResult(false)
    setSelected("")
  }

  return (
    <div className="app">
      <div className="fixed">
        <QuizTop name={quiz[0].name} length={quizLength} currentQuestion={count} score={score}/>
        {!result && <form onSubmit={submitAnswer}>
          <Question question={question} func={selectedOption} options={options} 
          selected={selected} explain={exp} correct={question.answer}/>
          <button className={none ? "next" : (exp ? "none" : "next active")} type="submit">Submit</button>
        </form>}
        <div className="nextQuestion">
          <button className={exp ? "next active" : "none"} onClick={nextQuestion}>Next</button>
        </div>
        <div className={exp ? "explain active" : "explain"}>
        <h2>Explanation:</h2>
        <h2>{question.explanation}</h2>
      </div>
      </div>
      {result && <div className="results"><Results score={score.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 
        0)} length={quizLength}/><button className="next" onClick={restartQuiz}>Restart</button></div>}
    </div>
  );
}

export default App;