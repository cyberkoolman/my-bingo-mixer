# Bingo Mixer – Workspace Instructions

Social bingo game for in-person mixers. React 19 + TypeScript + Tailwind CSS v4, built with Vite.

## Development Checklist
- [ ] `npm run lint` — ESLint passes
- [ ] `npm run build` — TypeScript compiles + Vite bundles
- [ ] `npm test` — all 41 tests pass

## Commands
```bash
npm install       # install deps (Node 22+ required)
npm run dev       # dev server → http://localhost:5173
npm run build     # tsc -b && vite build → dist/
npm run lint      # eslint .
npm test          # vitest run (jsdom, no watch)
```

## Architecture

```
src/
  types/index.ts          # Domain types: BingoSquareData, BingoLine, GameState
  data/questions.ts       # Question pool + FREE_SPACE constant
  utils/bingoLogic.ts     # Pure logic (generateBoard, toggleSquare, checkBingo)
  utils/bingoLogic.test.ts
  hooks/useBingoGame.ts   # All game state; persists to localStorage (key: bingo-game-state)
  components/
    StartScreen.tsx        # Landing with "How to play"
    GameScreen.tsx         # Board container
    BingoBoard.tsx         # 5×5 grid
    BingoSquare.tsx        # Tappable square
    BingoModal.tsx         # Win celebration modal
  index.css               # Tailwind v4 @theme tokens (accent, marked, bingo colors)
```

Game state flows: `start → playing → bingo`. Board is always 25 squares; index 12 is FREE SPACE.

## Conventions

- **Tailwind CSS v4** — CSS-first config via `@theme` in `src/index.css`. No `tailwind.config.js`. See `.github/instructions/tailwind-4.instructions.md`.
- **Pure logic in `bingoLogic.ts`** — keep game logic side-effect-free and tested. Add tests alongside any logic changes.
- **`useBingoGame` is the single state source** — all game mutations go through this hook.
- **Vite base path**: set via `VITE_REPO_NAME` env var for GitHub Pages (`/{repo}/game/`). Don't hardcode paths.
- Game deploys to GitHub Pages automatically on push to `main`.

## Key Docs
- Lab guide: `workshop/GUIDE.md`
- Contributing: `CONTRIBUTING.md`
