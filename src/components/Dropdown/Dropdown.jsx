import React, { useEffect } from 'react';

import './Dropdown.css'

const Dropdown = ({ options, label, setColorCode, setStorageCode }) => {
  useEffect(()=>{
    if(options.length === 1){
      if(label ==="Color:"){
        setColorCode(options[0].code)
      }else{
        setStorageCode(options[0].code)
      }
    }
  })

  const handleChange = (event) => {
    if(label ==="Color:"){
      setColorCode(event.target.value)
    }else{
      setStorageCode(event.target.value)
    }
  };

  return (
    <div className='dropdown-container'>
      <span className='dropdown-label'><label>{label}</label></span>
      <select onChange={handleChange} className='dropdown-selector'>
        {options.length === 1 ? (
          <option value={options[0].code} defaultValue>
            {options[0].name}
          </option>
        ) : (
          <>
            <option value="">Select...</option>
            {options.map((option) => (
              <option key={option.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  );
};

export default Dropdown;