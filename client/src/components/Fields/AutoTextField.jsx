import React, { useState } from "react";

const Autosuggest = ({ suggestions, onSuggestionSelected }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);


    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    onSuggestionSelected(suggestion);
    setFilteredSuggestions([]);
  };

  return (
    <div className="relative w-full my-2 mt-2 mb-2">
      <h6 className="flex font-sans text-sm antialiased leading-relaxed tracking-normal text-gray-600">
        State
      </h6>
      <input
        type="text"
        className="w-full outline-none focus:outline-blue-300 h-[48px] w-full rounded-md px-2 text-md font-semibold text-[#6e6e6e] border border-gray-300"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here..."
      />
      <ul className="absolute w-full">
        {filteredSuggestions.map((suggestion, index) => (
          <li
            key={index}
            className="bg-gray-600 text-white"
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autosuggest;
