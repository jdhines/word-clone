import React from 'react';
import Banner from '../Banner/Banner';

function WonBanner({ numGuesses, handleNewGame }) {
  return (
    <Banner style="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numGuesses === 1 ? '1 guess' : `${numGuesses} guesses`}
        </strong>
        .
      </p>
      <div>
        <button onClick={handleNewGame}>Play again?</button>
      </div>
    </Banner>
  );
}

export default WonBanner;
