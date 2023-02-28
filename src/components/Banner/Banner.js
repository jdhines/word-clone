import React from 'react';

function Banner({ style, children }) {
  return <div className={`banner ${style}`}>{children}</div>;
}

export default Banner;
