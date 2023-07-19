import React from 'react';

const Dropdown = ({ options, label, setColorCode, setStorageCode }) => {
  
  if(options.length === 1){
    if(label ==="Color:"){
      setColorCode(options[0].code)
    }else{
      setStorageCode(options[0].code)
    }
  }

  const handleChange = (event) => {
    if(label ==="Color:"){
      setColorCode(event.target.value)
    }else{
      setStorageCode(event.target.value)
    }
  };

  return (
    <div>
      <label>{label}</label>
      <select onChange={handleChange}>
        {options.length === 1 ? (
          <option value={options[0].code} selected>
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