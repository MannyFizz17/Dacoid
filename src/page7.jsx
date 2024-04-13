import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import {
  FaFacebook,
  FaGoogle,
  FaHome,
  FaCamera,
  FaMale,
  FaExclamationTriangle,
  FaChartArea,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { BsExclamationTriangle } from "react-icons/bs";
const openLink = () => {
  window.open(
    "/Users/manas_sinha/Desktop/dacoidReact/src/page7.jsx",
    "_blank",
    "noopener,noreferrer"
  );
};
const openPrev = () => {
  window.open(
    "/Users/manas_sinha/Desktop/dacoidReact/src/page5.jsx",
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

import SliderButton from "./SliderButton";
import CircleButton from "./CircleButton";
import CircleButton3 from "./CircleButton3";
import CircleButton2 from "./CircleButton2";

function page7() {
  return (
    <div className="bg-white">
      <br />
      <div className="inline m-3 fixed top-6">
        <button
          onClick={openPrev}
          className="bg-gray-100 pb-1 pr-1 h-14 w-14 text-5xl font-serif"
        >
          {" "}
          &lt;
        </button>
      </div>
      <div className="my-5 mx-3">
        <div className="inline">
          <h1 className=" text-4xl text-center">Workout Schedule</h1>
        </div>
      </div>
      <div className="text-center text-2xl">
        <h1>&lt; Feb 2024 &gt;</h1>
      </div>
      <br />
      <div className="flex justify-center items-center m-3 w-full">
        <img
          className="md:w-full md:h-48 lg:h-96"
          src="src/Cal.png"
          alt="chart.png"
        />
      </div>
      <div className="text-xl">
        <h1 className="m-3">06:00 AM</h1>
        <hr />
        <h1 className="m-3">07:00 AM</h1>
        <hr />
        <h1 className="m-3">08:00 AM</h1>
        <hr />
        <h1 className="m-3">09:00 AM</h1>
        <hr />
        <h1 className="m-3">10:00 AM</h1>
        <hr />
        <h1 className="m-3">11:00 AM</h1>
        <hr />
        <h1 className="m-3">12:00 PM</h1>
        <hr />
        <h1 className="m-3">01:00 PM</h1>
        <hr />
        <h1 className="m-3">02:00 PM</h1>
        <hr />
        <h1 className="m-3">03:00 PM</h1>
        <hr />
        <h1 className="m-3">04:00 PM</h1>
        <hr />
        <h1 className="m-3">05:00 PM</h1>
        <hr />
        <CircleButton3 />
      </div>

      <div className="w-full h-36 z-10 fixed bottom-0 left-0 right-0 bg-white text-3xl text-center">
        <CircleButton2 />
        <div className="inline-flex text-3xl left-0 ml-0">
          <button className="w-40 h-40 text-5xl text-center ">
            <FaHome />
          </button>
        </div>
        <div className="inline-flex text-3xl left-0 ml-0 gap-7">
          <button className="w-40 h-40 text-5xl text-center ">
            <FaChartArea />
          </button>
        </div>
        <div className="inline-flex text-3xl left-0 ml-0">
          <button className="w-40 h-40 text-5xl text-center ">
            <FaCamera />
          </button>
        </div>
        <div className="inline-flex text-3xl left-0 ml-0">
          <button className="w-40 h-40 text-5xl text-center ">
            <IoPerson />
          </button>
        </div>
      </div>
    </div>
  );
}

export default page7;
