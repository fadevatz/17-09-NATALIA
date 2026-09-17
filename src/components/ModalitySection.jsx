import React, { useState } from 'react';
import { Video, MapPin, CheckCircle, Clock, ShieldCheck, Calendar, ArrowRight, MessageCircle } from 'lucide-react';

export default function ModalitySection({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('online');

  const steps = [
    {
      num: '01',
      title: 'Primeiro Contato',
      desc: 'Você envia uma mensagem no WhatsApp informando qual atendimento busca e suas dúvidas iniciais.',
    },
    {
      num: '02',
      title: 'Agendamento Flexível',
      desc: 'Alinhamos o melhor dia e horário na agenda, escolhendo entre a modalidade Presencial ou On-line.',
    },
    {
      num: '03',
      title: 'Sessão de Acolhimento',
      desc: 'Realizamos a primeira sessão para compreender suas demandas e desenhar um acompanhamento sob medida.',
    },
  ];

  return (
    <section id="modalidades" className="section-padding" style={{ backgroundColor: 'var(--nude-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-teal">Flexibilidade & Conforto</span>
          <h2 className="section-title">
            Como Funciona o <span style={{ color: 'var(--teal-primary)' }}>Atendimento?</span>
          </h2>
          <p className="section-subtitle">
            Escolha a modalidade que melhor se adapta à sua rotina e estilo de vida, com a mesma qualidade e sigilo profissional.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              padding: '6px',
              borderRadius: 'var(--radius-full)',
              display: 'inline-flex',
              gap: '8px',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-light)',
            }}
          >
            <button
              onClick={() => setActiveTab('online')}
              style={{
                padding: '12px 28px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: activeTab === 'online' ? 'var(--teal-primary)' : 'transparent',
                color: activeTab === 'online' ? '#FFFFFF' : 'var(--petrol-dark)',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
              }}
            >
              <Video size={18} />
              <span>Atendimento On-line</span>
            </button>

            <button
              onClick={() => setActiveTab('presencial')}
              style={{
                padding: '12px 28px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: activeTab === 'presencial' ? 'var(--terracotta-primary)' : 'transparent',
                color: activeTab === 'presencial' ? '#FFFFFF' : 'var(--petrol-dark)',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
              }}
            >
              <MapPin size={18} />
              <span>Atendimento Presencial</span>
            </button>
          </div>
        </div>

        {/* Tab Content Box */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '28px',
            padding: '48px',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border-light)',
            marginBottom: '64px',
          }}
        >
          {activeTab === 'online' ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }} className="tab-grid">
              <div>
                <span className="badge badge-teal" style={{ marginBottom: '16px' }}>
                  Sem barreiras geográficas
                </span>
                <h3 style={{ fontSize: '2rem', color: 'var(--petrol-dark)', marginBottom: '16px' }}>
                  Terapia On-line no Conforto do seu Espaço
                </h3>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
                  Atendimento seguro via videochamada encriptada (Google Meet / Zoom). Ideal para quem possui rotina corrida, viaja com frequência ou mora fora da cidade de São Paulo.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: 'var(--petrol-dark)' }}>
                    <CheckCircle color="var(--teal-primary)" size={20} />
                    <span><strong>Flexibilidade total:</strong> Atendimento de qualquer lugar do Brasil ou exterior.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: 'var(--petrol-dark)' }}>
                    <CheckCircle color="var(--teal-primary)" size={20} />
                    <span><strong>Sigilo protegido:</strong> Respeito estrito ao Resolução do CFP para atendimento remoto.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: 'var(--petrol-dark)' }}>
                    <CheckCircle color="var(--teal-primary)" size={20} />
                    <span><strong>Sem custos de deslocamento:</strong> Economize tempo e energia no trânsito.</span>
                  </div>
                </div>

                <button onClick={onOpenBooking} className="btn btn-teal">
                  <MessageCircle size={20} />
                  <span>Agendar Atendimento On-line</span>
                </button>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--teal-light)',
                  padding: '40px',
                  borderRadius: '24px',
                  border: '1px solid var(--border-teal)',
                }}
              >
                <h4 style={{ fontSize: '1.25rem', color: 'var(--teal-dark)', marginBottom: '16px' }}>
                  Requisitos simples para sua sessão on-line:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' }}>
                    <Clock size={18} color="var(--teal-primary)" />
                    <span>Duração média de 50 minutos por sessão</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' }}>
                    <ShieldCheck size={18} color="var(--teal-primary)" />
                    <span>Espaço privativo onde você possa falar abertamente</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' }}>
                    <Video size={18} color="var(--teal-primary)" />
                    <span>Dispositivo com câmera, microfone e boa conexão à internet</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }} className="tab-grid">
              <div>
                <span className="badge badge-terracotta" style={{ marginBottom: '16px' }}>
                  Presença & Contato
                </span>
                <h3 style={{ fontSize: '2rem', color: 'var(--petrol-dark)', marginBottom: '16px' }}>
                  Atendimento Presencial em Consultório Acolhedor
                </h3>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
                  Consultório preparado especialmente para proporcionar uma atmosfera de calma, acolhimento físico e desaceleração do ritmo urbano.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: 'var(--petrol-dark)' }}>
                    <CheckCircle color="var(--terracotta-primary)" size={20} />
                    <span><strong>Ambiente pensado com carinho:</strong> Iluminação suave e acústica isolada.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: 'var(--petrol-dark)' }}>
                    <CheckCircle color="var(--terracotta-primary)" size={20} />
                    <span><strong>Excelente localização:</strong> Fácil acesso e estacionamento próximo.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: 'var(--petrol-dark)' }}>
                    <CheckCircle color="var(--terracotta-primary)" size={20} />
                    <span><strong>Recursos Psicodramáticos:</strong> Espaço físico ideal para vivências ativas.</span>
                  </div>
                </div>

                <button onClick={onOpenBooking} className="btn btn-terracotta">
                  <MessageCircle size={20} />
                  <span>Agendar Atendimento Presencial</span>
                </button>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--terracotta-light)',
                  padding: '40px',
                  borderRadius: '24px',
                  border: '1px solid rgba(217, 107, 67, 0.2)',
                }}
              >
                <h4 style={{ fontSize: '1.25rem', color: 'var(--terracotta-primary)', marginBottom: '16px' }}>
                  Detalhes do consultório:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' }}>
                    <Calendar size={18} color="var(--terracotta-primary)" />
                    <span>Horários flexíveis mediante agendamento prévio</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' }}>
                    <MapPin size={18} color="var(--terracotta-primary)" />
                    <span>Consultório bem localizado em São Paulo / SP</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' }}>
                    <ShieldCheck size={18} color="var(--terracotta-primary)" />
                    <span>Ambiente higienizado e receptivo</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Step-by-step Process Cards */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '1.75rem', color: 'var(--petrol-dark)' }}>Passo a Passo para Iniciar sua Terapia</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {steps.map((s, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '32px 24px',
                border: '1px solid var(--border-light)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontSize: '2.5rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  color: 'var(--teal-primary)',
                  opacity: 0.25,
                  marginBottom: '12px',
                }}
              >
                {s.num}
              </div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--petrol-dark)', marginBottom: '10px' }}>{s.title}</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .tab-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
