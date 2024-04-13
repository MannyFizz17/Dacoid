import React from "react";
const openLink = () => {
  window.open(
    "/Users/manas_sinha/Desktop/dacoidReact/src/page2.jsx",
    "_blank",
    "noopener,noreferrer"
  );
};
import CircleButton from "./CircleButton";

function App() {
  return (
    <div className="bg-white">
      <div className="text-right my-3">
        {/* <a
          href="src/page2.jsx"
          className="text-indigo-300 underline md:mx-2 mx-3 underline-offset-2"
        >
          skip
        </a> */}
        <button
          onClick={openLink}
          className="text-indigo-300 underline md:mx-2 mx-3 underline-offset-2"
        >
          skip
        </button>
      </div>

      <div className="flex justify-center items-center ">
        <img src="src/1.png" alt="1.png" className="p-4 w-5/6 md:w-2/5 my-6 " />
      </div>
      <div>
        <h1 className="text-2xl m-3 ">Track Your Goal</h1>
      </div>
      <div className="mx-3 text-gray-500">
        <h1 className="text-balance">
          Don’t worry if you have trouble determining your goals, We can help
          you determine your goals and track your goals
        </h1>
        <h1></h1>
        <h1></h1>
      </div>
      <CircleButton />
    </div>
  );
}

export default App;
