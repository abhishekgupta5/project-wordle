import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <p className='guess'>
      {range(5).map((letterIndex) => (
        <span key={letterIndex} className='cell'>
          {guess ? guess[letterIndex] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
