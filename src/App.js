import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (event) => {
    const value = event.target.textContent;

    if (value === '=') {
      try {
        const result = eval(input);
        setInput(isFinite(result) ? result.toString() : 'Error');
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(prevInput => prevInput + value);
    }
  };

  const DisplayScreen = ({ value }) => {
    return (
      <div className="display-screen">
        {value || '0'}
      </div>
    );
  };

  return (
    <div className="calculator">
      <DisplayScreen value={input} />
      <div className="button-grid">
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>/</button>
        
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>*</button>
        
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>-</button>
        
        <button onClick={handleClick}>0</button>
        <button onClick={handleClick}>C</button> 
        <button onClick={handleClick}>=</button>  
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
}

export default App;
