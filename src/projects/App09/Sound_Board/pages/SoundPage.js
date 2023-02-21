import applause from "../sounds/applause.mp3";
import boo from "../sounds/boo.mp3";
import gasp from "../sounds/gasp.mp3";
import tada from "../sounds/tada.mp3";
import victory from "../sounds/victory.mp3";
import wrong from "../sounds/wrong.mp3";

import "./index.css";

const SoundPage = () => {
  const audios_name = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

  const audios = {
    applause: new Audio(applause),
    boo: new Audio(boo),
    gasp: new Audio(gasp),
    tada: new Audio(tada),
    victory: new Audio(victory),
    wrong: new Audio(wrong),
  };

  const stopSound = () => {
    for (const [key, value] of Object.entries(audios)) {
      value.pause();
      value.currentTime = 0;
    }
  };

  const playSound = (e) => {
    stopSound();
    audios[e.target.innerText].play();
  };

  const renderedButtons = audios_name.map((sound) => {
    return (
      <button key={sound} onClick={playSound} className="btn">
        {sound}
      </button>
    );
  });

  return (
    <div>
      <audio id="applause" src="/sounds/applause.mp3"></audio>
      <audio id="boo" src="sounds/boo.mp3"></audio>
      <audio id="gasp" src="sounds/gasp.mp3"></audio>
      <audio id="tada" src="sounds/tada.mp3"></audio>
      <audio id="victory" src="sounds/victory.mp3"></audio>
      <audio id="wrong" src="sounds/wrong.mp3"></audio>

      <div className="buttons">{renderedButtons}</div>
    </div>
  );
};

export default SoundPage;
