// src/Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleScientificFunction = (func) => {
    try {
      const result = eval(func + '(' + input + ')').toString();
      setInput(result);
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:w-80 md:w-96 lg:w-1/3 xl:w-1/4 2xl:w-1/5 w-full">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full p-4 text-2xl sm:text-3xl md:text-4xl text-right border-2 border-gray-300 rounded-lg mb-6 focus:outline-none focus:border-blue-500"
        />
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">



          {/*Here you can see Clear Button code */}
          <button
            onClick={() => handleClear()}
            className="bg-red-500 text-white p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-red-400 focus:outline-none col-span-1"
          >
            C
          </button>
          <button
            onClick={() => handleClick('(')}
            className="bg-gray-300 p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-gray-200 focus:outline-none"
          >
            (
          </button>
          <button
            onClick={() => handleClick(')')}
            className="bg-gray-300 p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-gray-200 focus:outline-none"
          >
            )
          </button>
          <button
            onClick={() => handleClick('%')}
            className="bg-gray-300 p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-gray-200 focus:outline-none"
          >
            %
          </button>





          {/* From here I create  Number Buttons */}
          <button
            onClick={() => handleClick('7')}
            className="bg-gray-200 p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-gray-300 focus:outline-none"
          >
            7
          </button>
          <button
            onClick={() => handleClick('8')}
            className="bg-gray-200 p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-gray-300 focus:outline-none"
          >
            8
          </button>
          <button
            onClick={() => handleClick('9')}
            className="bg-gray-200 p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-gray-300 focus:outline-none"
          >
            9
          </button>
          <button
            onClick={() => handleClick('/')}
            className="bg-orange-400 text-white p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-orange-300 focus:outline-none"
          >
            /
          </button>

          <button
            onClick={() => handleClick('4')}
            className="bg-gray-200 p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-gray-300 focus:outline-none"
          >
            4
          </button>
          <button
            onClick={() => handleClick('5')}
            className="bg-gray-200 p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-gray-300 focus:outline-none"
          >
            5
          </button>
          <button
            onClick={() => handleClick('6')}
            className="bg-gray-200 p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-gray-300 focus:outline-none"
          >
            6
          </button>
          <button
            onClick={() => handleClick('*')}
            className="bg-orange-400 text-white p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-orange-300 focus:outline-none"
          >
            *
          </button>

          <button
            onClick={() => handleClick('1')}
            className="bg-gray-200 p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-gray-300 focus:outline-none"
          >
            1
          </button>
          <button
            onClick={() => handleClick('2')}
            className="bg-gray-200 p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-gray-300 focus:outline-none"
          >
            2
          </button>
          <button
            onClick={() => handleClick('3')}
            className="bg-gray-200 p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-gray-300 focus:outline-none"
          >
            3
          </button>
          <button
            onClick={() => handleClick('-')}
            className="bg-orange-400 text-white p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-orange-300 focus:outline-none"
          >
            -
          </button>

          <button
            onClick={() => handleClick('0')}
            className="bg-gray-200 p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-gray-300 focus:outline-none"
          >
            0
          </button>
          <button
            onClick={() => handleClick('.')}
            className="bg-gray-200 p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-gray-300 focus:outline-none"
          >
            .
          </button>
          <button
            onClick={() => handleEvaluate()}
            className="bg-blue-500 text-white p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-blue-400 focus:outline-none col-span-2"
          >
            =
          </button>
          <button
            onClick={() => handleClick('+')}
            className="bg-orange-400 text-white p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-orange-300 focus:outline-none"
          >
            +
          </button>

          {/* Scientific Functions */}
          <button
            onClick={() => handleScientificFunction('Math.sin')}
            className="bg-blue-300 text-white p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-blue-200 focus:outline-none"
          >
            sin
          </button>
          <button
            onClick={() => handleScientificFunction('Math.cos')}
            className="bg-blue-300 text-white p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-blue-200 focus:outline-none"
          >
            cos
          </button>
          <button
            onClick={() => handleScientificFunction('Math.tan')}
            className="bg-blue-300 text-white p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-blue-200 focus:outline-none"
          >
            tan
          </button>
          <button
            onClick={() => handleScientificFunction('Math.sqrt')}
            className="bg-blue-300 text-white p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-blue-200 focus:outline-none"
          >
            √
          </button>
          <button
            onClick={() => handleScientificFunction('Math.log')}
            className="bg-blue-300 text-white p-4 text-xl sm:text-2xl md:text-3xl rounded-lg hover:bg-blue-200 focus:outline-none"
          >
            log
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
