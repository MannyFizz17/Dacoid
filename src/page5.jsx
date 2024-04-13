import React, { useState } from "react";
const openLink = () => {
  window.open(
    "/Users/manas_sinha/Desktop/dacoidReact/src/page6.jsx",
    "_blank",
    "noopener,noreferrer"
  );
};

import Form3 from "./Form3";

function page5() {
  const [state, setstate] = useState();
  return (
    <div className="bg-white">
      <br />
      <div className="my-8 mx-3">
        <h1 className=" text-4xl text-center">What are your goals?</h1>
      </div>
      <br />
      <div>
        <Form3 />
      </div>
      <button
        onClick={openLink}
        className="w-screen h-20 fixed bottom-16 mb-1 text-4xl font-light m-6 rounded-lg py-3 px-6 bg-gradient-to-r from-blue-300 to-indigo-400 text-white shadow-lg 
          hover:from-blue-400 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Confirm
      </button>
    </div>
  );
}

export default page5;
