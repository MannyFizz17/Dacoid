import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { FaFacebook, FaGoogle } from "react-icons/fa";
const openLink = () => {
  window.open(
    "/Users/manas_sinha/Desktop/dacoidReact/src/page2.jsx",
    "_blank",
    "noopener,noreferrer"
  );
};
const openGoogleLink = () => {
  window.open("https://www.google.com", "_blank", "noopener,noreferrer");
};
const openFacebookLink = () => {
  window.open("https://www.facebook.com", "_blank", "noopener,noreferrer");
};

import Form2 from "./Form2";

function page4() {
  const [state, setstate] = useState();
  return (
    <div className="bg-white">
      <br />
      <div className="my-8 mx-3">
        <h1 className="font-semibold text-2xl bol">Welcome Back</h1>
      </div>
      <br />
      <div>
        <Form2 />
      </div>
      <hr className="ml-14 inline-block border-gray-400 w-5/12" />
      <h1 className="inline text-xs ml-2 mr-2.5 font-thin">Or</h1>
      <hr className="inline-block border-gray-400 w-5/12 lg:w-6/12" />
      <div className="flex justify-center items-center">
        <div className="inline m-3 p-3 h-12 w-12 text-center border border-gray-400 rounded-xl">
          <button onClick={openGoogleLink} className="social-button">
            <FaGoogle />
          </button>
        </div>
        <div className="inline m-3 p-3 h-12 w-12 text-center border border-gray-400 rounded-xl">
          <button onClick={openFacebookLink} className="social-button">
            <FaFacebook />
          </button>
        </div>
      </div>
      <br />
      <div className="text-center">
        <h1 className="underline">
          Don’t have an account yet?
          <a href="" className=" underline text-indigo-400">
            Create an account
          </a>
        </h1>
      </div>
    </div>
  );
}

export default page4;
