import { useState, useEffect } from "react";

import "./index.css";

const CounterPage = () => {
  const [twitterCounter, setTwitterCounter] = useState(0);
  const [youtubeCounter, setYoutubeCounter] = useState(0);
  const [facebookCounter, setFacebookCounter] = useState(0);

  const twitter_target = 12000;
  const youtube_target = 5000;
  const facebook_target = 7500;

  const delay = (ms) => {
    return new Promise((resolve) => {
      return setTimeout(resolve, ms);
    });
  };

  useEffect(() => {
    const updateCounters = async () => {
      const twitter_inc = twitter_target / 200;
      const youtube_inc = youtube_target / 200;
      const facebook_inc = facebook_target / 200;

      if (twitterCounter < twitter_target) {
        // We need to add the delay before the sets
        // because if we execute the sets the useEffet will force the rerender and call the updateCounters again
        await delay(3);
        setTwitterCounter(Math.ceil(twitterCounter + twitter_inc));
        setYoutubeCounter(Math.ceil(youtubeCounter + youtube_inc));
        setFacebookCounter(Math.ceil(facebookCounter + facebook_inc));
      } else {
        setTwitterCounter(twitter_target);
        setYoutubeCounter(youtube_target);
        setFacebookCounter(facebook_target);
      }
    };

    updateCounters();
  }, [twitterCounter, facebookCounter, youtubeCounter]);

  return (
    <div className="container">
      <div className="counter-container">
        <i className="fab fa-twitter fa-3x"></i>
        <div className="counter">{twitterCounter}</div>
        <span>Twitter Followers</span>
      </div>

      <div className="counter-container">
        <i className="fab fa-youtube fa-3x"></i>
        <div className="counter" data-target="5000">
          {youtubeCounter}
        </div>
        <span>YouTube Subscribers</span>
      </div>

      <div className="counter-container">
        <i className="fab fa-facebook fa-3x"></i>
        <div className="counter" data-target="7500">
          {facebookCounter}
        </div>
        <span>Facebook Fans</span>
      </div>
    </div>
  );
};

export default CounterPage;
