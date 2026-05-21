import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HandCoins, ChevronRight } from 'lucide-react';
import './RegistrationPages.css';

const ActivateMembership = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('');

  const handlePay = () => {
    navigate('/register/payment-success');
  };

  return (
    <div className="payment-container pt-4 pb-4">
      <div className="text-center mb-6">
        <HandCoins size={64} color="var(--color-secondary)" className="mx-auto mb-4" />
        <h2 className="reg-page-title mb-2">Payment of the mandatory principal savings</h2>
        <p className="reg-page-subtitle">
          Payment of the mandatory principal savings is required to activate your account. This is a one-time payment of Rp 100,000 and must be completed within the specified time period.
        </p>
      </div>

      <div className="payment-card bg-white rounded-lg border border-gray-200 mt-6 relative overflow-hidden shadow-sm">
        <div className="timer-ribbon absolute top-0 right-0 bg-yellow-300 text-yellow-800 text-xs font-bold px-4 py-1 transform translate-x-4 translate-y-2 rotate-45 shadow">
          Choose within 00:05:04
        </div>
        
        <div className="p-6 border-b border-gray-100">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Total</p>
          <h3 className="text-3xl font-bold text-gray-800">Rp100.000</h3>
          <p className="text-xs text-gray-400 mt-1 flex items-center">
            Order ID #sample-store-16999264719 <span className="ml-1 cursor-pointer">📋</span>
          </p>
        </div>

        <div className="p-6">
          <h4 className="text-sm text-gray-500 mb-4 font-bold">All payment methods</h4>
          
          <div className="payment-methods-list border border-gray-200 rounded-md">
            
            <div className={`payment-method-item p-4 border-b border-gray-200 cursor-pointer transition-colors ${selectedMethod === 'kredivo' ? 'bg-blue-50' : 'hover:bg-gray-50'}`} onClick={() => setSelectedMethod('kredivo')}>
              <div className="flex justify-between items-center font-bold text-sm text-gray-700">
                Kredivo
                {selectedMethod === 'kredivo' ? <span className="transform rotate-180 transition-transform"><ChevronRight size={18}/></span> : <ChevronRight size={18}/>}
              </div>
              <div className="mt-2 text-primary font-bold italic text-blue-500 tracking-tighter">
                Kredivo
              </div>
              {selectedMethod === 'kredivo' && (
                <button onClick={handlePay} className="w-full bg-black text-white hover:bg-gray-800 font-bold py-3 px-4 rounded mt-4 transition-colors">
                  Pay now
                </button>
              )}
            </div>

            <div className={`payment-method-item p-4 border-b border-gray-200 cursor-pointer transition-colors ${selectedMethod === 'alfamart' ? 'bg-blue-50' : 'hover:bg-gray-50'}`} onClick={() => setSelectedMethod('alfamart')}>
              <div className="flex justify-between items-center font-bold text-sm text-gray-700">
                Alfa Group
                {selectedMethod === 'alfamart' ? <span className="transform rotate-180 transition-transform"><ChevronRight size={18}/></span> : <ChevronRight size={18}/>}
              </div>
              <div className="mt-2 flex gap-4 text-xs font-bold text-red-600">
                <span className="text-red-600">Alfamart</span>
                <span className="text-red-500">Alfamidi</span>
                <span className="text-green-600">DAN+DAN</span>
              </div>
              {selectedMethod === 'alfamart' && (
                <button onClick={handlePay} className="w-full bg-black text-white hover:bg-gray-800 font-bold py-3 px-4 rounded mt-4 transition-colors">
                  Pay now
                </button>
              )}
            </div>

            <div className={`payment-method-item p-4 cursor-pointer transition-colors ${selectedMethod === 'akulaku' ? 'bg-blue-50' : 'hover:bg-gray-50'}`} onClick={() => setSelectedMethod('akulaku')}>
              <div className="flex justify-between items-center font-bold text-sm text-gray-700">
                Akulaku PayLater
                <ChevronRight size={18}/>
              </div>
              {selectedMethod === 'akulaku' && (
                <button onClick={handlePay} className="w-full bg-black text-white hover:bg-gray-800 font-bold py-3 px-4 rounded mt-4 transition-colors">
                  Pay now
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivateMembership;
