import React, { useState } from 'react';

const Currency = () =>  {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  

  return (
    // <div className="alert alert-success" >
    //   <p>Selected option: {selectedOption}</p>
    //   <select value={selectedOption} onChange={handleOptionChange} className="custom-select-control">
    //     <option value="$ Dollar">$ Dollar</option>
    //     <option value="£ Pound">£ Pound</option>
    //     <option value="€ Euro">€ Euro</option>
    //     <option value="₹ Ruppee">₹ Ruppee</option>
    //   </select>
      
    // </div>
    <div className='alert alert-success'>
        <span style={{size: 100}}>Currncy</span>
        <div class="btn-group">
        

        <select value={selectedOption} onChange={handleOptionChange} class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ marginLeft: '2rem' , size: 10}}>
            <option value="£ Pound">£ Pound</option>
            <option value="$ Dollar">$ Dollar</option>
            <option value="€ Euro">€ Euro</option>
            <option value="₹ Ruppee">₹ Ruppee</option>
            
        </select>
        </div>
    </div>

    
    
  );
}

export default Currency;
