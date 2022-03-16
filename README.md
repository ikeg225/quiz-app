# Sports Quiz Application

This is the repo for the quiz software that [Sports Quiz](https://sportsquiz.org) uses. This application was built from scratch using MongoDB, Express, ReactJS, and NodeJS (MERN). The backend of the application is under the gh-pages branch of this repo. 

## Play a Quiz

In order to play a quiz, a search parameter is needed. This is done by adding "?search=QUIZ_NAME" to the url "quizzes.sportsquiz.org". For example, in order to play the Lakers quiz, the url would be [quizzes.sportsquiz.org/?search=howWellDoYouKnowTheLakers](https://quizzes.sportsquiz.org/?search=howWellDoYouKnowTheLakers). 

A REST API was created using Node and Express to GET specific quizzes based on the search parameter. The API can be accessed using "/data/QUIZ_NAME". For example, the Lakers quiz API would be [quizzes.sportsquiz.org/data/howWellDoYouKnowTheLakers](https://quizzes.sportsquiz.org/data/howWellDoYouKnowTheLakers) and return a JSON file.

Of course users are not expected to use this method of finding quizzes. They will first be directed to quiz landing pages and then click a button that links to the specified quiz.