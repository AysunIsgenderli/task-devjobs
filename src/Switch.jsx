import React from "react";
import "./App.css";
import cx from "classnames"
const Switch = ({rounded = false, isToggled, onToggle}) => {
    const sliderCX = cx('slider', {
        'rounded': rounded
    })
  return (
    <>
      <label htmlFor="" className="switch">
        <input type="checkbox"  checked= {isToggled} onChange={onToggle} />
        <span className={sliderCX} />
      </label>
    </>
  );
};
export default Switch
