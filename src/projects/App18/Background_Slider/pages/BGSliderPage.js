import { useState, useEffect } from "react";

import "./index.css";

const BGSliderPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const img_list = [
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
    "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
    "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  ];

  useEffect(() => {
    setBgToBody();
  }, [activeSlide]);

  const handleRightClick = (e) => {
    if (activeSlide + 1 > img_list.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const handleLeftClick = (e) => {
    if (activeSlide + 1 < 0) {
      setActiveSlide(img_list.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  const setBgToBody = () => {
    const body = document.body;

    body.style.backgroundImage = "url(" + img_list[activeSlide] + ")";
  };

  const renderedImgs = img_list.map((img, idx) => {
    return (
      <div
        key={idx}
        className={`slide ${activeSlide === idx ? "active" : ""}`}
        style={{ backgroundImage: "url(" + img + ")" }}
      />
    );
  });

  return (
    <div className="slider-container">
      {renderedImgs}

      <button onClick={handleLeftClick} className="arrow left-arrow" id="left">
        <i className="fas fa-arrow-left"></i>
      </button>
      <button
        onClick={handleRightClick}
        className="arrow right-arrow"
        id="right"
      >
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default BGSliderPage;
