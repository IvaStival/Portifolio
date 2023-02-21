import { useState } from "react";

import MiddlePage from "./MiddlePage";

import "./index.css";

const SplitPage = () => {
  const [side, setSide] = useState("");

  const handleMouseEnter = (e) => {
    if (e.target.className.includes("left")) {
      setSide("left");
    } else if (e.target.className.includes("right")) {
      setSide("right");
    }
  };

  const handleMouseLeave = () => {
    setSide("");
  };

  return (
    <div
      className={`container ${
        side === "left" ? "hover-left" : side === "right" ? "hover-right" : ""
      }`}
    >
      <MiddlePage
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        className="split left"
        title="Playstation 5"
        link="#"
      />
      <MiddlePage
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        className="split right"
        title="XBox Series X"
        link="#"
      />
    </div>
  );
};

export default SplitPage;
