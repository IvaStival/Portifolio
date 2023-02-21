import { useState } from "react";

import WaterCup from "../components/WaterCup";

import "./index.css";

const DrinkWaterPage = ({ total_cups }) => {
  const [idFull, setIdFull] = useState(-1);
  let percentageHidden = "hidden";
  let percentageHeight = 0;
  let remainedHidden = "hidden";
  let remainedHeight = 0;
  let percentage = 0;
  let liters = 0;

  // Handle that is called by the small cups with the current clicked id
  const handleHighlight = (id) => {
    setIdFull(id);
  };

  // calculate the Big Cup values to render
  const updateBigCup = () => {
    let fullCups = 0;
    // Get the total of full small cups
    renderedCups.forEach((cup) => {
      if (cup.props.highlight) {
        fullCups++;
      }
    });

    // Change the percentage values based on the fullCups
    if (fullCups === 0) {
      percentageHidden = "hidden";
      percentageHeight = 0;
    } else {
      percentageHidden = "visible";
      percentageHeight = `${(fullCups / total_cups) * 330}px`;
      percentage = `${Math.ceil((fullCups / total_cups) * 100)}%`;
    }

    // Change the remained values based on fullCup and total_cups
    if (fullCups === total_cups) {
      remainedHidden = "hidden";
      remainedHeight = 0;
    } else {
      remainedHidden = "visible";
      liters = `${total_cups * 0.25 - (250 * fullCups) / 1000}L`;
    }
  };

  // rerender small cups
  const renderSmallCups = (n) => {
    const result = [];
    for (let i = 0; i < n; ++i) {
      result.push(
        <WaterCup
          handleHighlight={handleHighlight}
          key={i}
          id={i}
          small
          highlight={i <= idFull ? true : false}
        >
          250 ml
        </WaterCup>
      );
    }

    return result;
  };

  // Call the funtions to rerender the elements
  const renderedCups = renderSmallCups(total_cups);
  updateBigCup();

  const remainedClass = { visibility: remainedHidden, height: remainedHeight };
  const percentageClass = {
    visibility: percentageHidden,
    height: percentageHeight,
  };

  return (
    <div className="container">
      <h1>Drink Water</h1>
      <h3>Goal: {total_cups * 0.25} liters</h3>

      <div className="cup">
        <div className="remained" style={remainedClass} id="remained">
          <span id="liters">{liters}</span>
          <small>Remained</small>
        </div>

        <div className="percentage" style={percentageClass} id="percentage">
          {percentage}
        </div>
      </div>

      <p className="text">
        Select how many glasses of water that you have drank
      </p>

      <div className="cups">{renderedCups}</div>
    </div>
  );
};

export default DrinkWaterPage;
