import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({ board, winningSquareIds, hasBingo, onSquareClick, onReset }: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full">
      <header className="galaxy-header">
        <button onClick={onReset} className="galaxy-back-btn">← BACK</button>
        <h1 className="galaxy-header-title">BINGO MIXER</h1>
        <div className="w-16" />
      </header>
      <p className="galaxy-instructions">Tap a square when you find someone who matches it.</p>
      {hasBingo && (
        <div className="galaxy-bingo-banner">✦ BINGO! YOU GOT A LINE! ✦</div>
      )}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard board={board} winningSquareIds={winningSquareIds} onSquareClick={onSquareClick} />
      </div>
    </div>
  );
}
