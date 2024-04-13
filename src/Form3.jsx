import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const openLink = () => {
  window.open(
    "/Users/manas_sinha/Desktop/dacoidReact/src/page6.jsx",
    "_blank",
    "noopener,noreferrer"
  );
};

const Form3 = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agreed: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation or submit the form data here
    console.log(formData);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      {/* <form onSubmit={handleSubmit} className="">
      <div className="m-3 mb-6 border-2 w-full h-14 rounded-xl text-">
          <label className="text-gray-500 font-light text-sm px-3">
            <span className="inline">Weight Loss</span>
            <input
              className=" flex justify-end items-end mt-2 h-5 w-5"
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              required
            />
            
          </label>
        </div>
        <div className="m-3 mb-6 border-2 w-full h-14 rounded-xl bg-zinc-200">
          <label htmlFor="email"></label>
          <input
            className="w-full h-14 px-4 rounded-xl bg-zinc-100"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative m-3 mb-6 border-2 w-full h-14 rounded-xl bg-zinc-200">
          <label htmlFor="password"></label>
          <input
            className="w-full h-14 px-4 rounded-xl bg-zinc-100"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 px-2 py-1"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <span className="m-2 ml-4">
          <a href="" className=" underline text-gray-400">
            Forgot your password?
          </a>
        </span> */}
      <div>
        <img
          className="m-4 md:w-2/3 lg:w-1/2 xl:w-2/3 w-full h-auto "
          src="src/S1.png"
          alt="Weight Loss"
        />
      </div>
      <div>
        <img
          className="m-4 md:w-2/3 lg:w-1/2 xl:w-2/3 w-full h-auto "
          src="src/S2.png"
          alt="Muscle Gain"
        />
      </div>
      <div>
        <img
          className="m-4 md:w-2/3 lg:w-1/2 xl:w-2/3 w-full h-auto "
          src="src/S3.png"
          alt="Flexibility and Mobility"
        />
      </div>
      <div>
        <img
          className="m-4 md:w-2/3 lg:w-1/2 xl:w-2/3 w-full h-auto "
          src="src/S4.png"
          alt="General Fitness"
        />
      </div>
      <div>
        <img
          className="m-4 md:w-2/3 lg:w-1/2 xl:w-2/3 w-full h-auto "
          src="src/S5.png"
          alt="Event - specific training"
        />
      </div>
      <div>
        <img
          className="m-4 md:w-2/3 lg:w-1/2 xl:w-2/3 w-full h-auto "
          src="src/S6.png"
          alt="Mindfulness and Mental Health"
        />
      </div>

      {/* </form> */}
    </>
  );
};

export default Form3;
