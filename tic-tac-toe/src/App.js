// @ts-check
import React from "react"; // necessary for ts-check to be happy otherwise not required
import { useState } from "react";

function Square({ value, onSquareClick }) {
  // function Square() {
  //   const [value, setValue] = useState(null);
  // function handleClick() {
  //   // console.log("clicked it!", value);
  //   // setValue("X");
  //   console.log("clicked it!");
  // }
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player is: " + (xIsNext ? "X" : "O");
  }
  const onSquareClick = (squareId) => {
    if (squares[squareId] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[squareId] = "X";
    } else {
      nextSquares[squareId] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* <Square value="1" /> */}
        {/* <button className="square">2</button> */}
        <Square value={squares[0]} onSquareClick={() => onSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => onSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => onSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => onSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => onSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => onSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => onSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => onSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => onSquareClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
