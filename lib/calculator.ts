import { TestResult, WhatIfScenario } from './types';

export function calculateControlRate(test: TestResult): number {
  return test.controlOutcome / test.controlSize;
}

export function calculateVariantRate(test: TestResult): number {
  return test.variantOutcome / test.variantSize;
}

export function calculateWhatIf(test: TestResult, newPopulationSize: number): WhatIfScenario {
  const controlRate = calculateControlRate(test);
  const variantRate = calculateVariantRate(test);

  const baselineExpectedCalls = newPopulationSize * controlRate;
  const treatmentExpectedCalls = newPopulationSize * variantRate;
  const incrementalCalls = treatmentExpectedCalls - baselineExpectedCalls;

  return {
    testId: test.id,
    testName: test.name,
    newPopulationSize,
    controlRate,
    variantRate,
    baselineExpectedCalls: Math.round(baselineExpectedCalls),
    treatmentExpectedCalls: Math.round(treatmentExpectedCalls),
    incrementalCalls: Math.round(incrementalCalls),
    liftPercentage: test.liftPercentage,
  };
}

export function formatPercent(value: number, decimals: number = 2): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

export function formatNumber(value: number): string {
  return Math.round(value).toLocaleString();
}
