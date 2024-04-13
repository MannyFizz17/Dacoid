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
import CircleButton2 from "./CircleButton2";

function page6() {
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
          <h1 className=" text-4xl text-center">Workout Tracker</h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-center items-center m-3 w-full">
        <img
          className="md:w-full md:h-48 lg:h-96"
          src="src/Chart1.png"
          alt="chart.png"
        />
      </div>
      <div className="flex mt-8 p-0 h-24 w-full text-lg border-1 border-gray-400 bg-gradient-to-r from-indigo-200 to-white rounded-xl">
        <button className="social-button p-4 text-indigo-400 font-bold text-4xl">
          <BsExclamationTriangle />
        </button>
        <div className="inline pt-5">
          {" "}
          You've burned fewer calories than yesterday. Time to get moving!
        </div>

        {/* <h1>
        You've burned fewer calories than yesterday. Time to get moving! 
        </h1> */}
      </div>
      <div className="flex mt-10 h-10 text-3xl gap-80 md:gap-96">
        {/* <div className="inline-block w-72 "> */}
        <h1>Upcoming Workout</h1>
        {/* </div> */}
        {/* <div className=" inline-flex m-4 justify-end items-end text-right w-full"> */}
        <a className="text-gray-300 text-2xl" href="">
          See more
        </a>
        {/* </div> */}
      </div>
      <br />
      <div className="flex text-3xl w-full lg:w-3/4 h-28 m-4 mt-6 rounded-2xl shadow-2xl">
        <div className="m-2 rounded-full h-24 w-24 bg-indigo-100">
          <img className="text-sm h-24 w-24" src="src/3.png" alt="" />
        </div>
        <div className="block pt-3 pl-4">Full Body Workout</div>
      </div>
      <br />
      <div className="flex text-3xl w-full lg:w-3/4 h-28 m-4 mt-6 rounded-2xl shadow-2xl">
        <div className="m-2 rounded-full h-24 w-24 bg-indigo-100">
          <img
            className="text-sm rounded-full h-24 w-24"
            src="src/4.png"
            alt=""
          />
        </div>
        <div className="block pt-3 pl-4 ">Upper Body Workout</div>
      </div>
      <br />
      <h1 className="text-4xl font-medium m-5">What Do You Want To Train</h1>
      <br />
      <div className="flex gap- text-2xl w-full lg:w-3/4 h-48 m-4 mt-6 rounded-2xl shadow-2xl  bg-indigo-200">
        <div className="block pt-3 pl-4">
          <ul className=" p-2 pb-4">
            <li className=" pb-3">Full Body Workout</li>
            <li className=" pb-3">Arms</li>
            <li className=" pb-3">chest</li>
          </ul>
        </div>
        <div className=" flex justify-end items-end m-2 rounded-full h-36 w-36 bg-indigo-100">
          <img
            className="text-sm rounded-full h-36 w-36"
            src="src/5.png"
            alt="5.png"
          />
        </div>
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

export default page6;
