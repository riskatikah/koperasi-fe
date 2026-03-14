import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Handshake } from 'lucide-react';
import './RegistrationLayout.css';

const RegistrationLayout = () => {
  const location = useLocation();
  
  // Basic logic to determine step based on path
  let currentStep = 1;
  let stepName = "Identity New Member";
  
  if (location.pathname.includes('step-2')) {
    currentStep = 2;
    stepName = "Additional Information";
  } else if (location.pathname.includes('step-3')) {
    currentStep = 3;
    stepName = "Terms & Conditions";
  }

  const progressPercentage = (currentStep / 5) * 100;

  return (
    <div className="reg-layout">
      <header className="reg-header">
        <div className="reg-logo-icon">
          <Handshake size={24} />
        </div>
        <h1 className="reg-header-title">KOPERASI SANOH SINERGI BERSAMA</h1>
      </header>

      <main className="reg-content">
        <div className="reg-container">
          <div className="reg-progress-section">
            <h2 className="reg-step-title">Step {currentStep} of 5</h2>
            <div className="progress-bar-container">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="reg-step-subtitle">{stepName}</p>
          </div>

          <div className="reg-card">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegistrationLayout;
