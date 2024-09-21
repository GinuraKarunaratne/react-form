import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FormEditor from './components/FormEditor';
import FuncMail from './components/FuncMail';

function App() {
  return (
    <Router>
      <div>
        {/* Dashboard Heading */}
        <div className="heading">
          <h7>Dashboard</h7>
        </div>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={
            <div className='fields'>
              <FormEditor />
              {/* Button to navigate to FuncMail */}
              <Link to="/func-mail">
                <button id='mail-btn'>Add email</button>
              </Link>
            </div>
          } />
          <Route path="/func-mail" element={<FuncMail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
