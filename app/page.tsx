'use client';

import { useState } from 'react';
import { testResults } from '@/lib/tests-data';

export default function Dashboard() {
  const [selectedQuarters, setSelectedQuarters] = useState<string[]>([]);

  // Extract unique quarters and sort them
  const uniqueQuarters = Array.from(new Set(testResults.map((t) => t.testDate)))
    .sort()
    .reverse();

  // Filter tests by selected quarters
  const filteredTests = selectedQuarters.length === 0
    ? testResults
    : testResults.filter((t) => selectedQuarters.includes(t.testDate));

  const directMailTests = filteredTests.filter((t) => t.channel === 'direct-mail');
  const emailTests = filteredTests.filter((t) => t.channel === 'email');
  const tmoTests = filteredTests.filter((t) => t.channel === 'tmo');
  const paidDigitalTests = filteredTests.filter((t) => t.channel === 'paid-digital');

  const directMailAvg = directMailTests.length > 0 ? directMailTests.reduce((sum, t) => sum + t.liftPercentage, 0) / directMailTests.length : 0;
  const emailAvg = emailTests.length > 0 ? emailTests.reduce((sum, t) => sum + t.liftPercentage, 0) / emailTests.length : 0;
  const tmoAvg = tmoTests.length > 0 ? tmoTests.reduce((sum, t) => sum + t.liftPercentage, 0) / tmoTests.length : 0;
  const paidDigitalAvg = paidDigitalTests.length > 0 ? paidDigitalTests.reduce((sum, t) => sum + t.liftPercentage, 0) / paidDigitalTests.length : 0;

  const avgLift = filteredTests.length > 0 ? filteredTests.reduce((sum, t) => sum + t.liftPercentage, 0) / filteredTests.length : 0;
  const significantTests = filteredTests.filter((t) => t.confidenceLevel && t.confidenceLevel >= 95).length;
  const totalMembers = filteredTests.reduce((sum, t) => sum + t.controlSize + t.variantSize, 0);

  const toggleQuarter = (quarter: string) => {
    setSelectedQuarters((prev) =>
      prev.includes(quarter) ? prev.filter((q) => q !== quarter) : [...prev, quarter]
    );
  };

  const channelIcons = {
    'direct-mail': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 6-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 6" />
      </svg>
    ),
    email: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 6-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 6" />
      </svg>
    ),
    tmo: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    'paid-digital': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12M6 12h12" />
      </svg>
    ),
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Hero Section - Full-width green band with negative margin bleed */}
      <div
        style={{
          backgroundColor: 'var(--color-green)',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          paddingLeft: 'calc(50vw - 50%)',
          paddingRight: 'calc(50vw - 50%)',
          paddingTop: '56px',
          paddingBottom: '56px',
        }}
      >
        <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '32px', paddingRight: '32px' }}>
          <div
            style={{
              color: 'var(--color-coral-light)',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Marketing & Performance Analytics
          </div>
          <h1
            style={{
              color: 'var(--color-cream)',
              fontFamily: 'var(--font-headline)',
              fontWeight: '700',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: 1.2,
              marginBottom: '24px',
            }}
          >
            Testing Analytics Repository
          </h1>
          <p
            style={{
              color: 'var(--color-cream)',
              fontSize: '16px',
              maxWidth: '700px',
              marginBottom: '48px',
              lineHeight: 1.6,
              fontFamily: 'var(--font-body)',
            }}
          >
            Find test results across every channel and model what a result would mean for any client population.
          </p>

          {/* Stat Cards - 4-up responsive grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
            <div style={{ backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-xl)', padding: '24px' }}>
              <p
                style={{
                  color: 'var(--fg-secondary)',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Total Tests
              </p>
              <p
                style={{
                  color: 'var(--color-green)',
                  fontFamily: 'var(--font-headline)',
                  fontWeight: '800',
                  fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                  margin: '8px 0',
                }}
              >
                {filteredTests.length}
              </p>
              <p style={{ color: 'var(--fg-secondary)', fontSize: '13px', fontFamily: 'var(--font-body)' }}>Across all channels</p>
            </div>

            <div style={{ backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-xl)', padding: '24px' }}>
              <p
                style={{
                  color: 'var(--fg-secondary)',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Avg Lift
              </p>
              <p
                style={{
                  color: 'var(--color-green)',
                  fontFamily: 'var(--font-headline)',
                  fontWeight: '800',
                  fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                  margin: '8px 0',
                }}
              >
                +{avgLift.toFixed(1)}%
              </p>
              <p style={{ color: 'var(--fg-secondary)', fontSize: '13px', fontFamily: 'var(--font-body)' }}>Across all tests</p>
            </div>

            <div style={{ backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-xl)', padding: '24px' }}>
              <p
                style={{
                  color: 'var(--fg-secondary)',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Significant
              </p>
              <p
                style={{
                  color: 'var(--color-green)',
                  fontFamily: 'var(--font-headline)',
                  fontWeight: '800',
                  fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                  margin: '8px 0',
                }}
              >
                {significantTests}
              </p>
              <p style={{ color: 'var(--fg-secondary)', fontSize: '13px', fontFamily: 'var(--font-body)' }}>p&lt;0.05 or 95%+ CI</p>
            </div>

            <div style={{ backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-xl)', padding: '24px' }}>
              <p
                style={{
                  color: 'var(--fg-secondary)',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Members Tested
              </p>
              <p
                style={{
                  color: 'var(--color-green)',
                  fontFamily: 'var(--font-headline)',
                  fontWeight: '800',
                  fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                  margin: '8px 0',
                }}
              >
                {(totalMembers / 1000000).toFixed(2)}M
              </p>
              <p style={{ color: 'var(--fg-secondary)', fontSize: '13px', fontFamily: 'var(--font-body)' }}>Total across all tests</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quarter Filter Buttons */}
      <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '32px', paddingRight: '32px', paddingTop: '48px', paddingBottom: '48px' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--fg-secondary)', fontFamily: 'var(--font-body)' }}>
            Filter by quarter:
          </span>
          {uniqueQuarters.map((quarter) => (
            <button
              key={quarter}
              onClick={() => toggleQuarter(quarter)}
              style={{
                backgroundColor: selectedQuarters.includes(quarter) ? 'var(--color-green)' : 'var(--color-white)',
                color: selectedQuarters.includes(quarter) ? 'var(--color-cream)' : 'var(--fg-secondary)',
                border: selectedQuarters.includes(quarter) ? 'none' : '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '8px',
                paddingBottom: '8px',
                fontSize: '13px',
                fontWeight: '500',
                fontFamily: 'var(--font-body)',
                cursor: 'pointer',
                transition: 'var(--transition-normal)',
                boxShadow: selectedQuarters.includes(quarter) ? 'none' : 'var(--shadow-sm)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                if (!selectedQuarters.includes(quarter)) {
                  el.style.backgroundColor = 'var(--bg-secondary)';
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                if (!selectedQuarters.includes(quarter)) {
                  el.style.backgroundColor = 'var(--color-white)';
                }
              }}
            >
              {quarter}
            </button>
          ))}
        </div>
      </div>

      {/* Tests by Channel Section */}
      <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '32px', paddingRight: '32px', paddingTop: '80px', paddingBottom: '80px' }}>
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
          Browse by Channel
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-headline)',
            fontWeight: '700',
            color: 'var(--color-green)',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            marginBottom: '48px',
          }}
        >
          Tests by Channel
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
          {[
            { href: '/direct-mail', key: 'direct-mail', name: 'Direct Mail', desc: 'A/B tests on format, messaging, and design.', bgColor: 'var(--color-green-tint)', tests: directMailTests, avg: directMailAvg },
            { href: '/email', key: 'email', name: 'Email', desc: 'Subject lines, send timing, and CTAs.', bgColor: 'var(--color-cream-dark)', tests: emailTests, avg: emailAvg },
            { href: '/tmo', key: 'tmo', name: 'TMO', desc: 'Outbound and multi-touch phone outreach.', bgColor: 'var(--color-green-tint)', tests: tmoTests, avg: tmoAvg },
            { href: '/paid-digital', key: 'paid-digital', name: 'Paid Digital', desc: 'Paid social and display advertising tests.', bgColor: 'var(--color-coral-light-tint)', tests: paidDigitalTests, avg: paidDigitalAvg },
          ].map((channel) => (
            <a
              key={channel.key}
              href={channel.href}
              style={{
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                display: 'block',
                textDecoration: 'none',
                transition: 'var(--transition-normal)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-xl)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '11px',
                  backgroundColor: channel.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  color: 'var(--color-green)',
                }}
              >
                {channelIcons[channel.key as keyof typeof channelIcons]}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-headline)',
                  fontWeight: '600',
                  color: 'var(--color-green)',
                  fontSize: '17px',
                  marginBottom: '8px',
                }}
              >
                {channel.name}
              </h3>
              <p style={{ color: 'var(--fg-secondary)', fontSize: '14px', lineHeight: 1.5, marginBottom: '16px', fontFamily: 'var(--font-body)' }}>
                {channel.desc}
              </p>
              <div style={{ display: 'flex', gap: '24px', paddingTop: '8px' }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-headline)', fontWeight: '700', color: 'var(--color-green)', fontSize: '17px' }}>
                    {channel.tests.length}
                  </p>
                  <p style={{ color: 'var(--fg-secondary)', fontSize: '12px', fontFamily: 'var(--font-body)' }}>tests</p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-headline)', fontWeight: '700', color: 'var(--color-green)', fontSize: '17px' }}>
                    +{channel.avg.toFixed(1)}%
                  </p>
                  <p style={{ color: 'var(--fg-secondary)', fontSize: '12px', fontFamily: 'var(--font-body)' }}>avg lift</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* How to Use Section - Cream background band */}
      <div
        style={{
          backgroundColor: 'var(--color-cream)',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          paddingLeft: 'calc(50vw - 50%)',
          paddingRight: 'calc(50vw - 50%)',
          paddingTop: '72px',
          paddingBottom: '72px',
        }}
      >
        <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '32px', paddingRight: '32px' }}>
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
            Getting Started
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-headline)',
              fontWeight: '700',
              color: 'var(--color-green)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              marginBottom: '64px',
            }}
          >
            How to Use This Repository
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {[
              { num: '1', title: 'Browse Tests', desc: 'Navigate to a channel to explore results organized by test.' },
              { num: '2', title: 'Review Details', desc: 'Open any test for full methodology, confidence level, and caveats.' },
              { num: '3', title: 'Run What-If Scenarios', desc: 'Use the calculator to estimate lift on any population size — great for pitching approvals.' },
              { num: '4', title: 'Make Decisions', desc: 'Compare baseline vs. variant outcomes and use the recommendation to inform go/no-go calls.' },
            ].map((step) => (
              <div key={step.num}>
                <div
                  style={{
                    backgroundColor: 'var(--color-green)',
                    color: 'var(--color-cream)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-headline)',
                    fontWeight: '700',
                    fontSize: '18px',
                    marginBottom: '16px',
                  }}
                >
                  {step.num}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-headline)',
                    fontWeight: '600',
                    color: 'var(--color-green)',
                    fontSize: '16px',
                    marginBottom: '10px',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: 'var(--fg-secondary)', fontSize: '14px', lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
