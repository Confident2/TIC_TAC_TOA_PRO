"use client"

import { useState } from "react";
import { Board } from "./Board";
import { calculateWinner } from "@/utils/CalculateWinner";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    const description = move > 0 ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={move} className="mb-2">
        <button
          onClick={() => jumpTo(move)}
          className={`px-3 py-1 rounded text-sm ${
            move === currentMove
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 max-w-4xl mx-auto">
      <div className="flex-1">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-4">Game History</h2>
        <ol className="list-decimal pl-5 space-y-2">{moves}</ol>
      </div>
    </div>
  );
}