import React from "react";
import "./App.css";
import cx from "classnames";
const Switch = ({ rounded = false, isChecked, toggleTheme }) => {
  const sliderCX = cx("slider", {
    rounded,
    active: isChecked
  });
  return (
    <>
      <label htmlFor="" className="switch" onClick={toggleTheme}>
        <input type="checkbox" checked={isChecked} onChange={toggleTheme} />
        <span className={sliderCX} />
      </label>
    </>
  );
};
export default Switch;
