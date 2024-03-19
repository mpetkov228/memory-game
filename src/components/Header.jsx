import '../styles/Header.css'

const Header = ({ score, bestScore }) => {
  return (
    <div id="header">
        <h1 className="game-title">Country Flag Memory Game</h1>
        <ul id="score-display">
          <li>Score: <span className="score">{score}</span></li>
          <li>Best Score: <span className="best-score">{bestScore}</span></li>
        </ul>
    </div>
  )
};

export default Header;