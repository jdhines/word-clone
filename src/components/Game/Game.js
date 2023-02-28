import React from 'react';
import GuessEntry from '../GuessEntry';
import GuessResults from '../GuessResults';
import ErrorBoundary from '../ErrorBoundary';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  function handleGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    //guesses is updated on the next scheduled refresh
    //so if we used guesses.length, it would still be the previous length
    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    } else if (guess === answer) {
      setGameStatus('won');
    }
  }

  function handleNewGame() {
    setGuesses([]);
    setGameStatus(false);
    setAnswer(sample(WORDS));
    console.info({ answer });
  }

  return (
    <>
      <ErrorBoundary>
        <GuessResults items={guesses} answer={answer} />
      </ErrorBoundary>
      <ErrorBoundary>
        <GuessEntry handleGuess={handleGuess} gameStatus={gameStatus} />
      </ErrorBoundary>
      {gameStatus === 'won' && (
        <WonBanner numGuesses={guesses.length} handleNewGame={handleNewGame} />
      )}
      {gameStatus === 'lost' && (
        <LostBanner answer={answer} handleNewGame={handleNewGame} />
      )}
    </>
  );
}

export default Game;
