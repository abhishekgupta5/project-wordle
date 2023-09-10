import React from 'react';

function GuessResults({ guessResults }) {
  return (
    <div className='guess-results'>
      {guessResults.map((guess) => (
        <p key={crypto.randomUUID()} className='guess'>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
