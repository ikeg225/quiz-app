import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Trivia from './components/Trivia';
import Header from './components/Header';
import axios from 'axios';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-171824789-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const url = new URL(window.location.href);
const search = url.searchParams.get("search");

function createEnumArray(length) {
  let list = [];
  for (var i = 0; i <= length; i++) {
      list.push(i);
  }
  return list
}

function randomize(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

axios.get('/data/' + search).then(response => {
  const data = response.data[0];
  const length = data.questions.length;
  const enumArray = createEnumArray(length - 1);

  if (data.shuffle) {
    randomize(enumArray)
  }

  axios.put('/data/' + search + '/plays/' + (data.plays + 1))

  ReactDOM.render(
    <React.StrictMode>
      <div className="quizApp">
        <Header />
        <Trivia quiz={data} quizLength={length} randomized={enumArray} />
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );
})