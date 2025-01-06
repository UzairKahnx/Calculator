import React, { useState } from 'react';
import "tailwindcss/tailwind.css";

const Calculator1 = () => {


  const [input, setInput] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    try {

      setInput(String(eval(input)));
    } catch {
      setInput('Error');
    }
  };

  const scientificFunctions = {
    sin: (x) => Math.sin(x),
    cos: (x) => Math.cos(x),
    tan: (x) => Math.tan(x),
    sqrt: (x) => Math.sqrt(x),
    log: (x) => Math.log10(x),
    ln: (x) => Math.log(x),
  };

  const handleScientificFunction = (func) => {
    try {
      const result = scientificFunctions[func](parseFloat(input));
      setInput(String(result));
    } catch {
      setInput('Error');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      <div className={`bg-white shadow-lg rounded-lg p-5 w-full max-w-sm sm:max-w-md md:max-w-lg ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <button
          onClick={toggleDarkMode}
          className="mb-4 p-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>

        <input
          type="text"
          value={input}
          readOnly
          className={`w-full p-3 mb-4 text-right ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 text-black border-gray-300'} border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
        />

        <div className="grid grid-cols-4 gap-2 mb-4">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((button) => (
            <button
              key={button}
              onClick={button === '=' ? calculateResult : () => handleInput(button)}
              className={`p-3 ${darkMode ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded hover:${darkMode ? 'bg-blue-800' : 'bg-blue-600'}`}
            >
              {button}
            </button>
          ))}
        </div>



        <div className="grid grid-cols-3 gap-2">
          {['sin', 'cos', 'tan', 'sqrt', 'log', 'ln', 'C'].map((func) => (
            <button
              key={func}
              onClick={func === 'C' ? clearInput : () => handleScientificFunction(func)}
              className={`p-3 ${darkMode ? 'bg-green-700' : 'bg-green-500'} text-white rounded hover:${darkMode ? 'bg-green-800' : 'bg-green-600'}`}
            >
              {func}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator1;
