export default function gameOver({winner, onRematch}) {
    return(
        <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>won!</p>}
        {!winner && <p> It's a DRAW!</p>}
        <p>
        <button onClick={onRematch}>Rematch!</button>
        </p>
        </div>
    )
}