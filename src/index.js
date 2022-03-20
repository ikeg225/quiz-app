import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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
        <App quiz={data} quizLength={data.questions.length} />
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
