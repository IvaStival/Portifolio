import { useEffect, useState } from "react";

import "./index.css";

const ClockPage = () => {
  const [darkMode, setDarkMode] = useState("Dark Mode");
  const [hoursDeg, setHoursDeg] = useState(0);
  const [minutesDeg, setMinutesDeg] = useState(0);
  const [secondsDeg, setSecondsDeg] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [date, setDate] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinutes] = useState(0);

  const ampm = `${hour >= 12 ? "PM" : "AM"}`;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const interval = setInterval(setTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (e) => {
    const html = document.querySelector("html");

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setDarkMode("Dark Mode");
    } else {
      html.classList.add("dark");
      setDarkMode("Light Mode");
    }
  };

  // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }

  const setTime = () => {
    const time = new Date();

    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    setHoursDeg(scale(hoursForClock, 0, 11, 0, 360));
    setMinutesDeg(scale(minutes, 0, 59, 0, 360));
    setSecondsDeg(scale(seconds, 0, 59, 0, 360));
    setMonth(month);
    setDay(day);
    setDate(date);
    setHour(hours);
    setMinutes(minutes);
  };

  return (
    <div className="container">
      <button onClick={handleClick} className="toggle">
        {darkMode}
      </button>

      <div className="clock-container">
        <div className="clock">
          <div
            className="needle hour"
            style={{
              transform: `translate(-50%, -100%) rotate(${hoursDeg}deg)`,
            }}
          ></div>
          <div
            className="needle minutes"
            style={{
              transform: `translate(-50%, -100%) rotate(${minutesDeg}deg)`,
            }}
          ></div>
          <div
            className="needle second"
            style={{
              transform: `translate(-50%, -100%) rotate(${secondsDeg}deg)`,
            }}
          ></div>
          <div className="center-point"></div>
        </div>

        <div className="time">
          {`${hour >= 13 ? hour % 12 : hour}`}:
          {`${minute < 10 ? "0" + minute : minute} ${ampm}`}
        </div>
        <div className="date">
          {days[day]}, {months[month]} <span className="circle">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default ClockPage;
