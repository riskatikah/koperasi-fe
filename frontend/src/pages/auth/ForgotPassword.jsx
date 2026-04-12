import React from 'react';
import { Link } from 'react-router-dom';
import { User, ArrowLeft } from 'lucide-react';
import './AuthPages.css';

const ForgotPassword = () => {
  const handleReset = (e) => {
    e.preventDefault();
    alert("Reset link sent to your email!");
  };

  return (
    <div className="auth-page">
      <div className="auth-header">
        <h1 className="auth-title">Forgot Password?</h1>
        <p className="auth-subtitle">
          Enter your email address and we will send you a link to reset your password.
        </p>
      </div>

      <form className="auth-form" onSubmit={handleReset}>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <div className="input-container">
            <User className="input-icon" size={20} />
            <input 
              type="email" 
              id="email" 
              className="form-input" 
              placeholder="Enter your registered email" 
              required 
            />
          </div>
        </div>

        <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }}>
          Send Reset Link
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link to="/login" className="auth-link" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <ArrowLeft size={16} /> Back to Login
        </Link>
      </div>

      <div className="auth-footer" style={{ marginTop: '3rem' }}>
        Not a member yet? <Link to="/register">Register Account</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
