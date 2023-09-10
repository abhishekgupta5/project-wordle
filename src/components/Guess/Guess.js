import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <p className='guess'>
      {range(5).map((letterIndex) => (
        <span key={crypto.randomUUID()} className='cell'>
          {typeof guess === 'undefined' ? false : guess[letterIndex]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
