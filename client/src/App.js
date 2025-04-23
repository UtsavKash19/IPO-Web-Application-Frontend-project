import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import ManageIPO from './components/ManageIPO';
import IPOForm from './components/IPOForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-ipo" element={<ManageIPO/>} />
        <Route path="/ipo-form" element={<IPOForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
