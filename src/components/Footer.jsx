import React from 'react';
import { Heart, Instagram, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer style={{ backgroundColor: '#162834', color: 'rgba(255,255,255,0.75)', paddingTop: '64px', paddingBottom: '32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '48px' }}>
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--teal-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                <Heart size={18} fill="#FFFFFF" />
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: '#FFFFFF' }}>
                Natália Bezerra
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Psicóloga e Psicodramatista dedicada ao autoconhecimento, inteligência emocional e desenvolvimento interpessoal no projeto <strong>Ludicamente</strong>.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--coral-accent)', fontSize: '0.85rem', fontWeight: 700 }}>
              <ShieldCheck size={16} />
              <span>CRP: 06/136391</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '16px' }}>Navegação Rápida</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><a href="#hero" style={{ color: 'inherit', textDecoration: 'none' }}>Início</a></li>
              <li><a href="#sobre" style={{ color: 'inherit', textDecoration: 'none' }}>Sobre Natália Bezerra</a></li>
              <li><a href="#atuacao" style={{ color: 'inherit', textDecoration: 'none' }}>Áreas de Atuação</a></li>
              <li><a href="#psicodrama" style={{ color: 'inherit', textDecoration: 'none' }}>Psicodrama & Ludicamente</a></li>
              <li><a href="#faq" style={{ color: 'inherit', textDecoration: 'none' }}>Perguntas Frequentes (FAQ)</a></li>
            </ul>
          </div>

          {/* Specialty Services */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '16px' }}>Serviços Especializados</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li>Psicoterapia Individual (Adolescentes, Adultos, Idosos)</li>
              <li>Psicoterapia de Casal</li>
              <li>Orientação Profissional e Carreira</li>
              <li>Trabalhos com Grupos</li>
              <li>Palestras Corporativas de Saúde Mental</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '16px' }}>Contato & Redes</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={18} color="var(--teal-primary)" />
                <span>São Paulo - SP (Atendimento On-line para todo o Brasil)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="var(--terracotta-primary)" />
                <span>Atendimento via WhatsApp</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="btn btn-terracotta"
              style={{ padding: '10px 20px', fontSize: '0.85rem' }}
            >
              <span>Agendar Consulta</span>
            </button>
          </div>
        </div>

        {/* CRP Ethical Disclaimer */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '24px',
            fontSize: '0.8rem',
            lineHeight: 1.6,
            textAlign: 'center',
            opacity: 0.7,
            marginBottom: '24px',
          }}
        >
          Este site cumpre com as diretrizes do Código de Ética Profissional do Psicólogo e Resoluções do Conselho Federal de Psicologia (CFP). Atendimento psicológico não substitui serviços de urgência/emergência hospitalar. Em emergências psiquiátricas graves, procure o centro de atendimento hospitalar mais próximo ou ligue 188 (CVV).
        </div>

        {/* Copyright */}
        <div style={{ textAlign: 'center', fontSize: '0.85rem', opacity: 0.6 }}>
          © {new Date().getFullYear()} Natália Bezerra de Souza • Psicóloga & Psicodramatista (CRP 06/136391). Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
