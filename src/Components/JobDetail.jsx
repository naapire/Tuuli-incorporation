import React, { useState } from "react";
import HeaderImage from "../assets/desktop/bg-pattern-header.svg"; // Replace with your header image
import ScootLogo from "../assets/logos/scoot.png";
import ScootLarge from "../assets/desktop/scootlarge.svg";
import Header from "./Header";

function JobDetail() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-700"}`}
    >
      {/* Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <div className={`mx-4 sm:mx-0`}>
        {/* Company Section */}
        <div
          className={`relative max-w-xl sm:max-w-2xl mx-auto -mt-8 p-4 sm:p-0 rounded-lg shadow-lg h-64 sm:h-auto ${darkMode ? "bg-gray-800" : "bg-white"}`}
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 sm:static sm:transform-none sm:left-0 sm:top-0">
            {/* ScootLogo for mobile view */}
            <img src={ScootLogo} alt="Scoot" className="w-16 h-auto sm:hidden" />
          </div>

          <div className="sm:flex sm:justify-between sm:items-center sm:w-full sm:pl-0 sm:pr-4 text-center sm:text-left">
            <div className="sm:flex sm:items-center">
              <div className="flex-shrink-0 sm:w-auto sm:ml-0 sm:mr-4">
                <img
                  src={ScootLarge}
                  alt="Scoot"
                  className="hidden sm:block w-32 h-auto"
                  style={{ marginLeft: "0", paddingLeft: "0" }}
                />
              </div>
              <div className="sm:pl-4">
                <h2 className="text-lg sm:text-xl font-semibold">Scoot</h2>
                <p className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  scoot.com
                </p>
              </div>
            </div>

            <div className="mt-4 sm:mt-0 sm:inline-flex sm:items-center">
              <button
                className={`py-2 px-4 text-sm rounded-md ${
                  darkMode
                    ? "bg-indigo-900 text-indigo-300"
                    : "bg-indigo-100 text-indigo-600"
                } hover:bg-[#939BF4]`}
              >
                Company Site
              </button>
            </div>
          </div>
        </div>

        {/* Space between Company Section and the rest */}
        <div className="h-4 sm:h-8"></div>

        <div
          className={`max-w-xl sm:max-w-2xl mx-auto p-4 sm:p-8 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}
        >
          {/* Job Title Section */}
          <div className="mb-8">
            <div className="sm:flex sm:justify-between sm:items-center text-left sm:text-left">
              <div>
                <p className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  1w ago • Full Time
                </p>
                <h1 className="text-lg sm:text-2xl font-bold mt-2">
                  Senior Software Engineer
                </h1>
                <p className="mt-1 text-indigo-600">United Kingdom</p>
              </div>
              <button className="mt-4 sm:mt-0 bg-indigo-600 text-white py-2 px-6 rounded-md w-full sm:w-auto hover:bg-[#939BF4]">
                Apply Now
              </button>
            </div>
            <p
              className={`mt-6 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-500"}`}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
              hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
              aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
              sollicitudin laoreet viverra, tortor libero sodales leo, eget
              blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
              potenti. Sed egestas, ante et vulputate volutpat, eros pede semper
              est, vitae luctus metus libero eu augue. Morbi purus libero,
              faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
              Praesent elementum hendrerit tortor. Sed semper lorem at felis.
              Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
              dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
              dapibus eu, fermentum et, dapibus sed, urna.
            </p>
          </div>

          {/* Requirements Section */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Requirements</h3>
            <p
              className={`mb-4 leading-relaxed ${darkMode ? "text-blue-300" : "text-gray-500"}`}
            >
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna
              a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
              libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
              varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna.
              Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget,
              gravida vitae, ultricies ac, leo. Integer leo pede, ornare a,
              lacinia eu, vulputate vel, nisl.
            </p>
            <ul
              className={`list-disc list-outside pl-4 sm:pl-8 ${darkMode ? "text-gray-300" : "text-gray-500"}`}
            >
              <li className="p-2">Morbi interdum mollis sapien. Sed.</li>
              <li className="p-2">
                Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
                pulvinar risus.
              </li>
              <li className="p-2">
                Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
                tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
              </li>
              <li className="p-2">
                Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
                tellus.
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">What You Will Do</h3>
            <p
              className={`leading-relaxed mb-4 ${darkMode ? "text-gray-300" : "text-gray-500"}`}
            >
              Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
              luctus metus libero eu augue. Morbi purus libero, faucibus
              adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
              elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
              volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
              pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
              fermentum et, dapibus sed, urna.
            </p>
            <ul
              className={`list-decimal list-outside pl-4 sm:pl-8 ${darkMode ? "text-gray-300" : "text-gray-500"}`}
            >
              <li className="p-2">Morbi interdum mollis sapien. Sed</li>
              <li className="p-2">
                Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
                pulvinar risus.
              </li>
              <li className="p-2">
                Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
                tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
              </li>
              <li className="p-2">
                Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
                tellus.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className={`mt-16 py-4 shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="max-w-xl sm:max-w-2xl mx-auto flex justify-between items-center text-center sm:text-left">
          <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Senior Software Engineer
          </p>
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-[#939BF4]">
            Apply Now
          </button>
        </div>
      </footer>
    </div>
  );
}

export default JobDetail;
