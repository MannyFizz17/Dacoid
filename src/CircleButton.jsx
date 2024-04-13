import React from "react";
const openLink = () => {
  window.open(
    "/Users/manas_sinha/Desktop/dacoidReact/src/page2.jsx",
    "_blank",
    "noopener,noreferrer"
  );
};
const CircleButton = ({ onClick }) => {
  const circleStyle = {
    // Inner circle
    width: "100px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  };

  const outerCircleStyle = {
    // Outer circle
    width: "60px",
    height: "60px",
    border: "2px solid #998fd9",
    opacity: "0.7",
    borderRadius: "50%",
    position: "absolute",
    bottom: "20px",
    right: "20px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    zIndex: 1,
  };

  return (
    <div style={outerCircleStyle} onClick={onClick} className="">
      <div
        style={circleStyle}
        className="inline rounded-full bg-gradient-to-r from-white to-indigo-400 w-20 h-20 m-1 p-1 pb-3 fixed bottom-0 left-0 right-0 text-4xl text-justify text-white"
      >
        <button onClick={openLink}> &gt;</button>
      </div>
    </div>
  );
};

export default CircleButton;
