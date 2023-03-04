import React, { useState } from "react";

const EnvironmentSelector = () => {
  const [environment, setEnvironment] = useState("");
  const [accessories, setAccessories] = useState([]);
  const [generatedOutput, setGeneratedOutput] = useState("");

  const environmentOptions = [
    { label: "Living Room", value: "living-room" },
    { label: "Mountains", value: "mountains" },
  ];

  const accessoriesOptions = {
    "living-room": [
      { label: "LED", value: "led" },
      { label: "Seats", value: "seats" },
      { label: "Coffee Table", value: "coffee-table" },
      { label: "Carpet", value: "carpet" },
      { label: "Dinner Table", value: "dinner" },
      { label: "Wide Windows", value: "wide-window" },
      { label: "Starry Nights", value: "starry-night" },
    ],
    mountains: [
      { label: "Sunset", value: "sunset" },
      { label: "Thunder Clouds", value: "thunder-clouds" },
      { label: "Sunrise", value: "sunrise" },
      { label: "Starry Night", value: "starry-night" },
    ],
  };

  const handleEnvironmentChange = (event) => {
    setEnvironment(event.target.value);
    setAccessories([]);
  };

  const handleAccessoriesChange = (event) => {
    const options = event.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setAccessories(selectedValues);
  };

  // Add an additional event handler to handle clicks on individual accessory options
  const handleAccessoryClick = (event) => {
    const clickedValue = event.target.value;
    const isSelected = accessories.includes(clickedValue);

    if (isSelected) {
      // Remove the clicked option from the selected options
      setAccessories(accessories.filter((value) => value !== clickedValue));
    } else {
      // Add the clicked option to the selected options
      setAccessories([...accessories, clickedValue]);
    }
  };

  const handleGenerate = () => {
    setGeneratedOutput(`${environment} ${accessories.join(", ")}`);
  };

  return (
    <div className="p-5 mb-5">
      <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <label htmlFor="environment-select">Select Environment:</label>
        <select
          id="environment-select"
          value={environment}
          onChange={handleEnvironmentChange}
        >
          <option value="">Select an environment</option>
          {environmentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {environment && (
        <div className="m-6 gap-10">
          <label>Select Accessories:</label>
          {accessoriesOptions[environment].map((option) => (
            <div className="m-3" key={option.value}>
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="checkbox"
                value={option.value}
                checked={accessories.includes(option.value)}
                onClick={handleAccessoryClick}
              />
              <label>{option.label}</label>
            </div>
          ))}
        </div>
      )}
      <div>
        <button
          onClick={handleGenerate}
          class="m-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Generate
        </button>
        {generatedOutput && <p>{generatedOutput}</p>}
      </div>
    </div>
  );
};

export default EnvironmentSelector;
