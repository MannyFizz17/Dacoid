import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const openLink = () => {
  window.open(
    "/Users/manas_sinha/Desktop/dacoidReact/src/page5.jsx",
    "_blank",
    "noopener,noreferrer"
  );
};

const Form2 = () => {
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
      <form onSubmit={handleSubmit} className="">
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
        </span>

        <button
          onClick={openLink}
          className="w-screen m-6 rounded-lg py-3 px-6 bg-gradient-to-r from-blue-300 to-indigo-400 text-white font-semibold shadow-lg hover:from-blue-400 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Sign In
        </button>
      </form>
    </>
  );
};

export default Form2;
