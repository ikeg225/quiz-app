function shuffleOptions(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

export default function Question({ quiz, func }) {

    let options = quiz.options
    shuffleOptions(options)

    return (
        <div className="question">
            <h1>{quiz.question}</h1>
            <div>
                {options.map(option => 
                    <label key={option}>
                        <input type="radio" name="question" value={option}
                        onClick={func}/> 
                        {option}
                    </label>
                )}
            </div>
        </div>
    )
}