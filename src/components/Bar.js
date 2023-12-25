import React from "react";
import "./Bar.css";

const Bar = (props) => {
  const { index, length, color } = props;

  const barStyle = {
    height: length,
  };
  return (
    <>
      <div className="bar" style={barStyle}></div>
    </>
  );
};

export default Bar;
