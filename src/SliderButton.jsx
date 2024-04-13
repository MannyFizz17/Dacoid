import React, { useState } from "react";

const SliderButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-6 w-6"
        checked={isChecked}
        onChange={handleChange}
      />
      <span
        className={`bg-${
          isChecked ? "indigo" : "gray"
        }-500 relative inline-block w-12 h-6 rounded-full transition-colors duration-200`}
      />
    </label>
  );
};

export default SliderButton;
