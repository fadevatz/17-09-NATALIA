import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, MapPin, Video, Award, Heart } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section
      id="hero"
      style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--nude-bg) 0%, #F5ECE0 100%)',
      }}
    >
      {/* Decorative Blur Spheres */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 163, 164, 0.12) 0%, rgba(250, 245, 238, 0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217, 107, 67, 0.1) 0%, rgba(250, 245, 238, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'center' }}>
          {/* Left Column: Text & Hero Offer */}
          <div>
            {/* Top Badge */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
              <span className="badge badge-teal">
                <Sparkles size={14} />
                <span>Psicóloga & Psicodramatista</span>
              </span>
              <span className="badge badge-terracotta">
                <ShieldCheck size={14} />
                <span>CRP: 06/136391</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
                letterSpacing: '-0.02em',
                marginBottom: '20px',
                color: 'var(--petrol-dark)',
                lineHeight: 1.15,
              }}
            >
              Espaço de Acolhimento, Autoconhecimento e <span style={{ color: 'var(--teal-primary)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>Transformação Humana</span>
            </h1>

            {/* Inspirational Slogan Quote */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                borderLeft: '4px solid var(--terracotta-primary)',
                padding: '14px 20px',
                borderRadius: '0 12px 12px 0',
                marginBottom: '28px',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <p className="serif-quote" style={{ fontSize: '1.25rem', color: 'var(--petrol-dark)', fontWeight: 600, margin: 0 }}>
                “💙 Amar e mudar as coisas me interessam mais.”
              </p>
            </div>

            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '36px' }}>
              A psicoterapia é um caminho seguro para ressignificar dores, fortalecer sua autoestima e alinhar sua trajetória pessoal e profissional com aquilo que realmente importa para você.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
              <button onClick={onOpenBooking} className="btn btn-terracotta" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>
                <MessageCircle size={22} />
                <span>Agendar Consulta WhatsApp</span>
              </button>
              <a href="#atuacao" className="btn btn-outline-petrol" style={{ padding: '18px 32px', fontSize: '1.05rem' }}>
                <span>Ver Áreas de Atuação</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Quick Guarantees / Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', borderTop: '1px solid rgba(30,53,69,0.1)', paddingTop: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Video size={20} color="var(--teal-primary)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--petrol-dark)' }}>Atendimento On-line</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={20} color="var(--terracotta-primary)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--petrol-dark)' }}>Atendimento Presencial</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Award size={20} color="var(--teal-dark)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--petrol-dark)' }}>Orientação de Carreira</span>
              </div>
            </div>
          </div>

          {/* Right Column: Natália's Portrait Card */}
          <div style={{ position: 'relative' }}>
            {/* Main Photo Card Frame */}
            <div
              style={{
                position: 'relative',
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '6px solid #FFFFFF',
                backgroundColor: 'var(--nude-card)',
              }}
            >
              <img
                src="/assets/images/natalia-portrait-cyan.png"
                alt="Psicóloga Natália Bezerra de Souza"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '560px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Bottom Gradient Overlay with Label */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(180deg, rgba(30, 53, 69, 0) 0%, rgba(30, 53, 69, 0.9) 100%)',
                  padding: '32px 24px 24px 24px',
                  color: '#FFFFFF',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Heart size={16} fill="var(--coral-accent)" color="var(--coral-accent)" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--coral-accent)' }}>
                    Projeto Ludicamente
                  </span>
                </div>
                <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-heading)' }}>
                  Natália Bezerra de Souza
                </h3>
                <p style={{ fontSize: '0.875rem', opacity: 0.9, margin: 0 }}>
                  Psicóloga Clínica • Psicodramatista • CRP 06/136391
                </p>
              </div>
            </div>

            {/* Floating Floating Accent Badge */}
            <div
              className="glass-card floating-elem"
              style={{
                position: 'absolute',
                top: '30px',
                left: '-24px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--teal-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--teal-primary)',
                }}
              >
                <Sparkles size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--petrol-dark)' }}>Abordagem Leve & Profunda</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Psicodrama & Acolhimento</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
