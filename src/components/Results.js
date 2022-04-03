import '../css/results.css';
import good from '../images/good.gif';
import bad from '../images/bad.gif';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

export default function Results({score, length, result, scores, quizName}) {

    const initialRender = useRef(true);
    const [percentile, setPercentile] = useState("10.00");

    function getPercentile(arr, num) {
        const totalScores = arr.reduce((a, b) => a + b, 0)
        if (totalScores === 0 || num === arr.length - 1) {
            return "99.99"
        } else {
            let betterThan = 0;
            for (let i = 0; i < num; i++) {
                betterThan = betterThan + arr[i]
            }
            return ((betterThan / totalScores) * 100).toFixed(2)
        }
    }

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else if (!initialRender.current && result) {
            setPercentile(getPercentile(scores, score))
            scores[score] += 1
            axios.put('/data/' + quizName + '/scores/' + scores.toString().replaceAll(",", "-"))
        }
    }, [result])

    return (
        <div className={result ? "resultDetails active" : "resultDetails"}>
            <h1>{(parseFloat(percentile) >= 50) ? "Great job!" : "Nice try!"} You got {score}/{length}.</h1>
            <h1>You scored better than {percentile}% of players!</h1>
            <img src={(parseFloat(percentile) >= 50) ? good : bad} className="resultImg" />
        </div>
    )
}