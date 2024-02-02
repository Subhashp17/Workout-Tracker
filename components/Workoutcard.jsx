// @components/Workoutcard.js

"use client";
import { useState } from 'react';

const Workoutcard = ({ post, onDelete }) => {
  const { _id, workout, reps, weights } = post;

  const [isCardVisible, setIsCardVisible] = useState(true);

  const handleDelete = async () => {
    try {
      // Call the onDelete function passed from myWorkouts.js
      console.log("Check delete")
      onDelete && onDelete(_id);
    } catch (error) {
      console.error('Error deleting workout:', error);
    }
  };

  return (
    <>
      {isCardVisible && (
        <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 relative">
          <button
            onClick={handleDelete}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700 focus:outline-none"
          >
            {/* Cross mark (X) for delete */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{workout}</h2>
          <div className="flex justify-between mb-4">
            <div className="text-gray-600">Reps:</div>
            <div className="text-gray-800">{reps}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-gray-600">Weights:</div>
            <div className="text-gray-800">{weights} lbs</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Workoutcard;
