import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const results = guess ? checkGuess(guess, answer) : undefined;

  return (
    <p className='guess'>
      {results
        ? results.map(({ letter, status }, index) => (
            <span key={index} className={`cell ${status}`}>
              {letter}
            </span>
          ))
        : range(5).map((index) => <span key={index} className='cell'></span>)}
    </p>
  );
}

export default Guess;
