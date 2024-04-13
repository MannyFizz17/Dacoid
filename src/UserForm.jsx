import React, { useState } from "react";
const openLink = () => {
  window.open(
    "/Users/manas_sinha/Desktop/dacoidReact/src/page4.jsx",
    "_blank",
    "noopener,noreferrer"
  );
};

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreed: false,
  });

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

  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <div className="m-3 mb-6 border-2 w-full h-14 rounded-xl bg-zinc-200">
          <label htmlFor="firstName"></label>
          <input
            className="w-full h-14 px-4 rounded-xl bg-zinc-100 "
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="m-3 mb-6 border-2 w-full h-14 rounded-xl bg-zinc-200">
          <label htmlFor="lastName"></label>
          <input
            className="w-full h-14 px-4 rounded-xl bg-zinc-100"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
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
        <div className="m-3 mb-6 border-2 w-full h-14 rounded-xl bg-zinc-200">
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
        </div>
        <div className="m-3 w-full ">
          <label className="text-gray-500 font-light text-sm px-3">
            <input
              className="mt-2 h-5 w-5"
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              required
            />
            <span className="m-2">
              By proceeding, I agree to all{" "}
              <a href="" className=" underline text-indigo-400">
                T&C
              </a>{" "}
              and{" "}
              <a href="" className=" underline text-indigo-400">
                Privacy Policy
              </a>
            </span>
          </label>
        </div>
        <button
          onClick={openLink}
          className="w-screen m-6 rounded-lg py-3 px-6 bg-gradient-to-r from-blue-300 to-indigo-400 text-white font-semibold shadow-lg hover:from-blue-400 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Create an Account
        </button>
      </form>
    </>
  );
};

export default UserForm;
