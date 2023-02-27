import React from 'react';
/*
  This way of doing things works, but it's really not using
  React for making reusable components. This is one component
  that will be used in a very specific way. Also, we're passing
  in several props, but guesses isn't used in the else case,
  and answer isn't used in the initial case.

  So this method is really just using React as a templating language.
  Check out the next commit for a refactoring of this using reusable
  components (such as a generic Banner).
*/
function ResultBanner({ guesses, answer, handleNewGame }) {
  const lastGuess = guesses[guesses.length - 1];
  const numGuesses = guesses.length;

  if (lastGuess === answer) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {numGuesses === 1 ? '1 guess' : `${numGuessess} guesses`}
          </strong>
          .
        </p>
        <div>
          <button onClick={handleNewGame}>Play again?</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer was <strong>{answer}</strong>.
        </p>
        <div>
          <button onClick={handleNewGame}>Play again?</button>
        </div>
      </div>
    );
  }
}

export default ResultBanner;
