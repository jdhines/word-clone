import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
function Guess({ word, answer }) {
  console.log(checkGuess(word, answer));
  const guessResult = checkGuess(word, answer);

  if (!guessResult) {
    return (
      <p className="guess">
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </p>
    );
  } else {
    return (
      <p className="guess">
        {guessResult.map(({ letter, status }) => (
          <span className={`cell ${status}`} key={letter}>
            {word ? letter : undefined}
          </span>
        ))}
      </p>
    );
  }
}

export default Guess;
