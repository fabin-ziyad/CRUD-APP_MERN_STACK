import React from "react";

const RadioInput = ({
  name,
  label,
  options,
  value,
  className,
  required = false,
  disabled = false,
  onChange,
}) => {
  return (
    <div className="py-4">
      <h6 className="flex font-sans text-sm antialiased leading-relaxed tracking-normal text-gray-600">
        {label}
      </h6>
      <div className="flex justify-between gap-x-3">
        {options.map((option, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              name={name}
                value={option.value}
                checked={option.value === value}
                onChange={() => onChange(option.value)} // Updated to pass the value
              disabled={disabled}
              required={required}
              className={` h-4 w-4 rounded-full border border-gray-300 cursor-pointer ${className}`}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioInput;
