"use client";
import React, { useState } from "react";

const DonationComponent: React.FC = () => {
  const [amount, setAmount] = useState<string>("");

  const suggestedAmounts = [150000, 100000, 90000, 80000, 70000, 50000, 10000, 5000];

  const handleSuggestedAmountClick = (value: number) => {
    setAmount(value.toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Ensure only numbers are allowed
    if (/^\d*$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4  border-gray-300">
      {/* Suggested Amount Buttons */}
      <div className="grid grid-cols-4 gap-2 w-full">
        {suggestedAmounts.map((value, index) => (
          <button
            key={index}
            onClick={() => handleSuggestedAmountClick(value)}
            className=" py-2 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 focus:ring focus:ring-blue-300"
          >
            ${value.toLocaleString()}
          </button>
        ))}
      </div>

      {/* Input Field */}
      <div className="w-full">
        <input
          type="text"
          value={amount}
          onChange={handleInputChange}
          placeholder="$0"
          className="w-full px-4 py-2 text-xl text-gray-700 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Donate Button */}
      <button
        onClick={() => alert(`You are donating $${amount}`)}
        className="w-full px-4 py-3 text-white bg-blue-800 rounded hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Donate Now
      </button>
    </div>
  );
};

export default DonationComponent;
