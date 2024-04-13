import React from "react";
const openLink = () => {
  window.open(
    "/Users/manas_sinha/Desktop/dacoidReact/src/page3.jsx",
    "_blank",
    "noopener,noreferrer"
  );
};
function page2() {
  return (
    <div className="bg-white">
      <div className="text-right my-3">
        <button
          onClick={openLink}
          className="text-indigo-300 underline md:mx-2 mx-3 underline-offset-2"
        >
          skip
        </button>
      </div>
      <div className="flex justify-center items-center ">
        <img src="src/2.png" alt="2.png" className="p-4 w-5/6 md:w-2/5 my-6 " />
      </div>
      <div>
        <h1 className="text-2xl m-3 ">Get Burn</h1>
      </div>
      <div className="mx-3 text-gray-500">
        <h1 className="text-balance">
          Let’s keep burning to achieve your goals, it hurts only temporarily,
          if you give up now you will be in pain forever
        </h1>
      </div>
      <CircleButton />
    </div>
  );
}

export default page2;
