import { useState } from "react";

import "./index.css";

const ContentPage = () => {
  const [wait, setWait] = useState(true);

  const getDateSimultion = () => {
    setWait(false);
  };

  setTimeout(getDateSimultion, 2500);

  let img;
  let title;
  let excerpt;
  let profile_img;
  let name;
  let date;

  if (!wait) {
    img = (
      <img
        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
        alt=""
      />
    );
    title = "Lorem ipsum dolor sit amet.";
    excerpt =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, perferendis.";
    profile_img = (
      <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />
    );
    name = "John Doe";
    date = "Oct 08, 2020";
  }

  return (
    <div className="card">
      <div className={`card-header ${wait ? "animated-bg" : ""}`} id="header">
        {img}
      </div>
      <div className="card-content">
        <h3
          className={`card-title ${wait ? "animated-bg animated-bg-text" : ""}`}
          id="title"
        >
          {title}
        </h3>
        <p className="card-excerpt" id="excerpt">
          {excerpt}
          <span className={`${wait ? "animated-bg animated-bg-text" : ""}`}>
            &nbsp;
          </span>
          <span className={`${wait ? "animated-bg animated-bg-text" : ""}`}>
            &nbsp;
          </span>
          <span className={`${wait ? "animated-bg animated-bg-text" : ""}`}>
            &nbsp;
          </span>
        </p>
        <div className="author">
          <div className="profile-img animated-bg" id="profile_img">
            {profile_img}
          </div>
          <div className="author-info">
            <strong
              className={`${wait ? "animated-bg animated-bg-text" : ""}`}
              id="name"
            >
              {name}
            </strong>
            <small
              className={`${wait ? "animated-bg animated-bg-text" : ""}`}
              id="date"
            >
              {date}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
