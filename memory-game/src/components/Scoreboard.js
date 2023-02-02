
function Scoreboard({ score, bestScore }) {
    return (
        <div className="scoreboard">
            <div className="score-container">
                <h6>SCORE: {score}</h6>
            </div>
            <div className="score-container">
                <h6>BEST SCORE: {bestScore}</h6>
            </div>
        </div>
    )
}

export default Scoreboard;