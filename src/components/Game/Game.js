import React from 'react';
import GuessEntry from '../GuessEntry';
import GuessResults from '../GuessResults';
import ErrorBoundary from '../ErrorBoundary';
import ResultBanner from '../ResultBanner/ResultBanner';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [isGameOver, setIsGameOver] = React.useState(false);

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  function handleGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    //guesses is updated on the next scheduled refresh
    //so if we used guesses.length, it would still be the previous length
    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED || guess === answer) {
      setIsGameOver(true);
    }
  }

  function handleNewGame() {
    setGuesses([]);
    setIsGameOver(false);
    setAnswer(sample(WORDS));
    console.info({ answer });
  }

  return (
    <>
      <ErrorBoundary>
        <GuessResults items={guesses} answer={answer} />
      </ErrorBoundary>
      <ErrorBoundary>
        <GuessEntry handleGuess={handleGuess} isGameOver={isGameOver} />
      </ErrorBoundary>
      {isGameOver && (
        <ResultBanner
          guesses={guesses}
          answer={answer}
          handleNewGame={handleNewGame}
        />
      )}
    </>
  );
}

export default Game;
