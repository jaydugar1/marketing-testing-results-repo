'use client';

import Link from 'next/link';

interface PresentationPageProps {
  params: Promise<{ id: string }>;
}

export default function PresentationPage({ params: paramsPromise }: PresentationPageProps) {
  const [id, setId] = require('react').useState<string | null>(null);

  if (!id) {
    paramsPromise.then((p) => setId(p.id));
  }

  const presentations: Record<string, { title: string; description: string }> = {
    'testing-analytics-repository': {
      title: 'Testing Analytics Repository',
      description: 'Interactive prototype showcasing the searchable test results repository with what-if calculator.',
    },
  };

  const presentation = presentations[id || ''];

  if (!presentation) {
    return (
      <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '32px', paddingRight: '32px', paddingTop: '40px' }}>
          <Link
            href="/presentations"
            style={{
              color: 'var(--color-green)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '24px',
              display: 'inline-block',
              fontFamily: 'var(--font-body)',
            }}
          >
            ← Back to Presentations
          </Link>
          <h1 style={{ fontFamily: 'var(--font-headline)', fontWeight: '700', color: 'var(--color-green)', fontSize: '2rem' }}>
            Presentation Not Found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '32px', paddingRight: '32px', paddingTop: '40px', paddingBottom: '40px' }}>
        <Link
          href="/presentations"
          style={{
            color: 'var(--color-green)',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '24px',
            display: 'inline-block',
            fontFamily: 'var(--font-body)',
          }}
        >
          ← Back to Presentations
        </Link>

        <h1
          style={{
            fontFamily: 'var(--font-headline)',
            fontWeight: '700',
            color: 'var(--color-green)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            lineHeight: 1.2,
            marginBottom: '12px',
          }}
        >
          {presentation.title}
        </h1>
        <p
          style={{
            color: 'var(--fg-secondary)',
            fontSize: '16px',
            fontFamily: 'var(--font-body)',
            lineHeight: 1.6,
            marginBottom: '40px',
            maxWidth: '700px',
          }}
        >
          {presentation.description}
        </p>

        {/* Presentation Container */}
        <div
          id="presentation-container"
          style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-light)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
            marginBottom: '40px',
          }}
        >
          {/* Replace this with actual presentation content */}
          <div
            style={{
              padding: '40px',
              textAlign: 'center',
              color: 'var(--fg-secondary)',
              fontFamily: 'var(--font-body)',
            }}
          >
            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
              The presentation content will be embedded here.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--fg-tertiary)', marginTop: '16px' }}>
              Please provide the HTML/design file content to display.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
