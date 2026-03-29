import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileSearch, CheckCircle2, ClipboardCheck, UserPlus, Clock, Phone } from 'lucide-react';
import './RegistrationPages.css';

const UnderReview = () => {
  const navigate = useNavigate();

  return (
    <div className="review-container pt-4 pb-4">
      <div className="text-center mb-6">
        <FileSearch size={64} className="mx-auto text-gray-400 mb-4" />
        <h2 className="reg-page-title mb-2">Registration Under Review</h2>
        <p className="reg-page-subtitle">
          Thank you for joining. We have received your documents.
          <br/>Our team is currently verifying your identity.
        </p>
      </div>

      <div className="status-timeline mt-8 mb-8">
        <div className="timeline-item completed">
          <div className="timeline-icon"><CheckCircle2 size={20} color="var(--color-secondary)" /></div>
          <div className="timeline-content">
            <h4 className="timeline-title">Sign Up Completed</h4>
            <p className="timeline-desc">Account details submitted successfully</p>
          </div>
        </div>
        
        <div className="timeline-item in-progress">
          <div className="timeline-icon timeline-line"><ClipboardCheck size={20} color="var(--color-primary)" /></div>
          <div className="timeline-content">
            <h4 className="timeline-title title-active">Verification in Progress</h4>
            <p className="timeline-desc">Checking documents and identity</p>
          </div>
        </div>

        <div className="timeline-item pending">
          <div className="timeline-icon timeline-line"><UserPlus size={20} color="var(--color-text-muted)" /></div>
          <div className="timeline-content">
            <h4 className="timeline-title title-pending">Activate Membership</h4>
            <p className="timeline-desc">Payment of the mandatory principal savings is<br/>Rp 100.000,00 required to activate your account.</p>
          </div>
        </div>
      </div>

      <div className="info-box-footer mt-6 flex justify-between bg-gray-50 p-4 rounded-md">
        <div>
          <span className="info-label text-xs font-bold text-gray-500 block mb-1 uppercase tracking-wider">Estimate Wait Time</span>
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={16} className="mr-2" /> 1-2 Business Days
          </div>
        </div>
        <div>
          <span className="info-label text-xs font-bold text-gray-500 block mb-1 uppercase tracking-wider">Support Contact</span>
          <div className="flex items-center text-sm text-gray-600">
            <Phone size={16} className="mr-2" /> 08xxxxxxxxxxx
          </div>
        </div>
      </div>

      {/* This button could ideally be enabled after review or we simulate by letting user click it anyway for demo */}
      <div className="mt-6 full-width">
        <button 
           className="btn-secondary full-width text-center"
           onClick={() => navigate('/register/activate-membership')}
        >
          Continue for payment &rarr;
        </button>
      </div>
    </div>
  );
};

export default UnderReview;
