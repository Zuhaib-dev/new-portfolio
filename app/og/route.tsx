import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
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
                    color: 'white',
                    fontFamily: 'sans-serif',
                    position: 'relative',
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
                    <div
                        style={{
                            fontSize: 60,
                            fontWeight: 800,
                            marginBottom: 20,
                            background: 'linear-gradient(to right, #e2e8f0, #94a3b8)',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        Zuhaib Rashid
                    </div>
                    <div
                        style={{
                            fontSize: 30,
                            color: '#94a3b8',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Frontend & Fullstack Developer
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
