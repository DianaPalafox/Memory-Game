
function Scoreboard({ score, bestScore }) {
    return (
        <div className="scoreboard">
            <div>
                <h6>Score: {score}</h6>
            </div>
            <div>
                <h6>Best score: {bestScore}</h6>
            </div>
        </div>
    )
}

export default Scoreboard;