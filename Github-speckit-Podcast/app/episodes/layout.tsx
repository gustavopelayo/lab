import { Metadata } from 'next';
import { generateMetadata } from '@/components/SEO';

export const metadata: Metadata = generateMetadata({
  title: 'All Episodes - PodCast Pro',
  description: 'Browse our complete collection of technology and innovation podcast episodes.',
  keywords: 'podcast episodes, technology, AI, innovation, complete collection',
  url: '/episodes',
});

export default function EpisodesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}