import { useState } from "react";

import Tag from "../components/Tag";

import "./index.css";

const ChoicePage = () => {
  const [tags, setTags] = useState([]);

  // Function to handle the textarea key press
  const handleKeyUp = (event) => {
    // We get all entries on the textarea and split it using the ',' to generate a array
    // we remove all the spaces too
    const result = event.target.value
      .split(",")
      .filter((tag) => tag.trim() !== "")
      .map((tag) => tag.trim());

    // Save the array on the state "tags"
    setTags(result);

    // if we press Enter, we clean the textarea and executes the randomSelect function
    if (event.key === "Enter") {
      setTimeout(() => {
        event.target.value = "";
      }, 10);
      // call the random tags selections
      randomSelect();
    }
  };

  // With this function we get a random tag and create a selection random animation
  const randomSelect = () => {
    const times = 30;

    // Here we use setInterval that will be called every 100ms
    // This function works together with the setTimeout bellow (line 45) that wait 30s (100ms * 300) to be executed
    // And when is executed clear the interval and stop the setInterval execution

    // The idea here is get a tag handomically and change our background color, and 100ms after turn the old background-color back;
    const interval = setInterval(() => {
      const randomTag = pickRandomTag();

      highLightTag(randomTag);

      setTimeout(() => {
        unhighLightTag(randomTag);
      }, 100);
    }, 100);

    // After 30s clear the interval and choose a final tag randomically
    setTimeout(() => {
      clearInterval(interval);

      setTimeout(() => {
        const randomTag = pickRandomTag();
        highLightTag(randomTag);
      }, 100);
    }, times * 100);
  };

  // Get a handom tag
  const pickRandomTag = () => {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * renderedTags.length)];
  };

  // Add a new className to turn the background to blue
  const highLightTag = (tag) => {
    tag.classList.add("highlight");
  };

  // Remove the new className and turn back to old
  const unhighLightTag = (tag) => {
    tag.classList.remove("highlight");
  };

  // ================================ Render tag list ==================================================
  const renderedTags = tags.map((tag, id) => {
    return <Tag key={id} title={tag} />;
  });

  return (
    <div className="container">
      <h3>
        Enter all of the choices divided by a comma (',').
        <br /> Press enter when you're done
      </h3>
      <textarea
        autoFocus
        onKeyUp={handleKeyUp}
        placeholder="Enter choices here..."
        id="textarea"
      ></textarea>

      <div id="tags">{renderedTags}</div>
    </div>
  );
};

export default ChoicePage;
