import Question from './components/Question';
import { useState, useEffect } from 'react'
import axios from 'axios'

let score = []

function App() {
  const [quiz, setQuiz] = useState()
  useEffect(() => {
    axios.get('http://localhost:3001/quiz').then(response => {
      setQuiz(response)
      console.log(quiz)})
  }, [])
  
  let selected = ""
  const [count, setCount] = useState(0)
  const [none, setNone] = useState(false)
  const [exp, setExp] = useState(false) 

  const question = quiz[count]
  
  function selectedOption(event) {
    selected = event.target.value
  }

  function submitAnswer(event) {
    event.preventDefault()
    if (selected === "") {
      setNone(true)
    } else {
      if (selected === question.answer) {
        score = score.concat(1)
      } else {
        score = score.concat(0)
      }
      setNone(false)
      setExp(true)
    }
  }

  function nextQuestion() {
    console.log(score)
    setExp(false)
    setCount(count + 1)
  }

  return (
    <div>
      <form onSubmit={submitAnswer}>
        <Question quiz={question} func={selectedOption} />
        {none && <div>Please select an option.</div>}
        {!exp && <button type="submit">Next</button>}
      </form>
      {exp && 
      <div>
        <button onClick={nextQuestion}>Next</button>
        <h2>{question.explanation}</h2>
      </div>}
    </div>
  );
}

export default App;