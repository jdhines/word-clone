import React from 'react';
import Banner from '../Banner/Banner';

function WonBanner({ answer, handleNewGame }) {
  return (
    <Banner style="sad">
      <p>
        Sorry, the correct answer was <strong>{answer}</strong>.
      </p>
      <div>
        <button onClick={handleNewGame}>Play again?</button>
      </div>
    </Banner>
  );
}

export default WonBanner;
