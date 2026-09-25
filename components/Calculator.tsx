'use client';

import { useState } from 'react';
import { TestResult } from '@/lib/types';
import { calculateWhatIf, calculateControlRate, calculateVariantRate } from '@/lib/calculator';

interface CalculatorProps {
  test: TestResult;
}

export function Calculator({ test }: CalculatorProps) {
  const [populationSize, setPopulationSize] = useState<string>('');
  const [result, setResult] = useState<ReturnType<typeof calculateWhatIf> | null>(null);

  const handleCalculate = () => {
    const size = parseInt(populationSize);
    if (!isNaN(size) && size > 0) {
      const whatIf = calculateWhatIf(test, size);
      setResult(whatIf);
    }
  };

  const controlRate = calculateControlRate(test);
  const variantRate = calculateVariantRate(test);

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-8">
      <h2 className="text-2xl font-bold text-slate-900">What-If Calculator</h2>
      <p className="mt-2 text-slate-600">
        Estimate the impact of this test result on a different population size.
      </p>

      <div className="mt-8 grid grid-cols-3 gap-6">
        {/* Input Section */}
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h3 className="font-semibold text-slate-900">New Population</h3>
          <p className="mt-1 text-sm text-slate-600">Enter member count to estimate outcomes</p>

          <label className="mt-4 block">
            <span className="text-sm font-medium text-slate-700">Population Size</span>
            <input
              type="number"
              value={populationSize}
              onChange={(e) => setPopulationSize(e.target.value)}
              placeholder="e.g., 10000"
              className="mt-2 w-full rounded border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
            />
          </label>

          <button
            onClick={handleCalculate}
            className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Calculate
          </button>
        </div>

        {/* Test Baseline Section */}
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h3 className="font-semibold text-slate-900">Test Baseline</h3>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-xs font-medium uppercase text-slate-600">Control Rate</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {(controlRate * 100).toFixed(3)}%
              </p>
              <p className="mt-1 text-xs text-slate-600">
                {test.controlOutcome.toLocaleString()} / {test.controlSize.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase text-slate-600">Variant Rate</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {(variantRate * 100).toFixed(3)}%
              </p>
              <p className="mt-1 text-xs text-slate-600">
                {test.variantOutcome.toLocaleString()} / {test.variantSize.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {result ? (
          <div className="rounded-lg border-2 border-green-500 bg-green-50 p-6">
            <h3 className="font-semibold text-green-900">Estimated Results</h3>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-xs font-medium uppercase text-green-700">Baseline Calls</p>
                <p className="mt-1 text-2xl font-bold text-green-900">
                  {result.baselineExpectedCalls.toLocaleString()}
                </p>
                <p className="mt-1 text-xs text-green-700">
                  Using {(result.controlRate * 100).toFixed(2)}% control rate
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase text-green-700">Treatment Calls</p>
                <p className="mt-1 text-2xl font-bold text-green-900">
                  {result.treatmentExpectedCalls.toLocaleString()}
                </p>
                <p className="mt-1 text-xs text-green-700">
                  Using {(result.variantRate * 100).toFixed(2)}% variant rate
                </p>
              </div>
              <div className="border-t border-green-200 pt-4">
                <p className="text-xs font-medium uppercase text-green-700">Incremental Lift</p>
                <p className="mt-1 text-3xl font-bold text-green-600">
                  +{result.incrementalCalls.toLocaleString()}
                </p>
                <p className="mt-1 text-xs text-green-700">
                  +{result.liftPercentage.toFixed(1)}% lift
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-lg border border-slate-300 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-600">
              Enter a population size and click Calculate to see estimated results
            </p>
          </div>
        )}
      </div>

      {result && (
        <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h3 className="font-semibold text-blue-900">Recommendation</h3>
          <p className="mt-2 text-blue-800">
            Based on the test showing a <span className="font-bold">+{test.liftPercentage}% lift</span>,
            applying this result to a population of{' '}
            <span className="font-bold">{result.newPopulationSize.toLocaleString()}</span> would
            yield approximately{' '}
            <span className="font-bold">+{result.incrementalCalls.toLocaleString()} incremental
              calls</span>
            . The control version would generate{' '}
            <span className="font-bold">{result.baselineExpectedCalls.toLocaleString()}</span> calls,
            while the variant would generate{' '}
            <span className="font-bold">{result.treatmentExpectedCalls.toLocaleString()}</span> calls.
          </p>
        </div>
      )}
    </div>
  );
}
