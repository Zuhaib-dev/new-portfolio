import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
    try {
        const fontData = await fetch(
            new URL('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZs.woff2', import.meta.url)
        ).then((res) => res.arrayBuffer());

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#030712', // dark background
                        fontFamily: '"Inter", sans-serif',
                    }}
                >
                    {/* Background Gradients */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '-20%',
                            left: '-20%',
                            width: '80%',
                            height: '80%',
                            borderRadius: '50%',
                            background: 'rgba(124, 58, 237, 0.2)', // purple
                            filter: 'blur(100px)',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '-20%',
                            right: '-20%',
                            width: '80%',
                            height: '80%',
                            borderRadius: '50%',
                            background: 'rgba(56, 189, 248, 0.2)', // sky blue
                            filter: 'blur(100px)',
                        }}
                    />

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 10,
                        }}
                    >
                        {/* Portfolio Badge */}
                        <div
                            style={{
                                display: 'flex',
                                padding: '8px 20px',
                                borderRadius: '50px',
                                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                                border: '1px solid rgba(56, 189, 248, 0.3)',
                                color: '#38bdf8',
                                fontSize: 16,
                                fontWeight: 700,
                                marginBottom: 20,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                            }}
                        >
                            Portfolio
                        </div>

                        <div
                            style={{
                                fontSize: 70,
                                fontWeight: 800,
                                marginBottom: 15,
                                // Color is handled by gradient but transparent is needed for background-clip
                                background: 'linear-gradient(to right, #ffffff, #94a3b8)',
                                backgroundClip: 'text',
                                color: 'transparent',
                                letterSpacing: '-0.03em',
                            }}
                        >
                            Zuhaib Rashid
                        </div>
                        <div
                            style={{
                                fontSize: 32,
                                color: '#94a3b8',
                                letterSpacing: '-0.02em',
                                marginBottom: 40,
                            }}
                        >
                            Frontend & Fullstack Developer
                        </div>

                        {/* Call to Action */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                                fontSize: 20,
                                color: '#e2e8f0',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                padding: '12px 24px',
                                borderRadius: '12px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            zuhaibrashid.com
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: 'Inter',
                        data: fontData,
                        style: 'normal',
                        weight: 700, // Using 700 (Bold) as proxy for 800 since we're fetching just one file for simplicity or finding a better URL
                    },
                ],
            }
        );
    } catch (e) {
        if (e instanceof Error) {
            console.log(`${e.message}`);
        }
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
