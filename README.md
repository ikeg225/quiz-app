# Sports Quiz Application

This is the repo for the quiz software that [Sports Quiz](https://sportsquiz.org) uses to serve content for over 350k+ users. This is a MERN fullstack application built from scratch. The frontend portion of the website was built with ReactJS and vanilla CSS. Axios was used to fetch quiz data from the backend API. The backend portion of the website was built with NodeJS, Express, and MongoDB. The Mongoose library was used to do CRUD operations in the MongoDB instance. The backend of the application is under the gh-pages branch of this repo. HTTP requests are first checked in the backend and then sent to the frontend portion of the application.

## Play a Quiz

In order to play a quiz, a search parameter is needed. This is done by adding "?search=QUIZ_NAME" to the url "quizzes.sportsquiz.org". For example, in order to play the Lakers quiz, the url would be [quizzes.sportsquiz.org/?search=howWellDoYouKnowtheLakers](https://quizzes.sportsquiz.org/?search=howWellDoYouKnowtheLakers). Questions for each quiz is randomized, has varying lengths in the number of options, has options to display images or not, can have answer explanations, and displays how often each option is selected. At the end of the quiz, the percentile of your score is calculated against thousands of previous scores and displayed.

Data is tracked throughout the quiz. The number of times a quiz is played, the number of times an option is selected, and the final score are all stored in the MongoDB instance. This data can be accessed using the RESTful API that was created using Node, Express, and Mongoose. The API can be used by adding "/data/QUIZ_NAME". For example, the Lakers quiz API would be [quizzes.sportsquiz.org/data/howWellDoYouKnowtheLakers](https://quizzes.sportsquiz.org/data/howWellDoYouKnowtheLakers) and return a JSON file that follows the schema:

	_id: String,
	name: String,
	type: String,
	images: Boolean,
	plays: Number,
	shuffle: Boolean,
	questions: [{
		id: Number,
		title: String,
		desc: String,
		options: [{
			0: String,
			1: Number
		}],
		correct: String
	}],
	scores: [Number]

Social media marketing techniques and SEO are used to drive traffic to the website. Throughout the site's lifetime, it has reached over 350k+ sessions and 5.2 million pageviews, with a peak of 7k users in a single day.

