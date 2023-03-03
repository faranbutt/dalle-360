// import React, { useState } from "react";

// function ViewTypeDropdown() {
//   const [viewType, setViewType] = useState("");
//   const [environmentType, setEnvironmentType] = useState("");
//   const [furnitureOptions, setFurnitureOptions] = useState([]);

//   const handleViewTypeChange = (e) => {
//     setViewType(e.target.value);

//     if (e.target.value === "panoramic-view" || e.target.value === "wide-angle-view") {
//       setEnvironmentType("luxury-house");
//     } else {
//       setEnvironmentType("");
//       setFurnitureOptions([]);
//     }
//   };

//   const handleEnvironmentTypeChange = (e) => {
//     setEnvironmentType(e.target.value);

//     if (e.target.value === "luxury-house") {
//       setFurnitureOptions(["plants", "sofas", "windows"]);
//     } else if (e.target.value === "office-room") {
//       setFurnitureOptions(["office-chair", "led-light", "carpet", "coffee-table"]);
//     } else {
//       setFurnitureOptions([]);
//     }
//   };

//   const handleFurnitureOptionClick = (e) => {
//     const selectedOption = e.target.value;

//     if (furnitureOptions.includes(selectedOption)) {
//       // If the option is already selected, remove it from the list
//       setFurnitureOptions(furnitureOptions.filter((option) => option !== selectedOption));
//     } else {
//       // Otherwise, add it to the list
//       setFurnitureOptions([...furnitureOptions, selectedOption]);
//     }
//   };

//   return (
//     <div className="flex flex-col space-y-4">
//       <div className="flex items-center">
//         <label htmlFor="view-type" className="mr-4">View Type:</label>
//         <select id="view-type" value={viewType} onChange={handleViewTypeChange} className="border text-black border-gray-300 rounded-md p-2">
//           <option value="">Select View Type</option>
//           <option value="panoramic-view">Panoramic View</option>
//           <option className="text-black" value="wide-angle-view">Wide Angle View</option>
//         </select>
//       </div>

//       {environmentType && (
//         <div className="flex items-center">
//           <label htmlFor="environment-type" className="mr-4">Environment Type:</label>
//           <select id="environment-type" value={environmentType} onChange={handleEnvironmentTypeChange} className="border border-gray-300 rounded-md p-2">
//           <option value="">Select Env Type</option>
//             <option value="luxury-house">Luxury House</option>
//             <option value="office-room">Office Room</option>
//           </select>
//         </div>
//       )}

//       {furnitureOptions.length > 0 && (
//         <div className="flex flex-col">
//           <label className="mb-2">Furniture Options:</label>
//           {furnitureOptions.map((option) => (
//             <div key={option} className="flex items-center">
//               <input
//                 type="checkbox"
//                 id={option}
//                 name={option}
//                 value={option}
//                 checked={furnitureOptions.includes(option)}
//                 onChange={handleFurnitureOptionClick}
//                 className="mr-2"
//               />
//               <label htmlFor={option}>{option}</label>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ViewTypeDropdown;


import React, { useState } from 'react';

const ViewTypeDropdown = () => {
  const [environment, setEnvironment] = useState('');
  const [accessories, setAccessories] = useState('');
  const [generatedOutput, setGeneratedOutput] = useState('');

  const environmentOptions = [
    { label: 'Living Room', value: 'living-room' },
    { label: 'Mountains', value: 'mountains' }
  ];

  const accessoriesOptions = {
    'living-room': [
      { label: 'Seats', value: 'seats' },
      { label: 'Coffee Table', value: 'coffee-table' },
      { label: 'Carpet', value: 'carpet' },
      { label: 'Dinner Table', value: 'dinner' },
      { label: 'Wide Windows', value: 'wide-window' },
      { label: 'Plants', value: 'plants' },
    ],
    'mountains': [
      { label: 'Sunset', value: 'sunset' },
      { label: 'Thunder Clouds', value: 'thunder-clouds' },
      { label: 'Sunrise', value: 'sunrise' },
      { label: 'Starry Night', value: 'starry-night' }
    ]
  };

  const handleEnvironmentChange = (event) => {
    setEnvironment(event.target.value);
    setAccessories('');
  };

  const handleAccessoriesChange = (event) => {
    setAccessories(event.target.value);
  };

  const handleGenerate = () => {
    setGeneratedOutput(`${environment}-${accessories}`);
  };

  return (
    <div>
      <label htmlFor="environment-select">Select Environment:</label>
      <select id="environment-select" value={environment} onChange={handleEnvironmentChange}>
        <option value="">Select an environment</option>
        {environmentOptions.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>

      {environment && (
        <div>
          <label htmlFor="accessories-select">Select Accessories:</label>
          <select id="accessories-select" value={accessories} onChange={handleAccessoriesChange}>
            <option value="">Select an accessory</option>
            {accessoriesOptions[environment].map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      )}

      <button onClick={handleGenerate}>Generate</button>
      {generatedOutput && <p>{generatedOutput}</p>}
    </div>
  );
};

export default ViewTypeDropdown;