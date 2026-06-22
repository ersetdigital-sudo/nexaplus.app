import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'NexaPlus - Jasa Pembuatan Website Profesional untuk Bisnis di Indonesia';
export const size = { width: 1200, height: 628 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '60px 80px',
          background: 'linear-gradient(135deg, #7a3500 0%, #FF7A00 50%, #FF9A33 100%)',
          fontFamily: 'sans-serif',
          textAlign: 'center',
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: '72px',
            height: '72px',
            background: '#ffffff',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '36px',
            fontWeight: 800,
            color: '#FF7A00',
            marginBottom: '32px',
          }}
        >
          N+
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '52px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '16px',
          }}
        >
          NexaPlus
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '700px',
            lineHeight: 1.4,
          }}
        >
          Jasa Pembuatan Website Profesional untuk Bisnis di Indonesia
        </div>

        {/* Bottom tag */}
        <div
          style={{
            marginTop: '40px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '24px',
            padding: '8px 24px',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.8)',
          }}
        >
          nexaplus.app
        </div>
      </div>
    ),
    { ...size }
  );
}
