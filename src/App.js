// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmployeeDashboard from './components/EmployeeDashboard';
import EmployeeForm from './components/EmployeeForm';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeeDashboard />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
