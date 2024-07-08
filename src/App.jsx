import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "../winning-combinations.js";

/*at first the execution begins with the App() component function then when the user clicks a button the row, column number of the button clicked is passed to the handleSelectSquare() function as parameters, the gameBoard array updates and stores the symbols clicked by the two players and the gameTurns state is an array of objects where each object stores the player's symbol along with the row index and the column index of the button selected/clicked by that particular player*/


const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};


const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}


function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])]; //creating a deep copy of the initialBoard array and its inner nested arrays as we need to because arrays and objects are reference types in javascript so we always need to modify them in an immutable way, i.e, creating a copy of them and then modifying them.

  for (const turn of gameTurns) {
    const { square, player } = turn; //object destructuring
    const { row, col } = square; // object destructuring

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard, players){
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}


function App() {
  const [players, setPlayers] = useState(PLAYERS);

  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);

  // const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = deriveActivePlayer(gameTurns); //responsible for the boundary around the player name
 
  const gameBoard = deriveGameBoard(gameTurns);
 
  const winner = deriveWinner(gameBoard, players);
 
  const hasDraw = gameTurns.length === 9 && !winner; //check for draw, gameTurns array can have a maximum length of 9 as there are 9 blocks to choose in the tic-tac-toe game

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      // let currentPlayer = 'X';

      // if (prevTurns.length > 0 && prevTurns[0].player === 'X'){
      //   currentPlayer = 'O';
      // }

      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns; //this 'updatedTurns' array will update the 'gameTurns' state with the updated 'player' and 'square' keys of the object
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName, /*[symbol] dynamically sets the property name to the value of symbol. If symbol is 'X', this becomes { X: newName }. If symbol is 'O', this becomes { O: newName }. This is necessary because the property name ('X' or 'O') is determined at runtime. for eg, {
          ...prevPlayers,  // includes all existing players
          X: 'Alice'      // updates the name for player 'X'
        }
        */
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        {/* PLAYERS */}
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>

        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}

        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
