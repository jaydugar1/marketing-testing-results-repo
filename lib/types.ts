export type TestChannel = 'direct-mail' | 'email' | 'tmo' | 'paid-digital';

export interface TestMetric {
  name: string;
  value: string | number;
  unit?: string;
}

export interface TestResult {
  id: string;
  name: string;
  channel: TestChannel;
  description: string;
  testDate: string;

  // Test setup
  controlSize: number;
  controlOutcome: number;
  variantSize: number;
  variantOutcome: number;

  // Results
  liftPercentage: number;
  liftAbsolute?: string;
  confidenceLevel?: number;
  pValue?: number;

  // Additional metrics
  metrics: TestMetric[];

  // Client/segment info
  clients?: string[];
  segment?: string;

  // Details & recommendation
  details: string;
  recommendation: string;

  // Caveats
  caveats?: string[];

  // Linked data (for reference)
  variantDescription?: string;
  controlDescription?: string;
}

export interface WhatIfScenario {
  testId: string;
  testName: string;
  newPopulationSize: number;
  controlRate: number;
  variantRate: number;
  baselineExpectedCalls: number;
  treatmentExpectedCalls: number;
  incrementalCalls: number;
  liftPercentage: number;
}
