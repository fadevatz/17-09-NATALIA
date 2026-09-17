import React from 'react';
import { Sparkles, Activity, RefreshCw, Feather, Check } from 'lucide-react';

export default function PsychodramaSection({ onOpenBooking }) {
  const features = [
    {
      icon: <Activity size={22} color="var(--teal-primary)" />,
      title: 'Terapia em Ação',
      desc: 'O Psicodrama transforma conversas em vivências ativas, permitindo enxergar situações sob novos ângulos.',
    },
    {
      icon: <RefreshCw size={22} color="var(--terracotta-primary)" />,
      title: 'Espontaneidade Criativa',
      desc: 'Desenvolva recursos internos para responder de forma nova e autêntica aos velhos problemas do dia a dia.',
    },
    {
      icon: <Feather size={22} color="var(--petrol-medium)" />,
      title: 'Leveza no Acolhimento ("Ludicamente")',
      desc: 'A ludicidade e o respeito ao seu tempo criam uma atmosfera segura para tocar em questões profundas com leveza.',
    },
  ];

  return (
    <section id="psicodrama" className="section-padding" style={{ backgroundColor: '#FFFFFF', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '56px', alignItems: 'center' }} className="psych-grid">
          <div>
            <span className="badge badge-teal" style={{ marginBottom: '16px' }}>
              <Sparkles size={14} />
              <span>Diferencial da Abordagem</span>
            </span>

            <h2 className="section-title" style={{ textAlign: 'left', marginTop: '12px', marginBottom: '20px' }}>
              O que é o <span style={{ color: 'var(--teal-primary)' }}>Psicodrama</span> e como ele transforma a terapia?
            </h2>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
              Criado por J. L. Moreno, o Psicodrama é uma abordagem reconhecida mundialmente que integra a fala com a ação dramática. Em vez de apenas reportar o passado ou a ansiedade, a pessoa é convidada a vivenciar e ressignificar papéis da sua vida.
            </p>

            <div
              style={{
                backgroundColor: 'var(--nude-bg)',
                padding: '24px',
                borderRadius: '20px',
                borderLeft: '4px solid var(--teal-primary)',
                marginBottom: '32px',
              }}
            >
              <p className="serif-quote" style={{ fontSize: '1.15rem', color: 'var(--petrol-dark)', margin: 0, lineHeight: 1.6 }}>
                "Um encontro de dois: olho no olho, cara a cara. E quando estiveres perto, arrancar-te-ei os olhos e colocá-los-ei no lugar dos meus..."
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px', fontWeight: 600 }}>
                — Jacob Levy Moreno (Fundador do Psicodrama)
              </div>
            </div>

            {/* Feature List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              {features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--nude-bg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {feat.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--petrol-dark)', marginBottom: '4px' }}>{feat.title}</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={onOpenBooking} className="btn btn-terracotta">
              <span>Agendar Sessão Psicodramática</span>
            </button>
          </div>

          {/* Right Column: Graphic Card */}
          <div>
            <div
              style={{
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '4px solid var(--nude-bg)',
              }}
            >
              <img
                src="/assets/images/natalia-portrait-cyan.png"
                alt="Natália Bezerra - Psicodrama"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .psych-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
