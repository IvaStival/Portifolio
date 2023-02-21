import { useState, useEffect } from "react";

import "./index.css";

const KeyCodePage = () => {
  const [key, setKey] = useState();
  const [keyCode, setKeyCode] = useState();
  const [code, setCode] = useState();

  useEffect(() => {
    const handlePress = (e) => {
      e.key === " " ? setKey("space") : setKey(e.key);
      setKeyCode(e.keyCode);
      setCode(e.code);
    };

    document.addEventListener("keydown", handlePress);

    return () => document.removeEventListener("keydown", handlePress);
  });

  return (
    <div className="insert">
      <div className="key">
        {key}
        <small>event.key</small>
      </div>
      <div className="key">
        {keyCode}
        <small>event.keyCode</small>
      </div>
      <div className="key">
        {code}
        <small>event.code</small>
      </div>
      <div className="key">Press any key to get KeyCode</div>
    </div>
  );
};

export default KeyCodePage;
