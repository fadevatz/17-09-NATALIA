import React, { useState } from 'react';
import { User, Users, Briefcase, GraduationCap, Building2, MessageCircle, ArrowUpRight, CheckCircle } from 'lucide-react';

export default function ServicesSection({ onOpenBooking }) {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'individual',
      title: 'Psicoterapia Online e Presencial',
      subtitle: 'Adolescentes, Adultos e Idosos',
      category: 'psicoterapia',
      icon: <User size={28} color="var(--teal-primary)" />,
      badge: 'Individual',
      bgTint: 'var(--teal-light)',
      description:
        'Acompanhamento terapêutico individualizado para auxiliar na elaboração de ansiedade, depressão, luto, conflitos interpessoais, autoestima e autoconhecimento profundo.',
      details: [
        'Sessões de 50 minutos semanais',
        'Modalidades Presencial (ambiente acolhedor) e On-line (plataforma segura)',
        'Especialmente adaptado para adolescentes, adultos e idosos',
        'Abordagem Psicodramática para expressão e elaboração emocional',
      ],
    },
    {
      id: 'casal',
      title: 'Psicoterapia de Casal',
      subtitle: 'Reconstrução de Vínculos & Comunicação',
      category: 'psicoterapia',
      icon: <Users size={28} color="var(--terracotta-primary)" />,
      badge: 'Relacionamentos',
      bgTint: 'var(--terracotta-light)',
      description:
        'Um espaço neutro e mediado para casais que desejam aprimorar o diálogo, superar crises interpessoais, alinhar projetos de vida e fortalecer o respeito mútuo.',
      details: [
        'Identificação de padrões de comunicação disfuncionais',
        'Mediação de conflitos sem julgamentos morais',
        'Exercícios vivenciais de empatia e escuta recíproca',
        'Atendimento On-line ou Presencial',
      ],
    },
    {
      id: 'carreira',
      title: 'Orientação Profissional e Carreira',
      subtitle: 'Individual e Grupal',
      category: 'carreira',
      icon: <Briefcase size={28} color="var(--petrol-medium)" />,
      badge: 'Orientação de Carreira',
      bgTint: 'rgba(30, 53, 69, 0.06)',
      description:
        'Suporte especializado tanto para jovens em fase de escolha universitária quanto para profissionais que buscam transição de carreira, recolocação ou propósito profissional.',
      details: [
        'Mapeamento de habilidades, interesses e valores pessoais',
        'Tomada de decisão consciente frente ao mercado de trabalho',
        'Análise de transição de carreira e planejamento de metas',
        'Formatos individualizados ou dinâmicas em grupo',
      ],
    },
    {
      id: 'grupos',
      title: 'Trabalhos com Grupos',
      subtitle: 'Vivências & Autoconhecimento Coletivo',
      category: 'carreira',
      icon: <GraduationCap size={28} color="var(--teal-dark)" />,
      badge: 'Vivências',
      bgTint: 'var(--teal-light)',
      description:
        'Grupos terapêuticos e oficinas que utilizam recursos psicodramáticos e dinâmicas de grupo para estimular a troca de experiências e o crescimento relacional.',
      details: [
        'Dinâmicas vivenciais psicodramáticas',
        'Desenvolvimento da empatia e espontaneidade relacional',
        'Troca de experiências em ambiente seguro e sigiloso',
        'Temáticas específicas ajustadas à demanda dos participantes',
      ],
    },
    {
      id: 'palestras',
      title: 'Palestras Corporativas',
      subtitle: 'Saúde Mental & Bem-estar Organizacional',
      category: 'carreira',
      icon: <Building2 size={28} color="var(--terracotta-primary)" />,
      badge: 'Empresas',
      bgTint: 'var(--terracotta-light)',
      description:
        'Palestras e workshops sob medida para empresas interessadas em promover a saúde mental dos colaboradores, gestão do estresse, resiliência e inteligência emocional.',
      details: [
        'Saúde Mental no Trabalho e Prevenção do Burnout',
        'Inteligência Emocional e Comunicação Não-Violenta',
        'Dinâmicas interativas e conteúdo embasado na Psicologia',
        'Formatos presenciais ou transmissões ao vivo para equipes',
      ],
    },
  ];

  return (
    <section id="atuacao" className="section-padding" style={{ backgroundColor: 'var(--nude-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-terracotta">Cuidado & Especialização</span>
          <h2 className="section-title">
            Áreas de <span style={{ color: 'var(--terracotta-primary)' }}>Atuação</span>
          </h2>
          <p className="section-subtitle">
            Conheça as modalidades de atendimento oferecidas pela Psicóloga Natália Bezerra para acompanhar você em cada fase de desenvolvimento.
          </p>
        </div>

        {/* Main Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '48px',
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '32px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.borderColor = 'var(--border-teal)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
            >
              <div>
                {/* Header Icon + Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      backgroundColor: service.bgTint,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {service.icon}
                  </div>
                  <span className="badge badge-petrol" style={{ fontSize: '0.75rem' }}>
                    {service.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', color: 'var(--petrol-dark)', marginBottom: '6px' }}>{service.title}</h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--teal-dark)', fontWeight: 600, marginBottom: '16px' }}>
                  {service.subtitle}
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  {service.description}
                </p>
              </div>

              {/* Action Button inside card */}
              <button
                onClick={() => setSelectedService(service)}
                className="btn btn-outline-petrol"
                style={{ width: '100%', padding: '12px 20px', fontSize: '0.9rem', justifyContent: 'space-between' }}
              >
                <span>Saber Mais & Agendar</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Banner with Official Image Reference */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '32px',
            border: '1px solid var(--border-teal)',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '32px',
            alignItems: 'center',
            boxShadow: 'var(--shadow-md)',
          }}
          className="services-banner"
        >
          <div>
            <span className="badge badge-teal" style={{ marginBottom: '12px' }}>
              Atendimento Integral
            </span>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--petrol-dark)', marginBottom: '14px' }}>
              Dúvidas sobre qual modalidade é ideal para o seu momento?
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
              Entre em contato diretamente via WhatsApp. A Dra. Natália Bezerra responderá pessoalmente para esclarecer o funcionamento e indicar o melhor caminho de acolhimento.
            </p>
            <button onClick={onOpenBooking} className="btn btn-terracotta">
              <MessageCircle size={20} />
              <span>Conversar com a Dra. Natália</span>
            </button>
          </div>

          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '2px solid var(--nude-bg)' }}>
            <img
              src="/assets/images/natalia-areas-atuacao.png"
              alt="Áreas de Atuação Natália Bezerra"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(30, 53, 69, 0.6)',
            backdropFilter: 'blur(8px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setSelectedService(null)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '28px',
              maxWidth: '580px',
              width: '100%',
              padding: '36px',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
              animation: 'float 0.3s ease-out',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '18px',
                  backgroundColor: selectedService.bgTint,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {selectedService.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--petrol-dark)' }}>{selectedService.title}</h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--teal-primary)', fontWeight: 600 }}>
                  {selectedService.subtitle}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
              {selectedService.description}
            </p>

            <div style={{ backgroundColor: 'var(--nude-bg)', padding: '20px', borderRadius: '16px', marginBottom: '28px' }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--petrol-dark)', marginBottom: '12px' }}>
                O que você pode esperar desta modalidade:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {selectedService.details.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    <CheckCircle size={18} color="var(--teal-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => {
                  const msg = `Olá, Dra. Natália! Gostaria de informações e agendamento para: ${selectedService.title}`;
                  window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`, '_blank');
                  setSelectedService(null);
                }}
                className="btn btn-terracotta"
                style={{ flex: 1 }}
              >
                <MessageCircle size={20} />
                <span>Agendar esta Modalidade</span>
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="btn btn-outline-petrol"
                style={{ padding: '12px 20px' }}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 840px) {
          .services-banner {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
