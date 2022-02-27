import '../css/question.css';

export default function Question({ question, func, options, selected, explain, correct }) {

    function buttonClass(option) {
        if (explain) {
            if (option === correct) {
                return "selected"
            } else if (option === selected) {
                return "wrongSelection"
            }
        } else {
            if (option === selected) {
                return "selected"
            }
        }
        return "notSelected"
    }

    return (
        <div className="question">
            <h1>{question.question}</h1>
            <div className="options">
                {options.map(option => 
                    <label key={option} className={buttonClass(option)}>
                        <input type="radio" name="question" value={option}
                        onClick={func} disabled="disabled" disabled={explain ? "disabled" : ""}/> 
                        {option}
                    </label>
                )}
            </div>
        </div>
    )
}