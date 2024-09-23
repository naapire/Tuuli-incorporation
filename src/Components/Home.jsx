import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Search from '../assets/desktop/icon-search.svg';
import Location from '../assets/desktop/icon-location.svg';
import Scoot from '../assets/logos/scoot.png';
import Second from '../assets/logos/b.png';
import Vector from '../assets/logos/vector.png';
import Blue from '../assets/logos/blue.png';
import Thailand from '../assets/logos/Thailand.png';
import Germany from '../assets/logos/Germany.png';
import United from '../assets/logos/United.png';
import Group3 from '../assets/logos/Group3.png';
import Group4 from '../assets/logos/Group4.png';
import Group5 from '../assets/logos/Group5.png';
import Group6 from '../assets/logos/Group6.png';
import Group7 from '../assets/logos/Group7.png';
import IconFilter from "../assets/mobile/icon-filter.svg";
import Filter from "./Filter"; // Import the Filter component

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const navigate = useNavigate();

  // Job listings data
  const jobs = [
    { id: 1, company: 'Scoot', position: 'Senior Software Engineer', type: 'Full Time', location: 'United Kingdom', timePosted: '5d ago', logo: Scoot },
    { id: 2, company: 'Bloger', position: 'Haskell and PureScript Dev', type: 'Part Time', location: 'United States', timePosted: '20h ago', logo: Second },
    { id: 3, company: 'Vector', position: 'Midlevel Back End Engineer', type: 'Part Time', location: 'Russia', timePosted: '1d ago', logo: Vector },
    { id: 4, company: 'Office Lite', position: 'Senior Application Engineer', type: 'Full Time', location: 'Japan', timePosted: '5d ago', logo: Blue },
    { id: 5, company: 'Pod', position: 'Remote DevOps Engineer', type: 'Part Time', location: 'Thailand', timePosted: '2d ago', logo: Thailand },
    { id: 6, company: 'Creative', position: 'Desktop Support Manager', type: 'Part Time', location: 'Germany', timePosted: '5d ago', logo: Germany },
    { id: 7, company: 'Pomodoro', position: 'iOS Engineer', type: 'Full Time', location: 'United States', timePosted: '1w ago', logo: United },
    { id: 8, company: 'Film Studio', position: 'Production Manager', type: 'Full Time', location: 'South Africa', timePosted: '1w ago', logo: Group3 },
    { id: 9, company: 'Animation Studio', position: 'Senior Animator', type: 'Full Time', location: 'India', timePosted: '1w ago', logo: Group4 },
    { id: 10, company: 'Game Studio', position: 'Senior Game Developer', type: 'Full Time', location: 'Canada', timePosted: '1w ago', logo: Group5 },
    { id: 11, company: 'Data Studio', position: 'Data Scientist', type: 'Full Time', location: 'Australia', timePosted: '1w ago', logo: Group6 },
    { id: 12, company: 'Design Studio', position: 'Lead Graphic Designer', type: 'Full Time', location: 'France', timePosted: '1w ago', logo: Group7 }
  ];

  useEffect(() => {
    setFilteredJobs(jobs); // Initially show all jobs
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleFilter = () => setShowFilter(!showFilter);

  const handleSearch = () => {
    if (fullTimeOnly) {
      setFilteredJobs(jobs.filter(job => job.type === 'Full Time'));
    } else {
      setFilteredJobs(jobs); // Show all jobs if full-time filter is not selected
    }
    setShowFilter(false); // Close the filter modal after searching
  };

  const handleJobClick = () => {
    navigate('/job-detail');
  };

  return (
    <div className={darkMode ? 'bg-gray-800 text-white font-kumbh min-h-screen relative' : 'bg-customGray text-black font-kumbh min-h-screen relative'}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {showFilter && (
        <div className="fixed inset-0 z-10 bg-black opacity-50"></div> // Darkened overlay
      )}

      {/* Search Bar */}
      <div className={`-mt-7 rounded-md p-3 flex flex-wrap items-center gap-4 w-full max-w-4xl mx-auto ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
        {/* Mobile Search Layout */}
        <div className="ml-5 flex w-full justify-between sm:hidden">
          <input
            type="text"
            placeholder="Filter by title,..."
            className={`flex-grow p-2 rounded-md ${darkMode ? 'bg-transparent text-white' : 'bg-transparent text-black'} focus:outline-none focus:ring-0 border-none`}
          />
          <div className="flex items-center gap-2">
            <img src={IconFilter} alt="Filter" className="w-6 h-6" onClick={toggleFilter} />
            <img src={Search} alt="Search" className="w-6 h-6" onClick={handleSearch} />
          </div>
        </div>

        {/* Larger Screens Layout */}
        <div className="hidden sm:flex items-center gap-4 w-full">
          <img src={Search} alt="Search" />
          <input
            type="text"
            placeholder="Filter by title, companies, expertise..."
            className={`flex-grow p-2 rounded-md ${darkMode ? 'bg-transparent text-white' : 'bg-transparent text-black'} focus:outline-none focus:ring-0 border-none`}
          />
          <div className="flex items-center gap-2">
            <img src={Location} alt="Location" />
            <input
              type="text"
              placeholder="Filter by location..."
              className={`w-52 p-2 rounded-md ${darkMode ? 'bg-transparent text-white' : 'bg-transparent text-black'} focus:outline-none focus:ring-0 border-none`}
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 accent-blue-600"
              checked={fullTimeOnly}
              onChange={() => setFullTimeOnly(!fullTimeOnly)} // Toggle the full-time only filter
            />
            <span className={`text-black font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Full Time Only</span>
          </div>

          <button
            className={`py-3 px-8 rounded-md ${darkMode ? 'bg-indigo-500 text-white' : 'bg-indigo-500 text-white'} hover:bg-[#939BF4]`}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {showFilter && (
        <div className="absolute inset-0 z-20 p-4 rounded-lg shadow-lg">
          <Filter
            darkMode={darkMode}
            fullTimeOnly={fullTimeOnly}
            setFullTimeOnly={setFullTimeOnly} 
            handleSearch={handleSearch} 
            setShowFilter={setShowFilter} // Pass setShowFilter to Filter
          />
        </div>
      )}

      {/* Job Listings Grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 max-w-6xl mx-auto">
        {filteredJobs.map(job => (
          <div key={job.id} className="relative">
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-600 text-white' : 'bg-white text-black'} mt-6 mb-3`}>
              <img src={job.logo} alt={job.company} className="w-12 h-12 -mt-12" />
              <div className="mt-6">
                <span className="text-customBlueGray pb-5">{job.timePosted} • {job.type}</span>
                <h3 className="text-lg font-semibold mt-2 hover:text-[#939BF4] cursor-pointer" onClick={handleJobClick}>
                  {job.position}
                </h3>
                <p className="text-gray-100 dark:text-customBlueGray pb-5">{job.company}</p>
                <p className="font-light">{job.location}</p>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Home;
