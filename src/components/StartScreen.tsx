interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6">
      <div className="text-center max-w-sm w-full">
        <span className="galaxy-title">BINGO<br />MIXER</span>
        <p className="galaxy-subtitle">✦ find your people ✦</p>
        <div className="glass-card mb-8 p-5">
          <h2 className="glass-card-heading">How to play</h2>
          <ul className="mt-4 space-y-3">
            <li className="galaxy-list-item">
              <span className="galaxy-bullet">◆</span>
              Find people who match the questions
            </li>
            <li className="galaxy-list-item">
              <span className="galaxy-bullet">◆</span>
              Tap a square when you find a match
            </li>
            <li className="galaxy-list-item">
              <span className="galaxy-bullet">◆</span>
              Get 5 in a row to win!
            </li>
          </ul>
        </div>
        <button onClick={onStart} className="neon-btn w-full py-4">
          LAUNCH GAME
        </button>
      </div>
    </div>
  );
}
