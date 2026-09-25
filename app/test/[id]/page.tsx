import { notFound } from 'next/navigation';
import { testResults } from '@/lib/tests-data';
import { calculateControlRate, calculateVariantRate } from '@/lib/calculator';
import TestDetailClient from './client';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TestDetailPage({ params }: PageProps) {
  const { id } = await params;
  const test = testResults.find((t) => t.id === id);

  if (!test) {
    notFound();
  }

  const controlRate = calculateControlRate(test);
  const variantRate = calculateVariantRate(test);

  return (
    <TestDetailClient
      test={test}
      controlRate={controlRate}
      variantRate={variantRate}
    />
  );
}
