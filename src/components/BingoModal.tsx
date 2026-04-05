interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="galaxy-modal-overlay">
      <div className="galaxy-modal-card">
        <div className="galaxy-modal-emoji">✨</div>
        <h2 className="galaxy-modal-title">BINGO!</h2>
        <p className="galaxy-modal-subtitle">You completed a line!</p>
        <button onClick={onDismiss} className="neon-btn w-full py-3">
          KEEP PLAYING
        </button>
      </div>
    </div>
  );
}
