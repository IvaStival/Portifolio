import { useState } from "react";
import "./index.css";

const BlurPage = () => {
  const [load, setLoad] = useState(0);

  const delay = (ms) => {
    return new Promise((resolve) => {
      return setTimeout(resolve, ms);
    });
  };

  const handleClickAdd = () => {
    if (load < 100) {
      setLoad(load + 1);
      blurring(load);
    }
  };

  const handleClickLoad = async () => {
    for (let i = 0; i < 100; ++i) {
      setLoad((curr) => {
        blurring(curr + 1);
        return curr + 1;
      });
      await delay(10);
    }
  };

  const blurring = (value) => {
    document.documentElement.style.setProperty(
      "--blur-value",
      scale(value, 0, 100, 30, 0) + "px"
    );
  };

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  return (
    <div className="content">
      <section className="bg"></section>
      <div
        className="loading-text"
        style={{ opacity: scale(load, 0, 100, 1, 0) }}
      >{`${load}%`}</div>
      <div>
        <button onClick={handleClickAdd} className="btn">
          Add
        </button>
        <button onClick={handleClickLoad} className="btn">
          Load
        </button>
      </div>
    </div>
  );
};

export default BlurPage;
