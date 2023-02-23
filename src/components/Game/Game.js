import React from 'react';
import GuessEntry from '../GuessEntry';
import GuessResults from '../GuessResults';
import ErrorBoundary from '../ErrorBoundary';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(guess) {
    const nextGuesses = [...guesses, guess];
    console.log({ nextGuesses });
    setGuesses(nextGuesses);
  }

  return (
    <>
      <ErrorBoundary>
        <GuessResults items={guesses} />
      </ErrorBoundary>
      <ErrorBoundary>
        <GuessEntry handleGuess={handleGuess} />
      </ErrorBoundary>
    </>
  );
}

export default Game;
