'use client';

import Link from 'next/link';

const presentations = [
  {
    id: 'testing-analytics-repository',
    title: 'Testing Analytics Repository',
    description: 'Interactive prototype showcasing the searchable test results repository with what-if calculator.',
    date: '2026',
    thumbnail: '📊',
    type: 'link',
    url: 'https://employerdirect.sharepoint.com/:p:/s/EnterpriseAnalytics/IQD393z8QSX-Q6gXfyhOYSEYAVdj1q2QEwnDimxScQG8fNA?e=yDUNdY',
  },
  {
    id: 'q4-lookback',
    title: 'Q4 Lookback',
    description: 'Quarterly review and analysis of Q4 test results and key learnings.',
    date: '2025 Q4',
    thumbnail: '📈',
    type: 'link',
    url: 'https://employerdirect.sharepoint.com/:p:/s/ClientDeliverables/IQBACkc_5btaSbSOJ1Ckh8T3ASgjEGG0TaKdJz-mGhDmTIQ?e=Z80Mtz',
  },
  {
    id: 'q1-lookback',
    title: 'Q1 Lookback',
    description: 'Quarterly review and analysis of Q1 test results and key learnings.',
    date: '2026 Q1',
    thumbnail: '📈',
    type: 'link',
    url: 'https://employerdirect-my.sharepoint.com/:p:/g/personal/jay_dugar_edhc_com1/IQA3GY1HsHjgQ7seyV1jT2boAVfppT3CCFT-vo2Z93JA1zw?e=sOAqDn&nav=eyJzSWQiOjM0MywiY0lkIjozNzc2NzM3ODE1fQ',
  },
  {
    id: 'q2-lookback',
    title: 'Q2 Lookback',
    description: 'Quarterly review and analysis of Q2 test results and key learnings.',
    date: '2026 Q2',
    thumbnail: '📈',
    type: 'link',
    url: 'https://employerdirect.sharepoint.com/:p:/s/EnterpriseAnalytics/IQD4CwRwbtXJT75yf505_DymAepkd4hrXehN6mECnK8pFF4?e=UdnIPp',
  },
];

export default function PresentationsPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '32px', paddingRight: '32px', paddingTop: '40px', paddingBottom: '80px' }}>
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <div
            style={{
              color: 'var(--color-green)',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px',
              fontFamily: 'var(--font-body)',
            }}
          >
            Presentations
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-headline)',
              fontWeight: '700',
              color: 'var(--color-green)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: 1.2,
              margin: '0',
            }}
          >
            Design & Implementation Presentations
          </h1>
          <p
            style={{
              color: 'var(--fg-secondary)',
              fontSize: '16px',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.6,
              marginTop: '16px',
              maxWidth: '700px',
            }}
          >
            View interactive presentations and design prototypes for the Testing Analytics platform.
          </p>
        </div>

        {/* Presentations Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {presentations.map((presentation: any) => {
            const isDisabled = !presentation.url && presentation.type === 'link';
            const isExternal = presentation.type === 'link' && presentation.url;
            const Wrapper = isExternal ? 'a' : Link as any;
            const wrapperProps = isExternal
              ? { href: presentation.url, target: '_blank', rel: 'noopener noreferrer' }
              : { href: `/presentations/${presentation.id}` };

            return (
              <Wrapper
                key={presentation.id}
                {...wrapperProps}
                style={{
                  textDecoration: 'none',
                  opacity: isDisabled ? 0.5 : 1,
                  cursor: isDisabled ? 'not-allowed' : 'pointer',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--color-white)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '32px',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'var(--transition-normal)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={(e) => {
                    if (!isDisabled) {
                      (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isDisabled) {
                      (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {/* Thumbnail */}
                  <div
                    style={{
                      fontSize: '56px',
                      marginBottom: '24px',
                      lineHeight: 1,
                    }}
                  >
                    {presentation.thumbnail}
                  </div>

                  {/* Title */}
                  <h2
                    style={{
                      fontFamily: 'var(--font-headline)',
                      fontWeight: '700',
                      color: 'var(--color-green)',
                      fontSize: '20px',
                      margin: '0 0 12px 0',
                    }}
                  >
                    {presentation.title}
                  </h2>

                  {/* Description */}
                  <p
                    style={{
                      color: 'var(--fg-secondary)',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      margin: '0 0 auto 0',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {presentation.description}
                  </p>

                  {/* Date */}
                  {presentation.date && (
                    <p
                      style={{
                        color: 'var(--fg-tertiary)',
                        fontSize: '12px',
                        margin: '16px 0 0 0',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {presentation.date}
                    </p>
                  )}

                  {/* Button */}
                  <div
                    style={{
                      marginTop: '24px',
                      padding: '12px 16px',
                      backgroundColor: isDisabled ? 'var(--border-light)' : 'var(--color-green)',
                      color: isDisabled ? 'var(--fg-tertiary)' : 'var(--color-cream)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '14px',
                      fontWeight: '600',
                      fontFamily: 'var(--font-body)',
                      textAlign: 'center',
                    }}
                  >
                    {isDisabled ? 'Coming Soon' : isExternal ? 'View Link' : 'View Presentation'}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
}
