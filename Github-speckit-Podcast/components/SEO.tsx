import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function generateMetadata({
  title = 'PodCast Pro - Modern Podcast Experience',
  description = 'A sleek podcast website featuring the latest episodes, insights, and community discussions about technology and innovation.',
  keywords = 'podcast, audio, technology, interviews, insights, innovation, AI, future',
  image = '/images/og-image.jpg',
  url = '/',
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://podcastpro.example.com';
  const fullUrl = `${baseUrl}${url}`;
  const fullImageUrl = `${baseUrl}${image}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'PodCast Pro Team' }],
    creator: 'PodCast Pro',
    publisher: 'PodCast Pro',
    
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: fullUrl,
      siteName: 'PodCast Pro',
      title,
      description,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      site: '@podcastpro',
      creator: '@podcastpro',
      title,
      description,
      images: [fullImageUrl],
    },
    
    alternates: {
      canonical: fullUrl,
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// JSON-LD structured data for podcasts
export function generatePodcastJsonLd({
  name = 'PodCast Pro',
  description = 'A technology and innovation podcast exploring the future through insightful conversations.',
  url = 'https://podcastpro.example.com',
  image = '/images/og-image.jpg',
  author = 'PodCast Pro Team',
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PodcastSeries',
    name,
    description,
    url,
    image: `${url}${image}`,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: author,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// JSON-LD for individual episodes
export function generateEpisodeJsonLd({
  title,
  description,
  url,
  publishDate,
  duration,
  audioUrl,
  episodeNumber,
}: {
  title: string;
  description: string;
  url: string;
  publishDate: string;
  duration: string;
  audioUrl: string;
  episodeNumber: number;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PodcastEpisode',
    name: title,
    description,
    url,
    datePublished: publishDate,
    timeRequired: duration,
    episodeNumber,
    associatedMedia: {
      '@type': 'AudioObject',
      contentUrl: audioUrl,
      duration,
    },
    partOfSeries: {
      '@type': 'PodcastSeries',
      name: 'PodCast Pro',
      url: process.env.NEXT_PUBLIC_BASE_URL || 'https://podcastpro.example.com',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}