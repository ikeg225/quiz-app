import '../css/question.css';

export default function Question({ func, options, selected, explain, correct }) {

    function percentage() {
        let totalSum = 0
        for (let i = 0; i < options.length; i++) {
            totalSum = totalSum + options[i][1]
        }

        let percentageOptions = {}
        for (let i = 0; i < options.length; i++) {
            percentageOptions[options[i][0]] = Math.round((options[i][1] / totalSum) * 100)
        }
        return percentageOptions
    }
    const perc = percentage();

    function buttonClass(option) {
        if (explain) {
            if (option === correct) {
                return "selected active correct"
            } else if (option === selected) {
                return "selected wrong"
            } else {
                return "selected unselected"
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
                    <label key={option[0]} className={buttonClass(option[0])} style={{width: perc[option[0]] + "%"}}>
                        <input type="radio" name="question" value={option[0]}
                        onClick={func} disabled={explain ? "disabled" : ""}/> 
                        {option[0]}
                    </label>
                )}
            </div>
        </div>
    )
}