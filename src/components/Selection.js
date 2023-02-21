
import React, { useState } from "react";
import "../styles/Selection.css";

const Selection = (props) => {
  const { selectedColor } = props;

  const [backgroundColor, setBackgroundColor] = useState('');

  return (
    <div
      className="fix-box"
      style={{ backgroundColor }}
      onClick={() => {
        setBackgroundColor(selectedColor);
      }}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;