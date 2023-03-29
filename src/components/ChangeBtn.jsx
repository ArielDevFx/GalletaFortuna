import React from "react";
import getRandomPhrase from "../utils/getRandomPhrase";
import phrase from "../utils/phrases.json";
const ChangeBtn = ({ setRandomPhrase, setNumberImg }) => {
  const handleClick = () => {
    setRandomPhrase(getRandomPhrase(phrase));
    setNumberImg(getRandomPhrase([1, 2, 3, 4]));
  };
  return (
    <>
      <button onClick={handleClick}>Ver Otro</button>
    </>
  );
};

export default ChangeBtn;
