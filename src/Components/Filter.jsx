import React from 'react';
import Location from '../assets/desktop/icon-location.svg';

function Filter({ darkMode, fullTimeOnly, setFullTimeOnly, handleSearch, setShowFilter }) {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${darkMode ? 'bg-gray-100 bg-opacity-90' : 'bg-black bg-opacity-50'}`}>
      <div className={`w-[90%] max-w-[350px] mx-auto p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        {/* Filter by Location */}
        <div className="flex items-center space-x-2 mb-4 h-[48px]">
          <span className={`${darkMode ? 'text-white' : 'text-blue-600'}`}>
            <img src={Location} alt="Location icon" />
          </span>
          <input
            type="text"
            placeholder="Filter by location..."
            className={`w-full h-full p-3 border rounded-lg ${darkMode ? 'bg-gray-700 text-white border-gray-600 focus:ring-gray-400' : 'bg-gray-100 text-black border-gray-300 focus:ring-blue-500'} focus:outline-none focus:ring-2`}
          />
        </div>
        <hr className={`${darkMode ? 'border-gray-600' : 'border-gray-200'}`} />

        {/* Full Time Only Checkbox */}
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="checkbox"
            className={`h-4 w-4 ${darkMode ? 'text-indigo-400' : 'text-blue-600'}`}
            checked={fullTimeOnly}
            onChange={() => setFullTimeOnly(!fullTimeOnly)}
          />
          <label className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Full Time Only</label>
        </div>

        {/* Search Button */}
        <button
          onClick={() => {
            handleSearch(); // Trigger search action
            setShowFilter(false); // Close the filter modal
          }}
          className={`w-full h-[48px] ${darkMode ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-blue-600 hover:bg-blue-500'} text-white py-3 rounded-lg flex justify-center items-center`}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Filter;
