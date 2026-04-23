import { ImageResponse } from 'next/og';
import { getBlogBySlug } from '@/lib/blogs';

export const runtime = 'edge';

export const alt = 'Zuhaib Rashid Blog';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

interface Props {
  params: {
    slug: string;
  };
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return new ImageResponse(
      <div style={{ height: '100%', width: '100%', backgroundColor: 'black' }} />
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(120, 119, 198, 0.15) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)',
          position: 'relative',
          padding: '80px',
        }}
      >
        {/* Subtle border overlay */}
        <div 
          style={{
            position: 'absolute',
            inset: '30px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '40px',
          }} 
        />

        {/* Header: Logo & Branding */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#1a1a1a',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <div
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            Zuhaib Rashid
          </div>
        </div>

        {/* Blog Category / Meta */}
        <div
          style={{
            fontSize: '18px',
            color: '#8b5cf6',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: '20px',
          }}
        >
          Blog Post
        </div>

        {/* Blog Title */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            marginBottom: '30px',
            maxWidth: '900px',
          }}
        >
          {blog.title}
        </div>

        {/* Blog Description */}
        <div
          style={{
            fontSize: '28px',
            color: '#a1a1aa',
            lineHeight: 1.4,
            maxWidth: '800px',
            marginBottom: '40px',
          }}
        >
          {blog.description}
        </div>

        {/* Footer: Read Time & URL */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginTop: 'auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '8px 16px',
              borderRadius: '100px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#d1d5db',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            {blog.readTime}
          </div>
          <div
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.3)',
              fontWeight: 500,
            }}
          >
            zuhaibrashid.com/blogs/{blog.slug}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
