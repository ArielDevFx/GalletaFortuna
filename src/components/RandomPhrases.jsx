import React from "react";

const RandomPhrases = ({ ramdomPhrase }) => {
  return (
    <div className="container wave">
      <p className="parragraph">{ramdomPhrase.phrase}</p>
    </div>
  );
};

export default RandomPhrases;
