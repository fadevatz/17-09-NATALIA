import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PsychodramaSection from './components/PsychodramaSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { X, MessageCircle, Send } from 'lucide-react';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Psicoterapia Individual (Online/Presencial)');
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');

  const handleOpenBooking = (serviceName = 'Psicoterapia Individual (Online/Presencial)') => {
    setSelectedService(serviceName);
    setBookingModalOpen(true);
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    const message = `Olá, Dra. Natália! Gostaria de agendar uma consulta.
Nome: ${name || 'Não informado'}
Modalidade: ${selectedService}
${notes ? `Observações: ${notes}` : ''}`;

    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setBookingModalOpen(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenBooking={() => handleOpenBooking()} />
      <main style={{ flex: 1 }}>
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <AboutSection onOpenBooking={() => handleOpenBooking()} />
        <ServicesSection onOpenBooking={(srv) => handleOpenBooking(srv)} />
        <PsychodramaSection onOpenBooking={() => handleOpenBooking()} />
        <FAQSection onOpenBooking={() => handleOpenBooking()} />
        <CTASection onOpenBooking={() => handleOpenBooking()} />
      </main>
      <Footer onOpenBooking={() => handleOpenBooking()} />
      <WhatsAppFloat />

      {/* Booking Modal */}
      {bookingModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(30, 53, 69, 0.65)',
            backdropFilter: 'blur(8px)',
            zIndex: 2500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setBookingModalOpen(false)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '28px',
              maxWidth: '520px',
              width: '100%',
              padding: '36px',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setBookingModalOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: 'var(--petrol-dark)',
                cursor: 'pointer',
              }}
            >
              <X size={24} />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--terracotta-light)',
                  color: 'var(--terracotta-primary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px',
                }}
              >
                <MessageCircle size={28} />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--petrol-dark)', marginBottom: '6px' }}>Agendar Atendimento</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
                Preencha os dados abaixo para iniciar seu atendimento diretamente com a Dra. Natália Bezerra no WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmitBooking} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--petrol-dark)', marginBottom: '6px' }}>
                  Seu Nome Completo:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Maria Silva"
                  required
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.95rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--petrol-dark)', marginBottom: '6px' }}>
                  Modalidade de Atendimento:
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.95rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <option value="Psicoterapia Individual (Online/Presencial)">Psicoterapia Individual (Online ou Presencial)</option>
                  <option value="Psicoterapia de Casal">Psicoterapia de Casal</option>
                  <option value="Orientação Profissional e Carreira">Orientação Profissional e Carreira</option>
                  <option value="Trabalhos com Grupos">Trabalhos com Grupos</option>
                  <option value="Palestras Corporativas">Palestras Corporativas</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--petrol-dark)', marginBottom: '6px' }}>
                  Observações ou Preferência de Horário (opcional):
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Prefiro atendimento presencial às terças à tarde."
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.95rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    resize: 'none',
                  }}
                />
              </div>

              <button type="submit" className="btn btn-terracotta" style={{ marginTop: '8px', padding: '16px' }}>
                <Send size={20} />
                <span>Enviar para WhatsApp da Psicóloga</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
