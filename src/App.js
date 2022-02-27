import Question from './components/Question';
import Results from './components/Results';
import { useState } from 'react';
import { quiz } from './functions';
import './css/app.css';

let score = []
const quizLength = quiz.length;

function App() {
  
  const [selected, setSelected] = useState("")
  const [count, setCount] = useState(0)
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
    if (quizLength === (count + 1)) {
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
    setCount(0)
    setNone(true)
    setExp(false)
    setOptions(quiz[0].options.sort())
    setResult(false)
    setSelected("")
  }

  return (
    <div className="app">
      {!result && <form onSubmit={submitAnswer}>
        <Question question={question} func={selectedOption} options={options} 
        selected={selected} explain={exp} correct={question.answer}/>
        {!exp && !none && <button className="next" type="submit">Submit</button>}
      </form>}
      {exp && 
      <div className="explain">
        <div className="nextQuestion">
          <button className="next" onClick={nextQuestion}>Next</button>
        </div>
        <h2>Explanation:</h2>
        <h2>{question.explanation}</h2>
      </div>}
      {result && <div className="results"><Results score={score.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 
        0)} length={quizLength}/><button className="next" onClick={restartQuiz}>Restart</button></div>}
    </div>
  );
}

export default App;