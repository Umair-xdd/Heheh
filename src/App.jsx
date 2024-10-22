import React, { useState } from "react";

function App() {
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: "0%", // Initially positioned to be directly below the Yes button
    left: "0%",
  });
  const [showResult, setShowResult] = useState(false);

  // Function to move the "No" button when hovered
  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10; // Random top position
    const randomLeft = Math.floor(Math.random() * 80) + 10; // Random left position
    setNoButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  // Handle the "Yes" button click
  const handleYesClick = () => {
    setShowResult(true);
  };

  return (
    <div className="flex h-screen justify-center items-center bg-pink-100">
      <div className="relative w-64 h-64">
        {/* SVG Heart Shape */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 29.6"
          className="absolute inset-0 w-full h-full"
        >
          <path
            fill="#ff3d3d"
            d="M23.6,0c-2.9,0-5.6,1.3-7.6,3.5C14,1.3,11.3,0,8.4,0C3.8,0,0,3.8,0,8.4c0,5.7,8.3,10.6,16,17.2 c7.7-6.6,16-11.5,16-17.2C32,3.8,28.2,0,23.6,0z"
          />
        </svg>

        {/* Text inside the heart */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-2xl font-bold">Will you marry me?</h1>
          <div className="space-y-4 mt-4">
            {/* Yes Button */}
            <button
              className="bg-green-500 text-white px-8 py-2 rounded-full text-xl transition-all hover:bg-green-600"
              onClick={handleYesClick}
            >
              Yes
            </button>
            {/* No Button */}
            <button
              className="bg-red-500 text-white px-8 py-2 rounded-full text-xl transition-all"
              style={{
                position: "absolute",
                top: noButtonPosition.top,
                left: noButtonPosition.left,
              }}
              onMouseEnter={moveNoButton}
            >
              No
            </button>
          </div>
        </div>
      </div>

      {showResult && (
        <div className="absolute text-center text-4xl text-pink-600 font-bold top-20">
          🎉 She said YES! ❤️
        </div>
      )}
    </div>
  );
}

export default App;
