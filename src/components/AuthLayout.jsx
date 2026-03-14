import React from 'react';
import { Outlet } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import './AuthLayout.css';

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      {/* Left side Image Pane */}
      <div className="auth-image-pane">
        <div className="auth-overlay">
          <h1>KOPERASI PT SANOH INDONESIA<br/><span>SINERGI BERSAMA</span></h1>
          <ul className="auth-contact-list">
            <li>
              <MapPin size={18} />
              <span>Jl Inti II Blok C-4 No. 10, Kawasan Industri Hyundai, Cikarang - Bekasi</span>
            </li>
            <li>
              <Mail size={18} />
              <span>@gmail.com</span>
            </li>
            <li>
              <Phone size={18} />
              <span>+62</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right side Form Pane */}
      <div className="auth-form-pane">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
