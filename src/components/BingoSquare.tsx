import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  let stateClass: string;
  if (square.isFreeSpace) {
    stateClass = 'sq-free';
  } else if (isWinning) {
    stateClass = 'sq-winning';
  } else if (square.isMarked) {
    stateClass = 'sq-marked';
  } else {
    stateClass = 'sq-default';
  }

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={'sq ' + stateClass}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span style={{ wordBreak: 'break-word', hyphens: 'auto' }}>{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="sq-checkmark">✓</span>
      )}
    </button>
  );
}
