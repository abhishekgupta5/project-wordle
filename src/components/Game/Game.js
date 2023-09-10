import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Guess from '../Guess/Guess';
import { range } from '../../utils';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guessResults, setGuessResults] = React.useState([]);

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        guessResults={guessResults}
        setGuessResults={setGuessResults}
      />
    </>
  );
}

export default Game;
