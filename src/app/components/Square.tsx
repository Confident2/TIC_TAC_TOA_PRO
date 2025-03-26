interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
  isWinningSquare?: boolean;
}

export function Square({ value, onSquareClick, isWinningSquare = false }: SquareProps) {
  return (
    <button
      className={`w-16 h-16 border border-gray-400 flex items-center justify-center text-3xl font-bold 
        ${isWinningSquare ? 'bg-green-100' : 'hover:bg-gray-50'} 
        ${value === 'X' ? 'text-blue-500' : 'text-red-500'}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}