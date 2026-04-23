import { ImageResponse } from 'next/og';

// export const runtime = 'edge';

// Image metadata
export const alt = 'Zuhaib Rashid — Full Stack Developer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      // Image HTML/CSS
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)',
          position: 'relative',
          fontFamily: 'Inter, "sans-serif"',
        }}
      >
        {/* Subtle border overlay */}
        <div 
          style={{
            position: 'absolute',
            inset: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '40px',
            display: 'flex',
          }} 
        />

        {/* Content Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {/* Logo/Icon */}
          <div
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#1a1a1a',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: '80px',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-0.05em',
              marginBottom: '10px',
            }}
          >
            Zuhaib Rashid
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '32px',
              color: '#a1a1aa',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            Full Stack Developer 
            <div style={{ width: '6px', height: '6px', backgroundColor: '#8b5cf6', borderRadius: '50%' }} />
            Next.js Engineer
          </div>
        </div>

        {/* Footer Branding */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '20px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
          }}
        >
          zuhaibrashid.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
