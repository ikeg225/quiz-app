import '../css/results.css';
import good from '../images/good.gif';
import bad from '../images/bad.gif';

export default function Results({score, length, result, scores}) {
    
    function getPercentile(arr, num) {
        if (arr.length === 0) {
            return "99.99"
        } else {
            const index = arr.findIndex((currentNum) => num < currentNum);
            if (index === -1) {
                return "99.99"
            }
            return ((index / arr.length) * 100).toFixed(2)
        }
    }
    const percentile = result ? getPercentile(scores, score) : -1;

    return (
        <div className={result ? "resultDetails active" : "resultDetails"}>
            <h1>{(parseFloat(percentile) >= 50) ? "Great job!" : "Nice try!"} You got {score}/{length}.</h1>
            <h1>You scored better than {percentile}% of players!</h1>
            <img src={(parseFloat(percentile) >= 50) ? good : bad} className="resultImg" />
        </div>
    )
}