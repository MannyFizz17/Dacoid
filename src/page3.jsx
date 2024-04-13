import React from "react";
import { SocialIcon } from "react-social-icons";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const openGoogleLink = () => {
  window.open("https://www.google.com", "_blank", "noopener,noreferrer");
};
const openFacebookLink = () => {
  window.open("https://www.facebook.com", "_blank", "noopener,noreferrer");
};

import UserForm from "./UserForm";


function page3() {
  return (
    <div className="bg-white">
      <div className="my-8 mx-3">
        <h1 className="font-semibold text-2xl bol">Create an account</h1>
      </div>
      <div>
        <UserForm />
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
        <h1>
          Already have an account?{" "}
          <a href="" className=" underline text-indigo-400">
            Login
          </a>
        </h1>
      </div>
    </div>
  );
}

export default page3;
