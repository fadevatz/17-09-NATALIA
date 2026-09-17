import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '85vh',
        marginTop: '80px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#F5ECE0',
      }}
    >
      {/* Background Banner Image spanning 100% width */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/assets/images/natalia-wide-banner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      />

      {/* Gradient Mask to ensure high text contrast on the left */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, rgba(245, 236, 224, 0.95) 0%, rgba(245, 236, 224, 0.85) 45%, rgba(245, 236, 224, 0.1) 75%, rgba(245, 236, 224, 0) 100%)',
          zIndex: 2,
        }}
        className="hero-overlay-mask"
      />

      {/* Content Overlay */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 3,
          paddingTop: '60px',
          paddingBottom: '60px',
        }}
      >
        <div style={{ maxWidth: '620px' }}>
          {/* Logo / Brand Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'var(--teal-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
              }}
            >
              <Heart size={20} fill="#FFFFFF" />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--petrol-dark)', lineHeight: 1.1 }}>
                Natália Bezerra
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--teal-dark)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Psicóloga & Psicodramatista
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
              color: 'var(--petrol-dark)',
              lineHeight: 1.15,
            }}
          >
            Encontre o Equilíbrio <br />
            <span style={{ color: 'var(--teal-primary)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
              Que Você Merece
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '28px',
            }}
          >
            Manter o equilíbrio emocional e a qualidade de vida que você merece é possível com um acompanhamento psicológico personalizado, empático e humanizado.
          </p>

          {/* Quote Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.9)',
              borderLeft: '4px solid var(--terracotta-primary)',
              padding: '10px 18px',
              borderRadius: '0 12px 12px 0',
              marginBottom: '36px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <span className="serif-quote" style={{ fontSize: '1.05rem', color: 'var(--petrol-dark)', fontWeight: 600 }}>
              “💙 Amar e mudar as coisas me interessam mais.”
            </span>
          </div>

          {/* CTA Button styled like reference */}
          <div>
            <button
              onClick={onOpenBooking}
              className="btn btn-terracotta"
              style={{
                padding: '20px 42px',
                fontSize: '1.1rem',
                borderRadius: 'var(--radius-full)',
                boxShadow: '0 12px 30px rgba(217, 107, 67, 0.4)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              <MessageCircle size={22} />
              <span>AGENDE SUA CONSULTA</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero {
            min-height: auto !important;
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          .hero-overlay-mask {
            background: linear-gradient(180deg, rgba(245, 236, 224, 0.96) 0%, rgba(245, 236, 224, 0.88) 100%) !important;
          }
        }
      `}</style>
    </section>
  );
}
