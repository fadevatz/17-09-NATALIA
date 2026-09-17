import React from 'react';
import { MessageCircle, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export default function CTASection({ onOpenBooking }) {
  return (
    <section
      style={{
        padding: '96px 0',
        backgroundColor: 'var(--petrol-dark)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Glow Spheres */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 163, 164, 0.25) 0%, rgba(30, 53, 69, 0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217, 107, 67, 0.25) 0%, rgba(30, 53, 69, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '840px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
          <Heart color="var(--coral-accent)" fill="var(--coral-accent)" size={20} />
          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--coral-accent)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Agendamento Humanizado
          </span>
        </div>

        <h2
          style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '20px',
            fontFamily: 'var(--font-heading)',
          }}
        >
          Pronto(a) para Dar o Primeiro Passo em Direção à sua <span style={{ color: 'var(--teal-primary)' }}>Transformação?</span>
        </h2>

        <p className="serif-quote" style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)', marginBottom: '36px' }}>
          “💙 Amar e mudar as coisas me interessam mais.”
        </p>

        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '40px' }}>
          Você não precisa carregar suas angústias a sós. Entre em contato hoje mesmo e agende uma conversa acolhedora com a Dra. Natália Bezerra.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <button
            onClick={onOpenBooking}
            className="btn btn-terracotta"
            style={{ padding: '20px 42px', fontSize: '1.15rem', boxShadow: '0 12px 30px rgba(217, 107, 67, 0.5)' }}
          >
            <MessageCircle size={24} />
            <span>Iniciar Atendimento no WhatsApp</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', opacity: 0.85, fontSize: '0.875rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="var(--teal-primary)" />
              <span>CRP 06/136391</span>
            </span>
            <span>•</span>
            <span>Atendimento Presencial e On-line</span>
          </div>
        </div>
      </div>
    </section>
  );
}
