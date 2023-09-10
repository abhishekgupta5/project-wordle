import React from 'react';

function GuessInput({ guess, setGuess, guessResults, setGuessResults }) {
  function updateGuessResults() {
    const newGuessResults = [...guessResults];
    newGuessResults.push(guess);
    setGuessResults(newGuessResults);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert('Guess should be of 5 letters');
      return;
    }
    updateGuessResults();
    setGuess('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
