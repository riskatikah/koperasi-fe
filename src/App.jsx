import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import RegistrationLayout from './components/RegistrationLayout';

import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import RegisterStep1 from './pages/registration/RegisterStep1';
import RegisterStep2 from './pages/registration/RegisterStep2';
import RegisterStep3 from './pages/registration/RegisterStep3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Route>

        {/* Registration Routes */}
        <Route path="/register" element={<RegistrationLayout />}>
          <Route path="step-1" element={<RegisterStep1 />} />
          <Route path="step-2" element={<RegisterStep2 />} />
          <Route path="step-3" element={<RegisterStep3 />} />
          <Route index element={<Navigate to="step-1" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
