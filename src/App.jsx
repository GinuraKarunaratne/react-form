import React from 'react';
import './App.css';
import FormEditor from './components/FormEditor';

function App() {
  return (
    <div>
      {/* Dashboard Heading */}
      <div className="heading">
        <h7>Dashboard</h7>
      </div>
      <div className='fields'>
        <FormEditor/>
      </div>
    </div>
  );
}

export default App;