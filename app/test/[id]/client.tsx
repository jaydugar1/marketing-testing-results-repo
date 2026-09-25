'use client';

import { useState } from 'react';
import Link from 'next/link';

interface TestDetailClientProps {
  test: any;
  controlRate: number;
  variantRate: number;
}

export default function TestDetailClient({ test, controlRate, variantRate }: TestDetailClientProps) {
  const [methodologyOpen, setMethodologyOpen] = useState(false);
  const [population, setPopulation] = useState(10000);

  const absoluteDiff = (variantRate - controlRate) * 100;
  const baselineOutcomes = Math.round(population * controlRate);
  const treatmentOutcomes = Math.round(population * variantRate);
  const incrementalOutcomes = treatmentOutcomes - baselineOutcomes;

  const getChannelName = (channel: string) => {
    const names: Record<string, string> = {
      'direct-mail': 'Direct Mail',
      email: 'Email',
      tmo: 'TMO',
      'paid-digital': 'Paid Digital',
    };
    return names[channel] || channel;
  };

  const getChannelLink = (channel: string) => {
    const links: Record<string, string> = {
      'direct-mail': '/direct-mail',
      email: '/email',
      tmo: '/tmo',
      'paid-digital': '/paid-digital',
    };
    return links[channel] || '/';
  };

  const getConfidenceBadge = () => {
    if (test.confidenceLevel && test.confidenceLevel >= 95) {
      return { label: 'Significant', bg: 'var(--color-green-tint)', text: 'var(--color-green)' };
    }
    if (test.pValue && test.pValue < 0.05) {
      return { label: 'Significant', bg: 'var(--color-green-tint)', text: 'var(--color-green)' };
    }
    return { label: 'Directional', bg: 'rgba(255, 105, 71, 0.14)', text: 'var(--color-coral-dark)' };
  };

  const badge = getConfidenceBadge();

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '32px', paddingRight: '32px', paddingTop: '40px', paddingBottom: '40px' }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontFamily: 'var(--font-body)' }}>
          <Link href="/" style={{ color: 'var(--color-green)', textDecoration: 'none' }}>
            Dashboard
          </Link>
          <span style={{ color: 'var(--fg-tertiary)' }}>/</span>
          <Link href={getChannelLink(test.channel)} style={{ color: 'var(--color-green)', textDecoration: 'none' }}>
            {getChannelName(test.channel)}
          </Link>
          <span style={{ color: 'var(--fg-tertiary)' }}>/</span>
          <span style={{ color: 'var(--fg-primary)' }}>{test.name}</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--color-green-tint)',
                color: 'var(--color-green)',
                paddingLeft: '12px',
                paddingRight: '12px',
                paddingTop: '6px',
                paddingBottom: '6px',
                fontSize: '12px',
                fontWeight: '600',
                borderRadius: '9999px',
                fontFamily: 'var(--font-body)',
              }}
            >
              {getChannelName(test.channel)}
            </span>
            <span
              style={{
                display: 'inline-block',
                backgroundColor: badge.bg,
                color: badge.text,
                paddingLeft: '12px',
                paddingRight: '12px',
                paddingTop: '6px',
                paddingBottom: '6px',
                fontSize: '12px',
                fontWeight: '600',
                borderRadius: '9999px',
                fontFamily: 'var(--font-body)',
              }}
            >
              {badge.label}
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-headline)', fontWeight: '700', color: 'var(--color-green)', fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.2, margin: '0' }}>
            {test.name}
          </h1>
        </div>

        {/* Key Results - 4-up Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '36px' }}>
          {/* Lift - Highlighted in Green */}
          <div
            style={{
              backgroundColor: 'var(--color-green)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <p
              style={{
                color: 'var(--color-cream)',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '12px',
                fontFamily: 'var(--font-body)',
              }}
            >
              Lift
            </p>
            <p
              style={{
                color: 'var(--color-cream)',
                fontFamily: 'var(--font-headline)',
                fontWeight: '800',
                fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
                margin: '0',
              }}
            >
              +{test.liftPercentage}%
            </p>
          </div>

          {/* Control Rate */}
          <div
            style={{
              backgroundColor: 'var(--color-white)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
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
              Control Rate
            </p>
            <p
              style={{
                color: 'var(--color-green)',
                fontFamily: 'var(--font-headline)',
                fontWeight: '800',
                fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
                margin: '0',
              }}
            >
              {(controlRate * 100).toFixed(2)}%
            </p>
          </div>

          {/* Variant Rate */}
          <div
            style={{
              backgroundColor: 'var(--color-white)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
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
              Variant Rate
            </p>
            <p
              style={{
                color: 'var(--color-green)',
                fontFamily: 'var(--font-headline)',
                fontWeight: '800',
                fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
                margin: '0',
              }}
            >
              {(variantRate * 100).toFixed(2)}%
            </p>
          </div>

          {/* Absolute Difference */}
          <div
            style={{
              backgroundColor: 'var(--color-white)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
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
              Absolute Difference
            </p>
            <p
              style={{
                color: 'var(--color-green)',
                fontFamily: 'var(--font-headline)',
                fontWeight: '800',
                fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
                margin: '0',
              }}
            >
              {absoluteDiff.toFixed(2)}pp
            </p>
          </div>
        </div>

        {/* What-If Calculator - Green Card */}
        <div
          style={{
            backgroundColor: 'var(--color-green)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px',
            boxShadow: 'var(--shadow-md)',
            marginBottom: '36px',
          }}
        >
          <h2
            style={{
              color: 'var(--color-cream)',
              fontFamily: 'var(--font-headline)',
              fontWeight: '700',
              fontSize: '20px',
              margin: '0 0 8px 0',
            }}
          >
            What-If Calculator
          </h2>
          <p
            style={{
              color: 'var(--color-cream)',
              fontSize: '14px',
              opacity: 0.9,
              margin: '0 0 24px 0',
              fontFamily: 'var(--font-body)',
            }}
          >
            Estimate the incremental impact on any population
          </p>

          <div style={{ marginBottom: '24px' }}>
            <label
              style={{
                color: 'var(--color-cream)',
                fontSize: '14px',
                fontWeight: '600',
                display: 'block',
                marginBottom: '8px',
                fontFamily: 'var(--font-body)',
              }}
            >
              Population Size
            </label>
            <input
              type="number"
              value={population}
              onChange={(e) => setPopulation(Number(e.target.value))}
              style={{
                width: '100%',
                backgroundColor: 'var(--color-white)',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                padding: '12px 16px',
                fontSize: '16px',
                fontFamily: 'var(--font-body)',
                color: 'var(--fg-primary)',
              }}
            />
          </div>

          {/* Results Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
            <div style={{ backgroundColor: 'var(--color-cream)', borderRadius: 'var(--radius-md)', padding: '16px', textAlign: 'center' }}>
              <p style={{ color: 'var(--fg-secondary)', fontSize: '12px', fontFamily: 'var(--font-body)', margin: '0 0 8px 0' }}>
                Baseline Outcomes
              </p>
              <p style={{ color: 'var(--fg-primary)', fontFamily: 'var(--font-headline)', fontWeight: '700', fontSize: '24px', margin: '0' }}>
                {baselineOutcomes.toLocaleString()}
              </p>
            </div>
            <div style={{ backgroundColor: 'var(--color-cream)', borderRadius: 'var(--radius-md)', padding: '16px', textAlign: 'center' }}>
              <p style={{ color: 'var(--fg-secondary)', fontSize: '12px', fontFamily: 'var(--font-body)', margin: '0 0 8px 0' }}>
                Treatment Outcomes
              </p>
              <p style={{ color: 'var(--fg-primary)', fontFamily: 'var(--font-headline)', fontWeight: '700', fontSize: '24px', margin: '0' }}>
                {treatmentOutcomes.toLocaleString()}
              </p>
            </div>
            <div style={{ backgroundColor: 'var(--color-cream)', borderRadius: 'var(--radius-md)', padding: '16px', textAlign: 'center' }}>
              <p style={{ color: 'var(--fg-secondary)', fontSize: '12px', fontFamily: 'var(--font-body)', margin: '0 0 8px 0' }}>
                Incremental
              </p>
              <p style={{ color: 'var(--color-green)', fontFamily: 'var(--font-headline)', fontWeight: '700', fontSize: '24px', margin: '0' }}>
                +{incrementalOutcomes.toLocaleString()}
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: '24px',
              backgroundColor: 'rgba(254, 248, 232, 0.2)',
              borderRadius: 'var(--radius-md)',
              padding: '16px',
              fontSize: '14px',
              color: 'var(--color-cream)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.6,
            }}
          >
            Applying this result to {population.toLocaleString()} members would yield{' '}
            <strong>
              +{incrementalOutcomes.toLocaleString()} incremental outcomes
            </strong>
            .
          </div>
        </div>

        {/* Test Setup - 2-up Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '36px' }}>
          <div style={{ backgroundColor: 'var(--color-cream)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: '700', color: 'var(--color-green)', fontSize: '16px', margin: '0 0 16px 0' }}>
              Control Group
            </h3>
            <p style={{ color: 'var(--fg-primary)', fontSize: '14px', lineHeight: 1.6, margin: '0 0 16px 0', fontFamily: 'var(--font-body)' }}>
              {test.controlDescription}
            </p>
            <div style={{ fontSize: '13px', color: 'var(--fg-secondary)', fontFamily: 'var(--font-body)' }}>
              <p style={{ margin: '8px 0' }}>
                <strong>Sample Size:</strong> {test.controlSize.toLocaleString()}
              </p>
              <p style={{ margin: '8px 0' }}>
                <strong>Outcomes:</strong> {test.controlOutcome.toLocaleString()}
              </p>
              <p style={{ margin: '8px 0' }}>
                <strong>Rate:</strong> {(controlRate * 100).toFixed(2)}%
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-cream)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: '700', color: 'var(--color-green)', fontSize: '16px', margin: '0 0 16px 0' }}>
              Variant Group
            </h3>
            <p style={{ color: 'var(--fg-primary)', fontSize: '14px', lineHeight: 1.6, margin: '0 0 16px 0', fontFamily: 'var(--font-body)' }}>
              {test.variantDescription}
            </p>
            <div style={{ fontSize: '13px', color: 'var(--fg-secondary)', fontFamily: 'var(--font-body)' }}>
              <p style={{ margin: '8px 0' }}>
                <strong>Sample Size:</strong> {test.variantSize.toLocaleString()}
              </p>
              <p style={{ margin: '8px 0' }}>
                <strong>Outcomes:</strong> {test.variantOutcome.toLocaleString()}
              </p>
              <p style={{ margin: '8px 0' }}>
                <strong>Rate:</strong> {(variantRate * 100).toFixed(2)}%
              </p>
            </div>
          </div>
        </div>

        {/* Metrics Table */}
        {test.metrics && test.metrics.length > 0 && (
          <div style={{ marginBottom: '36px' }}>
            <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: '700', color: 'var(--color-green)', fontSize: '18px', marginBottom: '16px' }}>
              Metrics
            </h3>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
              }}
            >
              <thead>
                <tr style={{ backgroundColor: 'var(--color-cream)' }}>
                  <th
                    style={{
                      padding: '16px',
                      textAlign: 'left',
                      fontFamily: 'var(--font-headline)',
                      fontWeight: '700',
                      color: 'var(--color-green)',
                      fontSize: '14px',
                      borderBottom: '1px solid var(--border-light)',
                    }}
                  >
                    Metric
                  </th>
                  <th
                    style={{
                      padding: '16px',
                      textAlign: 'left',
                      fontFamily: 'var(--font-headline)',
                      fontWeight: '700',
                      color: 'var(--color-green)',
                      fontSize: '14px',
                      borderBottom: '1px solid var(--border-light)',
                    }}
                  >
                    Control
                  </th>
                  <th
                    style={{
                      padding: '16px',
                      textAlign: 'left',
                      fontFamily: 'var(--font-headline)',
                      fontWeight: '700',
                      color: 'var(--color-green)',
                      fontSize: '14px',
                      borderBottom: '1px solid var(--border-light)',
                    }}
                  >
                    Variant
                  </th>
                </tr>
              </thead>
              <tbody>
                {test.metrics.map((metric: any, idx: number) => (
                  <tr key={idx}>
                    <td
                      style={{
                        padding: '16px',
                        fontFamily: 'var(--font-body)',
                        color: 'var(--fg-primary)',
                        fontSize: '14px',
                        borderBottom: '1px solid var(--border-light)',
                      }}
                    >
                      {metric.label}
                    </td>
                    <td
                      style={{
                        padding: '16px',
                        fontFamily: 'var(--font-body)',
                        color: 'var(--fg-primary)',
                        fontSize: '14px',
                        borderBottom: '1px solid var(--border-light)',
                      }}
                    >
                      {metric.control}
                    </td>
                    <td
                      style={{
                        padding: '16px',
                        fontFamily: 'var(--font-body)',
                        color: 'var(--fg-primary)',
                        fontSize: '14px',
                        borderBottom: '1px solid var(--border-light)',
                      }}
                    >
                      {metric.variant}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Methodology Toggle */}
        <div style={{ marginBottom: '36px' }}>
          <button
            onClick={() => setMethodologyOpen(!methodologyOpen)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: '700', color: 'var(--color-green)', fontSize: '18px', margin: '0' }}>
              Methodology
            </h3>
            <span style={{ color: 'var(--fg-secondary)', fontFamily: 'var(--font-body)', fontSize: '14px' }}>
              {methodologyOpen ? 'Hide' : 'Show'}
            </span>
          </button>
          {methodologyOpen && (
            <p
              style={{
                color: 'var(--fg-secondary)',
                fontSize: '14px',
                lineHeight: 1.8,
                fontFamily: 'var(--font-body)',
              }}
            >
              {test.details}
            </p>
          )}
        </div>

        {/* Caveats & Limitations */}
        {test.caveats && test.caveats.length > 0 && (
          <div style={{ marginBottom: '36px', backgroundColor: 'var(--color-green-tint)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: '700', color: 'var(--color-green)', fontSize: '18px', margin: '0 0 16px 0' }}>
              Caveats & Limitations
            </h3>
            <ul style={{ margin: '0', paddingLeft: '20px' }}>
              {test.caveats.map((caveat: string, idx: number) => (
                <li
                  key={idx}
                  style={{
                    color: 'var(--fg-primary)',
                    fontSize: '14px',
                    marginBottom: '12px',
                    fontFamily: 'var(--font-body)',
                    lineHeight: 1.6,
                  }}
                >
                  {caveat}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Recommendation Callout */}
        <div
          style={{
            backgroundColor: 'var(--color-cream)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px',
            position: 'relative',
            paddingLeft: '48px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '24px',
              top: '24px',
              fontSize: '48px',
              color: 'var(--color-green)',
              opacity: 0.3,
              lineHeight: 1,
            }}
          >
            "
          </div>
          <p
            style={{
              color: 'var(--color-green)',
              fontFamily: 'var(--font-headline)',
              fontWeight: '600',
              fontSize: '16px',
              lineHeight: 1.8,
              margin: '0 0 16px 0',
            }}
          >
            {test.recommendation}
          </p>
          <p
            style={{
              color: 'var(--fg-secondary)',
              fontSize: '13px',
              fontFamily: 'var(--font-body)',
              margin: '0',
            }}
          >
            — Recommendation
          </p>
        </div>
      </div>
    </div>
  );
}
