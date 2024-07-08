

export default function Log ({ turns }){
    return (
        <ol id="log">
            {turns.map(turn => <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row}, {turn.square.col}</li>)}
        </ol>
    );
}

/*<li key={`${turn.square.row}${turn.square.col}`}> we are using javascript template literals you create a unique key for each combination of row and col, it could have been done using normal jsx just curly braces syntax too in the following way, <li key={turn.square.row + '' + turn.square.col}>*/
  