import React from "react";

const Dropdown = ({ label, options, value, onChange, className }) => {
  const handleDropdownChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="py-4">
      <h6 className="flex font-sans text-sm antialiased leading-relaxed tracking-normal text-gray-600">
        {label}
      </h6>
      <select
        value={value}
        onChange={handleDropdownChange}
        className={`block appearance-none w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 ${className}`}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
