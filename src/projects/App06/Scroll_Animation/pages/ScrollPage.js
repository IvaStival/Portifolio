import { useEffect, useState } from "react";
import "./index.css";

import ContentList from "../components/ContentList";

const ScrollPage = () => {
  const [trigger, setTrigger] = useState((window.innerHeight / 5) * 4);
  const [scroll, setScroll] = useState(window.screenY);

  useEffect(() => {
    const handleScroll = () => {
      setTrigger((window.innerHeight / 5) * 4);
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [trigger, scroll]);

  const result = [];
  for (let i = 0; i < 30; ++i) {
    result.push("Content");
  }

  return (
    <div className="content">
      <h1>Scroll to see the Animation</h1>
      <ContentList trigger={trigger} scroll={scroll} contents={result} />
    </div>
  );
};

export default ScrollPage;
