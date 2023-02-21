import { useState, useEffect } from "react";
import { generateJoke } from "../api/connect";

import "./index.css";

const JokesPage = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    // We need to create another function inside the useEffect to code work.
    // The issue here is that the first argument of useEffect is supposed to be a function that returns either nothing (undefined)
    // or a function (to clean up side effects). But an async function returns a Promise, which can't be called as a function!
    // It's simply not what the useEffect hook expects for its first argument.
    // https://devtrium.com/posts/async-functions-useeffect
    const getJoke = async () => {
      setJoke(await generateJoke());
    };
    getJoke();
  }, []);

  const handleOnClick = async () => {
    setJoke(await generateJoke());
  };

  return (
    <div className="content">
      <h3>Don't Laugh Challenge</h3>
      <div className="jokes" id="jokes">
        {joke}
      </div>

      <button onClick={handleOnClick} className="btn">
        Get Another Joke
      </button>
    </div>
  );
};

export default JokesPage;
