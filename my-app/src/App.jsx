import React from 'react';

//Router
import { Routes, Route, Navigate } from "react-router-dom";
import Login from '/src/Components/Login/Login';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
};

export default App;