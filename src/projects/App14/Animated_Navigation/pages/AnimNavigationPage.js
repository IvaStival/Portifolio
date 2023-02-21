import { useState } from "react";

import "./index.css";

const AnimNavigationPage = () => {
  const [active, setActive] = useState(true);

  const handleClick = (e) => {
    setActive(!active);
  };

  return (
    <nav className={`${active ? "active" : ""}`}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/works">Works</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <button onClick={handleClick} className="icon" id="toggle">
        <div className="line line1"></div>
        <div className="line line2"></div>
      </button>
    </nav>
  );
};

export default AnimNavigationPage;
