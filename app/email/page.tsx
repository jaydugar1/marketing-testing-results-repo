'use client';

import { useState } from 'react';
import Link from 'next/link';
import { testResults } from '@/lib/tests-data';

export default function EmailPage() {
  const [search, setSearch] = useState('');
  const [selectedQuarters, setSelectedQuarters] = useState<string[]>([]);

  const emailTests = testResults.filter((t) => t.channel === 'email');

  // Extract unique quarters and sort them
  const uniqueQuarters = Array.from(new Set(testResults.map((t) => t.testDate)))
    .sort()
    .reverse();

  const filtered = emailTests.filter((t) => {
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase());
    const matchesQuarter = selectedQuarters.length === 0 || selectedQuarters.includes(t.testDate);
    return matchesSearch && matchesQuarter;
  });

  const avgLift = filtered.length > 0 ? filtered.reduce((sum, t) => sum + t.liftPercentage, 0) / filtered.length : 0;
  const significantCount = filtered.filter((t) => t.confidenceLevel && t.confidenceLevel >= 95).length;

  const toggleQuarter = (quarter: string) => {
    setSelectedQuarters((prev) =>
      prev.includes(quarter) ? prev.filter((q) => q !== quarter) : [...prev, quarter]
    );
  };

  const getConfidenceBadge = (test: any) => {
    if (test.confidenceLevel && test.confidenceLevel >= 95) {
      return { label: 'Significant', bg: 'var(--color-green-tint)', text: 'var(--color-green)' };
    }
    if (test.pValue && test.pValue < 0.05) {
      return { label: 'Significant', bg: 'var(--color-green-tint)', text: 'var(--color-green)' };
    }
    return { label: 'Directional', bg: 'rgba(255, 105, 71, 0.14)', text: 'var(--color-coral-dark)' };
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div style={{ backgroundColor: 'var(--color-cream)', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', paddingLeft: 'calc(50vw - 50%)', paddingRight: 'calc(50vw - 50%)', paddingTop: '40px', paddingBottom: '40px', marginBottom: '40px' }}>
        <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '32px', paddingRight: '32px' }}>
          <Link href="/" style={{ color: 'var(--color-green)', textDecoration: 'none', fontSize: '14px', fontWeight: '500', marginBottom: '24px', display: 'inline-block', fontFamily: 'var(--font-body)' }}>
            ← Dashboard
          </Link>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginBottom: '32px' }}>
            <div style={{ backgroundColor: 'var(--color-green)', color: 'var(--color-cream)', width: '52px', height: '52px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 6" />
              </svg>
            </div>
            <div>
              <h1 style={{ fontFamily: 'var(--font-headline)', fontWeight: '700', color: 'var(--color-green)', fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.2, marginBottom: '8px' }}>
                Email
              </h1>
              <p style={{ color: 'var(--fg-secondary)', fontSize: '16px', fontFamily: 'var(--font-body)', lineHeight: 1.6 }}>
                Subject lines, send timing, and CTA structure.
              </p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
            <div style={{ backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-lg)', padding: '20px' }}>
              <p style={{ color: 'var(--fg-secondary)', fontSize: '11px', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'var(--font-body)' }}>Tests</p>
              <p style={{ color: 'var(--color-green)', fontFamily: 'var(--font-headline)', fontWeight: '700', fontSize: '24px' }}>{filtered.length}</p>
            </div>
            <div style={{ backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-lg)', padding: '20px' }}>
              <p style={{ color: 'var(--fg-secondary)', fontSize: '11px', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'var(--font-body)' }}>Avg Lift</p>
              <p style={{ color: 'var(--color-green)', fontFamily: 'var(--font-headline)', fontWeight: '700', fontSize: '24px' }}>+{avgLift.toFixed(1)}%</p>
            </div>
            <div style={{ backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-lg)', padding: '20px' }}>
              <p style={{ color: 'var(--fg-secondary)', fontSize: '11px', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'var(--font-body)' }}>Significant</p>
              <p style={{ color: 'var(--color-green)', fontFamily: 'var(--font-headline)', fontWeight: '700', fontSize: '24px' }}>{significantCount}</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '32px', paddingRight: '32px', marginBottom: '32px' }}>
        <div style={{ marginBottom: '20px' }}>
          <input type="text" placeholder="Search tests by name..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ maxWidth: '320px', backgroundColor: 'var(--color-white)', borderColor: 'var(--border-light)', color: 'var(--fg-primary)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', paddingLeft: '16px', paddingRight: '16px', paddingTop: '12px', paddingBottom: '12px', fontSize: '14px', fontFamily: 'var(--font-body)', boxShadow: 'var(--shadow-sm)', display: 'block' }} />
        </div>

        {/* Quarter Filter Buttons */}
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
      <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '32px', paddingRight: '32px' }}>
        {filtered.length === 0 ? (
          <p style={{ color: 'var(--fg-tertiary)', textAlign: 'center', padding: '64px 32px', fontSize: '16px', fontFamily: 'var(--font-body)' }}>No tests match your search.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filtered.map((test) => {
              const badge = getConfidenceBadge(test);
              const controlRate = (test.controlOutcome / test.controlSize) * 100;
              const variantRate = (test.variantOutcome / test.variantSize) * 100;
              return (
                <Link key={test.id} href={`/test/${test.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{ backgroundColor: 'var(--color-white)', border: `1px solid var(--border-light)`, borderRadius: 'var(--radius-md)', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', transition: 'var(--transition-normal)', boxShadow: 'var(--shadow-sm)' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-green)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-light)'; }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: '600', color: 'var(--color-green)', fontSize: '15px', marginBottom: '8px' }}>{test.name}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ backgroundColor: badge.bg, color: badge.text, paddingLeft: '12px', paddingRight: '12px', paddingTop: '4px', paddingBottom: '4px', fontSize: '12px', fontWeight: '600', borderRadius: '9999px', fontFamily: 'var(--font-body)' }}>{badge.label}</span>
                        <span style={{ color: 'var(--fg-secondary)', fontSize: '13px', fontFamily: 'var(--font-body)' }}>{controlRate.toFixed(2)}% → {variantRate.toFixed(2)}%</span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontFamily: 'var(--font-headline)', fontWeight: '700', color: test.liftPercentage >= 0 ? 'var(--color-green)' : 'var(--color-pink-dark)', fontSize: '22px', margin: '0' }}>{test.liftPercentage >= 0 ? '+' : ''}{test.liftPercentage}%</p>
                      <p style={{ color: 'var(--fg-secondary)', fontSize: '12px', margin: '4px 0 0 0', fontFamily: 'var(--font-body)' }}>lift</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
