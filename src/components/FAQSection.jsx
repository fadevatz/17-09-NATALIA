import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export default function FAQSection({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Como funciona a primeira sessão de psicoterapia?',
      a: 'A primeira sessão é um momento de acolhimento e escuta mútua. Você compartilha os motivos que o(a) levaram a buscar atendimento, suas expectativas e dúvidas. A Dra. Natália explicará a forma de trabalho, a frequência recomendada e alinhará os detalhes práticos para o acompanhamento.',
    },
    {
      q: 'Você aceita convênio médico ou plano de saúde?',
      a: 'Os atendimentos são realizados de forma particular. No entanto, fornecemos recibo ou nota fiscal com todos os dados exigidos pelo CRP e pela Receita Federal, permitindo que você solicite o REEMBOLSO integral ou parcial junto ao seu plano de saúde.',
    },
    {
      q: 'Qual é a duração e a frequência das sessões?',
      a: 'Cada sessão de psicoterapia tem duração de 50 minutos. Habitualmente, o acompanhamento é semanal, garantindo a continuidade dos processos reflexivos e transformadores. Frequências quinzenais podem ser combinadas em fases específicas de manutenção.',
    },
    {
      q: 'O atendimento on-line é tão eficaz quanto o presencial?',
      a: 'Sim! Diversos estudos científicos e a própria regulamentação do Conselho Federal de Psicologia comprovam que a psicoterapia on-line possui a mesma eficácia que a presencial, oferecendo ainda mais flexibilidade de horário e sem a necessidade de deslocamento.',
    },
    {
      q: 'Como funciona a Orientação Profissional e de Carreira?',
      a: 'É um processo estruturado e focado na reflexão de interesses, valores pessoais e habilidades. Pode ser realizado individualmente ou em grupo, tanto para jovens na primeira escolha profissional quanto para adultos em transição de carreira.',
    },
    {
      q: 'O que é o registro CRP 06/136391 e por que ele é importante?',
      a: 'O registro no Conselho Regional de Psicologia (CRP) é a garantia oficial de que a profissional é graduada em Psicologia, cumpre rigorosamente o Código de Ética e atua sob supervisão ética das instâncias reguladoras da profissão.',
    },
  ];

  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="section-header">
          <span className="badge badge-teal">
            <HelpCircle size={14} />
            <span>Esclarecimentos</span>
          </span>
          <h2 className="section-title">
            Perguntas <span style={{ color: 'var(--teal-primary)' }}>Frequentes</span>
          </h2>
          <p className="section-subtitle">
            Confira as respostas para as principais dúvidas de quem está prestes a iniciar o processo terapêutico.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  border: isOpen ? '1px solid var(--border-teal)' : '1px solid var(--border-light)',
                  borderRadius: '20px',
                  backgroundColor: isOpen ? 'var(--teal-subtle)' : '#FFFFFF',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: 'none',
                    background: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '16px',
                  }}
                >
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--petrol-dark)' }}>{faq.q}</span>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--teal-primary)' : 'var(--nude-bg)',
                      color: isOpen ? '#FFFFFF' : 'var(--petrol-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 24px 24px',
                      color: 'var(--text-secondary)',
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      borderTop: '1px solid rgba(0, 163, 164, 0.1)',
                      paddingTop: '16px',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div
          style={{
            backgroundColor: 'var(--nude-bg)',
            borderRadius: '24px',
            padding: '32px',
            textAlign: 'center',
            border: '1px solid var(--border-medium)',
          }}
        >
          <h3 style={{ fontSize: '1.35rem', color: 'var(--petrol-dark)', marginBottom: '8px' }}>
            Tem outra dúvida específica?
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
            Envie sua pergunta diretamente para a Dra. Natália no WhatsApp e receba uma resposta atenciosa.
          </p>
          <button onClick={onOpenBooking} className="btn btn-terracotta">
            <MessageCircle size={18} />
            <span>Tirar Dúvida no WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
