import React from "react";

const TextInput = ({
  name,
  label,
  autoComplete,
  type = "text",
  placeholder,
  className,
  required = false,
  disabled = false,
  min = "",
  max,
  onChange,
  value,
  maxLength,
  uneditable = false,
}) => {
  return (
    <div className="py-4">
      <h6 className="flex font-sans text-sm antialiased leading-relaxed tracking-normal text-gray-600">
        {label}
      </h6>
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          min={min}
          max={max}
          autoComplete={autoComplete}
          onChange={onChange}
          value={value}
          disabled={disabled}
          required={required}
          readOnly={uneditable}
          className={`outline-none focus:outline-blue-300 h-full w-full rounded-md px-2 text-md font-semibold text-[#6e6e6e] border border-gray-300 ${className}`}
        />
      </div>
    </div>
  );
};

export default TextInput;
