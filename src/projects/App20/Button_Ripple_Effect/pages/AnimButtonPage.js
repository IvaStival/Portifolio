import { useState, useEffect } from "react";

import "./index.css";

const AnimButtonPage = () => {
  const [clickPos, setClickPos] = useState({ xInside: 0, yInside: 0 });
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 1);
  }, [clickPos]);

  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    setClickPos({ xInside, yInside });
  };

  if (load) return <></>;

  const renderSpan = (
    <span
      className="circle"
      style={{ top: `${clickPos.yInside}px`, left: `${clickPos.xInside}px` }}
    ></span>
  );

  return (
    <button onClick={handleClick} className="ripple">
      Click Me {renderSpan}
    </button>
  );
};

export default AnimButtonPage;
