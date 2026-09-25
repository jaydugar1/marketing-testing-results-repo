import Link from 'next/link';
import { TestResult } from '@/lib/types';
import { calculateControlRate, calculateVariantRate } from '@/lib/calculator';

interface TestCardProps {
  test: TestResult;
}

function getConfidenceBadgeColor(confidence?: number) {
  if (!confidence) return 'bg-gray-100 text-gray-800';
  if (confidence >= 99) return 'bg-green-100 text-green-800';
  if (confidence >= 95) return 'bg-blue-100 text-blue-800';
  return 'bg-yellow-100 text-yellow-800';
}

function getChannelColor(channel: string) {
  const colors: Record<string, string> = {
    'direct-mail': 'bg-purple-100 text-purple-800',
    email: 'bg-blue-100 text-blue-800',
    tmo: 'bg-green-100 text-green-800',
    'paid-digital': 'bg-orange-100 text-orange-800',
  };
  return colors[channel] || 'bg-gray-100 text-gray-800';
}

export function TestCard({ test }: TestCardProps) {
  const controlRate = calculateControlRate(test);
  const variantRate = calculateVariantRate(test);

  return (
    <Link href={`/test/${test.id}`}>
      <div className="cursor-pointer rounded-lg border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-md transition-all">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span
                className={`inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold ${getChannelColor(
                  test.channel
                )}`}
              >
                {test.channel.replace('-', ' ').toUpperCase()}
              </span>
              <span
                className={`inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold ${getConfidenceBadgeColor(
                  test.confidenceLevel
                )}`}
              >
                {test.confidenceLevel
                  ? `${test.confidenceLevel}% CI`
                  : test.pValue
                    ? `p = ${test.pValue}`
                    : 'Directional'}
              </span>
            </div>

            <h3 className="mt-3 text-lg font-semibold text-slate-900">{test.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{test.description}</p>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                  Control Rate
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {(controlRate * 100).toFixed(2)}%
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                  Variant Rate
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {(variantRate * 100).toFixed(2)}%
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="text-right">
              <p className="text-xs font-medium text-slate-600 uppercase tracking-wide">Lift</p>
              <p className="mt-1 text-3xl font-bold text-green-600">+{test.liftPercentage}%</p>
            </div>
            {test.testDate && (
              <p className="mt-4 text-xs text-slate-500">{test.testDate}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
