import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import './AuthPages.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Navigate to registration as a demo for now
    navigate('/register');
  };

  return (
    <div className="auth-page">
      <div className="auth-header">
        <h1 className="auth-title">Welcome Back!</h1>
        <p className="auth-subtitle">Securely manage your saving and loans dashboard</p>
      </div>

      <form className="auth-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <div className="input-container">
            <User className="input-icon" size={20} />
            <input 
              type="email" 
              id="email" 
              className="form-input" 
              placeholder="Email" 
              required 
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <div className="input-container">
            <Lock className="input-icon" size={20} />
            <input 
              type={showPassword ? 'text' : 'password'} 
              id="password" 
              className="form-input" 
              placeholder="Password" 
              required 
            />
            <button 
              type="button" 
              className="input-icon-right" 
              onClick={() => setShowPassword(!showPassword)}
              style={{ background: 'none', border: 'none', padding: 0 }}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="auth-actions">
          <Link to="/forgot-password" className="auth-link">Forget Password?</Link>
        </div>

        <button type="submit" className="btn-primary">Sign in</button>
      </form>

      <div className="auth-divider">OR</div>

      <div className="auth-footer">
        Not a member yet? <Link to="/register">Register Account</Link>
      </div>
    </div>
  );
};

export default Login;
