import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobDetail from './Components/JobDetail';
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-detail" element={<JobDetail />} />  {/* JobDetail Route */}
      </Routes>
    </Router>
  );
}

export default App;
