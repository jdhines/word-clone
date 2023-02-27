import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ guessResult }) {
  if (!guessResult) {
    return <span className="cell"></span>;
  } else {
    const { status, letter } = guessResult;
    console.log({ status, letter });
    return <span className={`cell ${status}`}>{letter}</span>;
  }
}

function Guess({ word, answer }) {
  console.log(checkGuess(word, answer));
  const guessResult = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((idx) => (
        <Cell key={idx} guessResult={guessResult ? guessResult[idx] : null} />
      ))}
    </p>
  );
}

export default Guess;
