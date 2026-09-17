import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Heart, Award } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'Áreas de Atuação', href: '#atuacao' },
    { name: 'Psicodrama', href: '#psicodrama' },
    { name: 'Dúvidas (FAQ)', href: '#faq' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(250, 245, 238, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(30, 53, 69, 0.06)' : 'none',
        padding: scrolled ? '14px 0' : '22px 0',
        borderBottom: scrolled ? '1px solid rgba(30, 53, 69, 0.06)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'var(--teal-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: 'var(--shadow-teal)',
            }}
          >
            <Heart size={22} fill="#FFFFFF" />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--petrol-dark)', lineHeight: 1.1 }}>
              Natália Bezerra
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--teal-dark)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>Psicóloga & Psicodramatista</span>
              <span style={{ opacity: 0.5 }}>•</span>
              <span style={{ color: 'var(--terracotta-primary)', fontWeight: 700 }}>CRP 06/136391</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-only">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: 'var(--petrol-dark)',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--teal-primary)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--petrol-dark)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onOpenBooking}
            className="btn btn-terracotta desktop-only"
            style={{ padding: '12px 24px', fontSize: '0.9rem' }}
          >
            <MessageCircle size={18} />
            <span>Agendar Consulta</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-only-btn"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--petrol-dark)',
              cursor: 'pointer',
              padding: '8px',
              display: 'none',
            }}
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--nude-bg)',
            borderBottom: '2px solid var(--teal-primary)',
            padding: '24px',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--petrol-dark)',
                fontWeight: 600,
                fontSize: '1.1rem',
                padding: '8px 0',
                borderBottom: '1px solid rgba(30,53,69,0.06)',
              }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="btn btn-terracotta"
            style={{ width: '100%', marginTop: '8px' }}
          >
            <MessageCircle size={18} />
            <span>Agendar via WhatsApp</span>
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-only-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
