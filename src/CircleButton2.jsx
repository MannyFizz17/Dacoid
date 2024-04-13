import React from "react";
import { FaSearch } from "react-icons/fa";
const openLink = () => {
  window.open(
    "/Users/manas_sinha/Desktop/dacoidReact/src/page2.jsx",
    "_blank",
    "noopener,noreferrer"
  );
};
const CircleButton2 = ({ onClick }) => {
  const circleStyle = {
    // Inner circle
    width: "90px",
    height: "90px",
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

    border: "2px solid white",
    opacity: "0.7",
    borderRadius: "50%",
    position: "absolute",
    alignItems: "center",
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
        className="inline rounded-full font-thin bg-gradient-to-r from-white to-indigo-400 w-36 h-36 m-1 p-1 pb-2 ml-80 md:ml-96 fixed bottom-0  text-4xl text-justify text-white"
      >
        <button onClick={openLink}>
          {" "}
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default CircleButton2;
