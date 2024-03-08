import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const onSquareClick = () => {
    console.log("clicked a square");
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  };
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={onSquareClick} />
        <Square value={squares[1]} onSquareClick={onSquareClick} />
        <Square value={squares[2]} onSquareClick={onSquareClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={onSquareClick} />
        <Square value={squares[4]} onSquareClick={onSquareClick} />
        <Square value={squares[5]} onSquareClick={onSquareClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={onSquareClick} />
        <Square value={squares[7]} onSquareClick={onSquareClick} />
        <Square value={squares[8]} onSquareClick={onSquareClick} />
      </div>
    </>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
