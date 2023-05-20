import React, { useState, useEffect } from "react";
import data from "./data.json";
import "./App.css";
import Header from "./Header";

const lightTheme = {
  "--body-bg-color": "#f2f2f2",
  "--text-color": "rgba(110, 128, 152, 1)",
  "--color-blue": "rgba(89, 100, 224, 1)",
  "--color-position": "rgba(25, 32, 45, 1)",
  "--card-bg-color": "#ffffff",
};
const darkTheme = {
  "--body-bg-color": "rgba(18, 23, 33, 1)",
  "--text-color": "rgba(110, 128, 152, 1)",
  "--color-blue": "rgba(89, 100, 224, 1)",
  "--color-position": "#fff",
  "--card-bg-color": "rgba(25, 32, 45, 1)",
};

function App() {
  const [currentMode, setCurrentMode] = useState("light");
  const [isChecked, setIsChecked] = useState(false);
  const [index, setIndex] = useState(12);

  function loadMore(event) {
    event.preventDefault();
    setIndex(index + 12);
  }

  useEffect(() => {
    if (localStorage.getItem("mode") === "dark") {
      setCurrentMode("dark");
      setIsChecked(true);
    }
  }, []);

  useEffect(() => {
    const theme = currentMode === "light" ? lightTheme : darkTheme;

    Object.keys(theme).forEach((key) => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
  }, [currentMode]);

  const toggleTheme = () => {
    const newMode = currentMode === "light" ? "dark" : "light";
    setIsChecked(!isChecked);
    setCurrentMode(newMode);
    localStorage.setItem("mode", newMode);
  };
  return (
    <>
      <Header isChecked={isChecked} toggleTheme={toggleTheme} />
      <div className="container">
        <div className="cards">
          {data &&
            data.slice(0, index).map((card) => {
              return (
                <div className="card" key={card.id}>
                  <div className="logo">
                    <img src={card.img} />
                  </div>
                  <div className="date">
                    {" "}
                    <span className="activeTime">{card.activeTime}</span>.{" "}
                    {card.workTime}{" "}
                  </div>
                  <p className="position">{card.position}</p>
                  <span className="company">{card.company}</span>
                  <div className="country">{card.country}</div>
                </div>
              );
            })}
        </div>
        <div className="loadButton">
          {" "}
          <button onClick={(e) => loadMore(e)}>Load more</button>
        </div>
      </div>
    </>
  );
}

export default App;
