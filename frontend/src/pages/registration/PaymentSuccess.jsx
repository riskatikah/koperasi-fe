import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCheck } from 'lucide-react';
import './RegistrationPages.css';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleDashboard = () => {
    // Navigate to the dashboard
    navigate('/dashboard'); 
  };

  return (
    <div className="success-container pt-8 pb-4 text-center">
      <div className="mx-auto mb-6 flex justify-center">
        <UserCheck size={80} color="var(--color-primary)" />
      </div>

      <h2 className="text-2xl font-bold bg-primary uppercase text-gray-800 tracking-wide mb-4">Account Activated!</h2>
      
      <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
        Welcome to the cooperative. Your savings account is now active. You can access your cooperative account and manage your funds through the dashboard.
      </p>

      <div className="membership-box bg-gray-50 p-6 rounded-lg text-left max-w-md mx-auto mb-8 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
        <div className="flex items-center mb-4 border-b border-gray-200 pb-2">
           <UserCheck size={20} className="mr-2 text-gray-700" />
           <h3 className="font-bold text-gray-700 uppercase tracking-widest text-sm">Membership Details</h3>
        </div>
        
        <div className="flex justify-between mt-4">
          <div>
            <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">MEMBER ID</span>
            <span className="font-bold text-gray-800 text-lg">112</span>
          </div>
          <div className="text-right">
            <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">JOIN DATE</span>
            <span className="font-bold text-gray-800 text-lg">Dec 21, 2025</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button 
           className="btn-secondary uppercase tracking-wider font-bold shadow-md hover:shadow-lg transition-shadow max-w-xs mx-auto text-sm px-6 py-3"
           onClick={handleDashboard}
        >
          Go to My Dashboard &rarr;
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
