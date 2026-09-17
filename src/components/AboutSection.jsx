import React from 'react';
import { Heart, Sparkles, CheckCircle2, Award, UserCheck, Compass } from 'lucide-react';

export default function AboutSection({ onOpenBooking }) {
  const pillars = [
    {
      icon: <Heart size={24} color="var(--terracotta-primary)" />,
      title: 'Acolhimento Humanizado',
      description: 'Espaço seguro, empático e livre de julgamentos para você expressar suas angústias com tranquilidade.',
    },
    {
      icon: <Sparkles size={24} color="var(--teal-primary)" />,
      title: 'Abordagem Psicodramática',
      description: 'Uso da espontaneidade, ação e dinâmicas criativas para ressignificar papéis e conflitos emocionais.',
    },
    {
      icon: <Compass size={24} color="var(--petrol-medium)" />,
      title: 'Propósito & Carreira',
      description: 'Orientação focada no alinhamento de vocação, satisfação profissional e tomada de decisões conscientes.',
    },
    {
      icon: <UserCheck size={24} color="var(--teal-dark)" />,
      title: 'Ética & Sigilo Rigoroso',
      description: 'Atendimento ético fundamentado no Código de Ética Profissional e regulamentado pelo CRP 06/136391.',
    },
  ];

  return (
    <section id="sobre" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '56px', alignItems: 'center' }} className="about-grid">
          {/* Left Column: Image Card */}
          <div>
            <div
              style={{
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '4px solid var(--nude-bg)',
                position: 'relative',
              }}
            >
              <img
                src="/assets/images/natalia-portrait-nude.png"
                alt="Quem é a psicóloga Natália Bezerra?"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          {/* Right Column: Bio & Text */}
          <div>
            <span className="badge badge-teal" style={{ marginBottom: '16px' }}>
              <Award size={14} />
              <span>Conheça a Profissional</span>
            </span>

            <h2 className="section-title" style={{ textAlign: 'left', marginTop: '12px', marginBottom: '24px' }}>
              Quem é a Psicóloga <br />
              <span style={{ color: 'var(--teal-primary)' }}>Natália Bezerra?</span>
            </h2>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              Olá! Sou <strong>Natália Bezerra de Souza</strong>, Psicóloga Clínica (CRP 06/136391) e Psicodramatista. Acredito profundamente no poder da escuta atenta e do vínculo terapêutico como agentes de transformação na vida das pessoas.
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '32px' }}>
              Através do projeto <strong>Ludicamente</strong>, busco integrar a teoria psicológica com técnicas vivenciais que desenvolvem a espontaneidade e a criatividade. Seja no atendimento presencial ou on-line, meu compromisso é caminhar ao seu lado para que você encontre clareza, equilíbrio emocional e autonomia.
            </p>

            {/* Pillars Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '36px' }}>
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--nude-bg)',
                    padding: '20px',
                    borderRadius: '16px',
                    border: '1px solid var(--border-light)',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  <div style={{ marginBottom: '12px' }}>{pillar.icon}</div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '6px', color: 'var(--petrol-dark)' }}>{pillar.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <button onClick={onOpenBooking} className="btn btn-teal">
              <span>Fazer Primeiro Contato via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
