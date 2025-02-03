import React, { useEffect, useState } from 'react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookieConsent') === 'true';
    if (!hasAcceptedCookies) {
      setTimeout(() => setShowConsent(true), 1000);
    }

    // Handle resize for responsive design
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.removeItem('cookieConsent');
    window.location.href = 'https://www.google.com';
  };

  if (!showConsent) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(23, 22, 26, 0.98)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(221, 4, 41, 0.15)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div 
          style={{
            padding: isMobile ? '1.25rem' : '1.75rem',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'stretch' : 'center',
            gap: isMobile ? '1.5rem' : '2rem',
            fontFamily: 'var(--mibooz-font)',
          }}
        >
          {/* Content Section */}
          <div style={{ flex: 1 }}>
            <h3 
              style={{
                color: '#ffffff',
                fontSize: isMobile ? '1.125rem' : '1.25rem',
                fontFamily: 'var(--mibooz-font-two)',
                marginBottom: '0.75rem',
                letterSpacing: '0.025em',
                fontWeight: 500,
              }}
            >
              We value your privacy
            </h3>
            <p 
              style={{
                color: '#707070',
                fontSize: isMobile ? '0.875rem' : '0.95rem',
                lineHeight: '1.6',
                margin: 0,
              }}
            >
              We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. 
              By clicking &quot;Accept&quot;, you consent to this use of cookies.
            </p>
          </div>

          {/* Buttons Section */}
          <div 
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: isMobile ? 'stretch' : 'flex-end',
              minWidth: isMobile ? 'auto' : '280px',
            }}
          >
            <button
              onClick={handleDecline}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                fontSize: '0.875rem',
                fontFamily: 'var(--mibooz-font-two)',
                letterSpacing: '0.025em',
                border: '1px solid rgba(112, 112, 112, 0.2)',
                backgroundColor: 'transparent',
                color: '#707070',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                flex: isMobile ? '1' : 'initial',
                minWidth: isMobile ? 'auto' : '120px',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(112, 112, 112, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(112, 112, 112, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(112, 112, 112, 0.2)';
              }}
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                fontSize: '0.875rem',
                fontFamily: 'var(--mibooz-font-two)',
                letterSpacing: '0.025em',
                backgroundColor: '#DD0429',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                flex: isMobile ? '1' : 'initial',
                minWidth: isMobile ? 'auto' : '120px',
                boxShadow: '0 4px 20px rgba(221, 4, 41, 0.2)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#c40324';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(221, 4, 41, 0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#DD0429';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(221, 4, 41, 0.2)';
              }}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;