import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState('Psicoterapia Individual (Online/Presencial)');
  const [patientName, setPatientName] = useState('');
  const [userMsg, setUserMsg] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    const finalMsg = `Olá, Dra. Natália! Meu nome é ${patientName || 'Cliente'}.
Gostaria de agendar uma consulta para: ${service}.
${userMsg ? `Mensagem: ${userMsg}` : ''}`;

    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div style={{ position: 'fixed', bottom: '28px', right: '28px', zIndex: 1500 }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            color: '#FFFFFF',
            border: 'none',
            boxShadow: '0 10px 30px rgba(37, 211, 102, 0.45)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          aria-label="Abrir conversa no WhatsApp"
        >
          {isOpen ? <X size={30} /> : <MessageCircle size={32} />}

          {/* Pulse Green Dot */}
          <span
            style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
              width: '14px',
              height: '14px',
              backgroundColor: '#00FF66',
              borderRadius: '50%',
              border: '2px solid #FFFFFF',
            }}
          />
        </button>
      </div>

      {/* Floating Interactive Widget Drawer */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '104px',
            right: '28px',
            width: 'calc(100vw - 56px)',
            maxWidth: '380px',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border-light)',
            zIndex: 1500,
            overflow: 'hidden',
            animation: 'float 0.3s ease-out',
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: 'var(--teal-primary)',
              color: '#FFFFFF',
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid #FFFFFF',
              }}
            >
              <img
                src="/assets/images/natalia-portrait.png"
                alt="Natália Bezerra"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.2 }}>Natália Bezerra • Psicóloga</div>
              <div style={{ fontSize: '0.75rem', opacity: 0.9, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '8px', height: '8px', backgroundColor: '#25D366', borderRadius: '50%' }} />
                <span>Online para agendamentos</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSend} style={{ padding: '20px' }}>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--petrol-dark)', marginBottom: '6px' }}>
                Seu Nome:
              </label>
              <input
                type="text"
                placeholder="Como prefere ser chamado(a)?"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--petrol-dark)', marginBottom: '6px' }}>
                Modalidade / Interesse:
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <option value="Psicoterapia Individual (Online/Presencial)">Psicoterapia Individual (Online/Presencial)</option>
                <option value="Psicoterapia de Casal">Psicoterapia de Casal</option>
                <option value="Orientação Profissional e Carreira">Orientação Profissional e Carreira</option>
                <option value="Trabalhos com Grupos">Trabalhos com Grupos</option>
                <option value="Palestras Corporativas">Palestras Corporativas</option>
              </select>
            </div>

            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--petrol-dark)', marginBottom: '6px' }}>
                Mensagem adicional (opcional):
              </label>
              <textarea
                placeholder="Prefere horário matutino ou noturno? Presencial ou on-line?"
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                rows={2}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                  resize: 'none',
                }}
              />
            </div>

            <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', borderRadius: '12px', padding: '14px' }}>
              <Send size={18} />
              <span>Iniciar conversa no WhatsApp</span>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
