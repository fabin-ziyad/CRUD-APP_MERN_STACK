import React from "react";

const CheckboxInput = ({
  label,
  options,
  selectedOptions,
  className,
  onChange,
}) => {
  // Handler for checkbox selection
  const handleCheckboxChange = (option) => {
    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    onChange(newSelectedOptions);
  };

  return (
    <div className="py-4">
      <h6 className="flex font-sans text-sm antialiased leading-relaxed tracking-normal text-gray-600">
        {label}
      </h6>
      <div className={`grid lg:grid-cols-2  gap-x-4 gap-y-3 py-2 w-full ${className}`}>
        {options.map((option, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={option.value}
              checked={selectedOptions.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
              className=" h-4 w-4 rounded border border-gray-300 cursor-pointer"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxInput;
