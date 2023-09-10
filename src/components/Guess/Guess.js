import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const results = checkGuess(guess, answer);

  // Sub-component to handle conditional cells
  function Cell({ letter, status }) {
    const className = status ? `cell ${status}` : 'cell';
    return <span className={className}>{letter}</span>;
  }

  return (
    <p className='guess'>
      {range(5).map((index) => (
        <Cell
          key={index}
          letter={results ? results[index].letter : undefined}
          status={results ? results[index].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
