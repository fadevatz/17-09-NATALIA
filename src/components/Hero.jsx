import React from 'react';
import { MessageCircle, ShieldCheck, Sparkles, MapPin, Video, Award, Heart } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section
      id="hero"
      style={{
        paddingTop: '130px',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--nude-bg) 0%, #F5ECE0 100%)',
      }}
    >
      <div className="container">
        {/* Main Hero Panoramic Card Container */}
        <div
          style={{
            position: 'relative',
            borderRadius: '32px',
            overflow: 'hidden',
            backgroundColor: '#FAF5EE',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-lg)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: '480px',
            alignItems: 'center',
          }}
          className="hero-panoramic-card"
        >
          {/* Left Side: Content & Headline */}
          <div style={{ padding: '48px 40px', zIndex: 2 }}>
            <h1
              style={{
                fontSize: 'clamp(2.1rem, 3.5vw, 3rem)',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
                color: 'var(--petrol-dark)',
                lineHeight: 1.15,
              }}
            >
              Espaço de Acolhimento, Autoconhecimento e <span style={{ color: 'var(--teal-primary)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>Transformação Humana</span>
            </h1>

            {/* Slogan Quote */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                borderLeft: '4px solid var(--terracotta-primary)',
                padding: '12px 18px',
                borderRadius: '0 12px 12px 0',
                marginBottom: '24px',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <p className="serif-quote" style={{ fontSize: '1.15rem', color: 'var(--petrol-dark)', fontWeight: 600, margin: 0 }}>
                “💙 Amar e mudar as coisas me interessam mais.”
              </p>
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
              A psicoterapia é um caminho seguro para ressignificar dores, fortalecer sua autoestima e alinhar sua trajetória pessoal e profissional.
            </p>

            {/* CTA Button (Single button - Removed 'Ver Áreas de Atuação') */}
            <div style={{ marginBottom: '32px' }}>
              <button onClick={onOpenBooking} className="btn btn-terracotta" style={{ padding: '18px 36px', fontSize: '1.05rem', width: '100%', maxWidth: '360px' }}>
                <MessageCircle size={22} />
                <span>Agendar Consulta WhatsApp</span>
              </button>
            </div>

            {/* Service Highlights */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', borderTop: '1px solid rgba(27,53,59,0.1)', paddingTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--petrol-dark)' }}>
                <Video size={18} color="var(--teal-primary)" />
                <span>Atendimento On-line</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--petrol-dark)' }}>
                <MapPin size={18} color="var(--terracotta-primary)" />
                <span>Atendimento Presencial</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--petrol-dark)' }}>
                <Award size={18} color="var(--teal-dark)" />
                <span>Orientação de Carreira</span>
              </div>
            </div>
          </div>

          {/* Right Side: Panoramic Banner Image */}
          <div style={{ position: 'relative', height: '100%', minHeight: '400px', width: '100%', overflow: 'hidden' }}>
            <img
              src="/assets/images/natalia-wide-banner.png"
              alt="Dra. Natália Bezerra - Psicóloga"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'right center',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-panoramic-card {
            grid-template-columns: 1fr !important;
          }
          .hero-panoramic-card > div:first-child {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
