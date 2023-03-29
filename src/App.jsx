import "./App.css";
import ChangeBtn from "./components/ChangeBtn";
import RandomPhrases from "./components/RandomPhrases";
import getRandomPhrase from "./utils/getRandomPhrase";
import { useState } from "react";

const img = [1, 2, 3, 4];

function App() {
  const [randomPhrase, setRandomPhrase] = useState(img);
  const [numberImg, setNumberImg] = useState(getRandomPhrase(img));
  const appStyle = {
    backgroundImage: `url('/img/fondo${numberImg}.jpg')`,
  };

  return (
    <div style={appStyle} className="App">
      <h1 className="title">GALLETA DE LA FORTUNA</h1>
      <RandomPhrases ramdomPhrase={randomPhrase} />
      <ChangeBtn
        setRandomPhrase={setRandomPhrase}
        setNumberImg={setNumberImg}
      />
    </div>
  );
}

export default App;
