import '../css/results.css';

export default function Results({score, length}) {
    return (
        <div>
            <h1>You got {score}/{length}</h1>
        </div>
    )
}