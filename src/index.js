import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Trivia from './components/Trivia';
import Header from './components/Header';
import axios from 'axios';

const url = new URL(window.location.href);
const search = url.searchParams.get("search");

axios.get('http://localhost:3001/data/' + search).then(response => {
  const data = response.data[0][search]
  ReactDOM.render(
    <React.StrictMode>
      <div className="quizApp">
        <Header />
        <Trivia quiz={data} quizLength={data.questions.length} />
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );
})