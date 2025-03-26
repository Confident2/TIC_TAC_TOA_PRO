import { calculateWinner } from "@/utils/CalculateWinner";
import { Square } from "./Square";

interface BoardProps {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (squares: (string | null)[]) => void;
}

export function Board({ xIsNext, squares, onPlay }: BoardProps) {
  const { winner, winningSquares } = calculateWinner(squares) || {};

  function handleClick(i: number) {
    if (winner || squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const status = winner 
    ? `Winner: ${winner}`
    : squares.every(Boolean) 
      ? "Game ended in a draw"
      : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-xl font-semibold">{status}</div>
      {[0, 3, 6].map((row) => (
        <div key={row} className="flex">
          {[0, 1, 2].map((col) => {
            const index = row + col;
            return (
              <Square
                key={index}
                value={squares[index]}
                onSquareClick={() => handleClick(index)}
                isWinningSquare={winningSquares?.includes(index)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}