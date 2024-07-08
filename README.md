# Tic Tac Toe Game

Welcome to the Tic Tac Toe game created using React! This project demonstrates various React concepts including components, props, states, and more.

## Introduction

This is a simple implementation of the classic Tic Tac Toe game. The project is built using React and showcases various React concepts such as components, props, states, and more. The game allows two players to take turns marking spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game. Once the application is running, you can start playing the game by clicking on the squares of the game board. Players take turns to place their symbols (X or O) on the board. The game ends when a player wins or the board is full (draw).

## Features

- Two-player functionality.
- Dynamic game board updates.
- Highlighting the active player.
- Editable player names.
- Displaying the game log.
- Responsive design.
- Option to reset the game and start over.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/sagnikbose-11-01/Tic-Tac-Toe.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tic-tac-toe-react
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm dev start 
   ```
5. Open your browser and go to `http://localhost:5173` to see the game in action.

## Usage

- Click on a square to make a move.
- Players take turns playing as 'X' and 'O'.
- The game automatically switches the active player after each move.
- The game log displays the moves made by each player.


## Concepts Demonstrated

### Components

The game is divided into reusable components such as `GameBoard`, `Log`, `Player`, and `Square`.

### Props

Props are used to pass data and event handlers to components. For example, `Player` receives `initialName`, `symbol`, and `isActive` as props.

### State

State is used to manage the game board and the game turns. The state is updated using the `useState` hook.

### Event Handling

Event handling is demonstrated in the `handleSelectSquare` function which updates the game board when a square is clicked.

### Conditional Rendering

Conditional rendering is used to highlight the active player and display the game log.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to create a pull request or open an issue.

