import "./ToggleSwitch.css";
import React, { useState, useContext } from "react";
import StyleContext from "../../contexts/StyleContext";

const ToggleSwitch = () => {
  const [isChecked, setChecked] = useState(false);
  const styleContext = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round" />
    </label>
  );
};

export default ToggleSwitch;
