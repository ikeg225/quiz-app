import '../css/question.css';

export default function Question({ func, options, selected, explain, correct }) {

    function buttonClass(option) {
        if (explain) {
            if (option === correct) {
                return "selected active"
            } else if (option === selected) {
                return "selected wrong"
            }
        } else {
            if (option === selected) {
                return "selected active"
            }
        }
        return "selected"
    }

    return (
        <div className="question">
            <div className="options">
                {options.map(option => 
                    <label key={option} className={buttonClass(option)}>
                        <input type="radio" name="question" value={option}
                        onClick={func} disabled={explain ? "disabled" : ""}/> 
                        {option}
                    </label>
                )}
            </div>
        </div>
    )
}