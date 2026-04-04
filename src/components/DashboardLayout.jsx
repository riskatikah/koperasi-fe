import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Wallet, CreditCard, FileText, UserCircle, LogOut, Bell, Menu, ChevronLeft, ChevronRight, CheckCircle, AlertTriangle, Users, CheckSquare, Database, Archive } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  
  // Admin Accordion state
  const [openSections, setOpenSections] = useState({
    member: false,
    ls: false,
    pr: false,
    shu: false,
    transaction: false,
  });

  const toggleSection = (sec) => {
    setOpenSections(prev => ({ ...prev, [sec]: !prev[sec] }));
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/login');
  };

  const currentPath = location.pathname;
  let title = 'Portal Dashboard';
  let breadcrumb = 'Overview';

  if (currentPath.includes('/admin/ls-loans')) {
    title = 'Admin Loans Dashboard';
    breadcrumb = 'Admin / Loans';
  } else if (currentPath.includes('/saving')) {
    title = 'My Saving';
    breadcrumb = 'My Saving';
  } else if (currentPath.includes('/loans')) {
    title = 'My Loans';
    breadcrumb = 'My Loans';
  } else if (currentPath.includes('/terms')) {
    title = 'Terms & Conditions';
    breadcrumb = 'Terms & Conditions';
  } else if (currentPath.includes('/profile')) {
    title = 'My Profile';
    breadcrumb = 'My Profile';
  }

  return (
    <div className="dl-app">
      {/* Mobile Overlay */}
      <div
        className={`dl-sidebar-overlay ${isSidebarOpen ? 'open' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* ─── SIDEBAR ─────────────────────────────────────────── */}
      <aside className={`dl-sidebar ${isSidebarOpen ? 'open' : ''} ${isCollapsed ? 'collapsed' : ''}`}>

        {/* Collapse Trigger */}
        <button
          className="dl-collapse-trigger"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight size={14} strokeWidth={3} /> : <ChevronLeft size={14} strokeWidth={3} />}
        </button>

        <div className="dl-sb-logo">
          <img src={logoImg} alt="Logo" className="dl-sb-logo-img" />
          <div className="dl-sb-logo-text">
            <strong>KOPERASI SANOH</strong>
            <span>SINERGI BERSAMA</span>
          </div>
        </div>

        <nav className="dl-sb-nav">
          <div className="dl-sb-lbl">MAIN MENU</div>
          <NavLink to="/dashboard" end className={({ isActive }) => `dl-sb-item ${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)} title="Dashboard">
            <div className="dl-sb-dot"></div>
            <LayoutDashboard size={17} strokeWidth={2} />
            <span className="dl-sb-item-text">Dashboard</span>
          </NavLink>
          <NavLink to="/dashboard/saving" className={({ isActive }) => `dl-sb-item ${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)} title="My Saving">
            <div className="dl-sb-dot"></div>
            <Wallet size={17} strokeWidth={2} />
            <span className="dl-sb-item-text">My Saving</span>
          </NavLink>
          <NavLink to="/dashboard/loans" className={({ isActive }) => `dl-sb-item ${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)} title="My Loans">
            <div className="dl-sb-dot"></div>
            <CreditCard size={17} strokeWidth={2} />
            <span className="dl-sb-item-text">My Loans</span>
          </NavLink>
          <NavLink to="/dashboard/terms" className={({ isActive }) => `dl-sb-item ${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)} title="Terms & Conditions">
            <div className="dl-sb-dot"></div>
            <FileText size={17} strokeWidth={2} />
            <span className="dl-sb-item-text">Terms & Conditions</span>
          </NavLink>

          <div className="dl-sb-lbl" style={{ marginTop: 16 }}>ACCOUNT</div>
          <NavLink to="/dashboard/profile" className={({ isActive }) => `dl-sb-item ${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)} title="My Profile">
            <div className="dl-sb-dot"></div>
            <UserCircle size={17} strokeWidth={2} />
            <span className="dl-sb-item-text">My Profile</span>
          </NavLink>

          {/* ADMIN MENU (Temporary combined layout) */}
          <div className="dl-sb-lbl" style={{ marginTop: 24, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 16 }}>ADMIN OVERVIEW</div>
          <NavLink to="/dashboard/admin" end className={({ isActive }) => `dl-sb-item ${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
            <div className="dl-sb-dot"></div>
            <LayoutDashboard size={17} strokeWidth={2} />
            <span className="dl-sb-item-text">Dashboard</span>
          </NavLink>

          <div className="dl-sb-group">
            <button className={`dl-sb-parent ${openSections.member ? 'active' : ''}`} onClick={() => toggleSection('member')}>
              <div className="dl-sb-parent-left">
                <div className="dl-sb-parent-icon"><Users size={17} strokeWidth={2} /></div>
                <span className="dl-sb-item-text" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Member</span>
              </div>
            </button>
            <div className={`dl-sb-children ${openSections.member ? 'open' : ''}`}>
              <NavLink to="/dashboard/admin/members" className={({ isActive }) => `dl-sb-child ${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
                Management
              </NavLink>
              <NavLink to="/dashboard/admin/approvals" className={({ isActive }) => `dl-sb-child ${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
                Approvals
              </NavLink>
            </div>
          </div>

          <div className="dl-sb-group">
            <button className={`dl-sb-parent ${openSections.ls ? 'active' : ''}`} onClick={() => toggleSection('ls')}>
              <div className="dl-sb-parent-left">
                <div className="dl-sb-parent-icon"><Wallet size={17} strokeWidth={2} /></div>
                <span className="dl-sb-item-text" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Loans & Saving</span>
              </div>
            </button>
            <div className={`dl-sb-children ${openSections.ls ? 'open' : ''}`}>
              <NavLink to="/dashboard/admin/ls-loans" className={({ isActive }) => `dl-sb-child ${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
                Loans
              </NavLink>
              <NavLink to="/dashboard/admin/ls-savings" className={({ isActive }) => `dl-sb-child ${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
                Savings
              </NavLink>
            </div>
          </div>

          <div className="dl-sb-group">
            <button className={`dl-sb-parent ${openSections.pr ? 'active' : ''}`} onClick={() => toggleSection('pr')}>
              <div className="dl-sb-parent-left">
                <div className="dl-sb-parent-icon"><CreditCard size={17} strokeWidth={2} /></div>
                <span className="dl-sb-item-text" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Payroll</span>
              </div>
            </button>
            <div className={`dl-sb-children ${openSections.pr ? 'open' : ''}`}>
              <NavLink to="/dashboard/admin/pr-loans" className={({ isActive }) => `dl-sb-child ${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
                Loans
              </NavLink>
              <NavLink to="/dashboard/admin/pr-savings" className={({ isActive }) => `dl-sb-child ${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
                Savings
              </NavLink>
            </div>
          </div>

          <div className="dl-sb-group">
            <button className={`dl-sb-parent ${openSections.shu ? 'active' : ''}`} onClick={() => toggleSection('shu')}>
              <div className="dl-sb-parent-left">
                <div className="dl-sb-parent-icon"><LayoutDashboard size={17} strokeWidth={2} /></div>
                <span className="dl-sb-item-text" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>SHU Management</span>
              </div>
            </button>
            <div className={`dl-sb-children ${openSections.shu ? 'open' : ''}`}>
              <NavLink to="/dashboard/admin/shu-dashboard" className={({ isActive }) => `dl-sb-child ${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
                Dashboard
              </NavLink>
              <NavLink to="/dashboard/admin/shu-master" className={({ isActive }) => `dl-sb-child ${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
                Master Data
              </NavLink>
            </div>
          </div>

          <div className="dl-sb-lbl" style={{ marginTop: 16 }}>GENERAL</div>
          
          <div className="dl-sb-group">
            <button className={`dl-sb-parent ${openSections.transaction ? 'active' : ''}`} onClick={() => toggleSection('transaction')}>
              <div className="dl-sb-parent-left">
                <div className="dl-sb-parent-icon"><CheckSquare size={17} strokeWidth={2} /></div>
                <span className="dl-sb-item-text" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Transaction</span>
              </div>
            </button>
            <div className={`dl-sb-children ${openSections.transaction ? 'open' : ''}`}>
              <NavLink to="/dashboard/admin/transaction/history" className={({ isActive }) => `dl-sb-child ${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
                History
              </NavLink>
              <NavLink to="/dashboard/admin/transaction/manual" className={({ isActive }) => `dl-sb-child ${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
                Manual Payment
              </NavLink>
            </div>
          </div>

          <NavLink to="/dashboard/admin/archives" className={({ isActive }) => `dl-sb-item ${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
            <div className="dl-sb-dot"></div>
            <Archive size={17} strokeWidth={2} />
            <span className="dl-sb-item-text">Archives</span>
          </NavLink>
        </nav>

        <div className="dl-sb-footer">
          <button className="dl-sb-item logout" onClick={handleLogout} title="Log Out">
            <LogOut size={17} strokeWidth={2} />
            <span className="dl-sb-item-text" style={{ fontWeight: 700 }}>Log Out</span>
          </button>
        </div>
      </aside>

      {/* ─── MAIN CONTENT ────────────────────────────────────── */}
      <div className="dl-main-wrap">
        <header className="dl-header">
          <div className="dl-hdr-left">
            <button className="dl-mobile-toggle" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={20} strokeWidth={2.5} />
            </button>
            <span className="dl-hdr-title">{title}</span>
            <span className="dl-hdr-breadcrumb">Home / <span>{breadcrumb}</span></span>
          </div>

          <div className="dl-hdr-right">
            <div 
              className="dl-hdr-notif"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell size={16} strokeWidth={2} />
              <span className="dl-notif-dot"></span>

              {showNotifications && (
                <div className="dl-notif-dropdown" onClick={(e) => e.stopPropagation()}>
                  <div className="dl-notif-header">
                    <h4>Notifications</h4>
                    <span className="dl-notif-mark">Mark all as read</span>
                  </div>
                  <div className="dl-notif-body">
                    <div className="dl-notif-item unread">
                      <div className="dl-notif-icon success"><CheckCircle size={14} /></div>
                      <div className="dl-notif-content">
                        <p><strong>Payment Successful</strong></p>
                        <p>Your loan installment of Rp 1.005.000 has been paid.</p>
                        <span className="time">Just now</span>
                      </div>
                    </div>
                    <div className="dl-notif-item">
                      <div className="dl-notif-icon warning"><AlertTriangle size={14} /></div>
                      <div className="dl-notif-content">
                        <p><strong>Payment Due</strong></p>
                        <p>Your next loan deduction is due in 3 days.</p>
                        <span className="time">2 hours ago</span>
                      </div>
                    </div>
                    <div className="dl-notif-item">
                      <div className="dl-notif-icon info"><Bell size={14} /></div>
                      <div className="dl-notif-content">
                        <p><strong>System Update</strong></p>
                        <p>Koperasi Sanoh dashboard has been updated!</p>
                        <span className="time">1 day ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="dl-notif-footer">
                    <button>View All Notifications</button>
                  </div>
                </div>
              )}
            </div>
            <button className="dl-avatar-btn" onClick={() => navigate('/dashboard/profile')}>
              <div className="dl-avatar">RT</div>
              <div className="dl-avatar-info hidden-mobile">
                <div className="dl-avatar-name">Riska Tikah</div>
                <div className="dl-avatar-id">ID: 123-32747</div>
              </div>
            </button>
          </div>
        </header>

        <main className="dl-content">
          <Outlet />
        </main>
      </div>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/1234567890" className="dl-floating-wa" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 32 32" width="26" height="26" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.3 2 2 8.3 2 16c0 2.5.7 4.8 1.8 6.8L2 30l7.4-1.8C11.3 29.3 13.6 30 16 30c7.7 0 14-6.3 14-14S23.7 2 16 2zm-3.7 7.5c-.3 0-.7.1-1 .5-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.5 5.4 4.8 3.2 1.3 3.2.8 3.7.8.5 0 1.7-.7 1.9-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.3-.3-.2-1.7-.8-1.9-.9-.2-.1-.4-.2-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.5-1.3-.8-1.8c-.2-.4-.5-.4-.7-.4z" />
        </svg>
      </a>
    </div>
  );
};

export default DashboardLayout;
