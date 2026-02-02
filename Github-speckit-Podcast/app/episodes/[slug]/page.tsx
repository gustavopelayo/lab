import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { getEpisodeBySlug, episodes } from '@/data/episodes';
import { generateMetadata as generateSeoMetadata, generateEpisodeJsonLd } from '@/components/SEO';

interface EpisodePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return episodes.map((episode) => ({
    slug: episode.slug,
  }));
}

export async function generateMetadata({ params }: EpisodePageProps): Promise<Metadata> {
  const episode = getEpisodeBySlug(params.slug);
  
  if (!episode) {
    return generateSeoMetadata({
      title: 'Episode Not Found - PodCast Pro',
      description: 'The requested episode could not be found.',
    });
  }

  return generateSeoMetadata({
    title: `${episode.title} - PodCast Pro`,
    description: episode.summary,
    keywords: `podcast, ${episode.tags.join(', ')}, episode ${episode.number}`,
    url: `/episodes/${episode.slug}`,
  });
}

export default function EpisodePage({ params }: EpisodePageProps) {
  const episode = getEpisodeBySlug(params.slug);

  if (!episode) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://podcastpro.example.com/episodes/${episode.slug}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Just listened to "${episode.title}" on PodCast Pro!`)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  return (
    <>
      {generateEpisodeJsonLd({
        title: episode.title,
        description: episode.summary,
        url: shareUrl,
        publishDate: episode.publishDate,
        duration: episode.duration,
        audioUrl: `https://podcastpro.example.com${episode.audioSrc}`,
        episodeNumber: episode.number,
      })}
      
      <article className="episode-detail">
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/episodes">Episodes</Link></li>
              <li aria-current="page">{episode.title}</li>
            </ol>
          </nav>

          {/* Episode Header */}
          <header className="episode-header">
            <div className="episode-meta-top">
              <div className="episode-number">Episode #{episode.number.toString().padStart(3, '0')}</div>
              <div className="episode-duration">{episode.duration}</div>
            </div>
            
            <h1>{episode.title}</h1>
            
            <div className="episode-meta-bottom">
              <time dateTime={episode.publishDate} className="episode-date">
                {formatDate(episode.publishDate)}
              </time>
              <div className="episode-tags">
                {episode.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Audio Player */}
          <section className="audio-section">
            <h2 className="sr-only">Episode Audio</h2>
            <div className="audio-container">
              <audio
                controls
                preload="metadata"
                aria-label={`Audio player for ${episode.title}`}
                className="audio-player"
              >
                <source src={episode.audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
                <a href={episode.audioSrc}>Download the episode</a>
              </audio>
              <div className="audio-info">
                <p>🎧 Listen with headphones for the best experience</p>
                <p>
                  <a href={episode.audioSrc} download>
                    Download Episode ({episode.duration})
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Episode Content */}
          <section className="episode-content">
            <h2>About This Episode</h2>
            <div className="episode-description">
              <p>{episode.summary}</p>
              <p>
                In this episode, we dive deep into {episode.tags[0]?.toLowerCase()} and explore 
                how it's shaping our digital future. Join us for an insightful conversation 
                that breaks down complex topics into digestible insights.
              </p>
              <p>
                Whether you're a technology professional, entrepreneur, or simply curious about 
                the latest innovations, this episode offers valuable perspectives on {episode.tags.slice(0, 2).join(' and ').toLowerCase()}.
              </p>
            </div>
          </section>

          {/* Social Sharing */}
          <section className="social-sharing">
            <h2>Share This Episode</h2>
            <div className="share-buttons">
              <a
                href={twitterShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn share-btn-twitter"
                aria-label="Share on Twitter/X"
              >
                <span>Share on X/Twitter</span>
              </a>
              <a
                href={linkedinShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn share-btn-linkedin"
                aria-label="Share on LinkedIn"
              >
                <span>Share on LinkedIn</span>
              </a>
            </div>
          </section>

          {/* Navigation */}
          <nav className="episode-navigation" aria-label="Episode navigation">
            <div className="nav-links">
              {episode.number > 1 && (
                <Link href={`/episodes/${episodes.find(e => e.number === episode.number - 1)?.slug}`} className="nav-btn nav-prev">
                  ← Previous Episode
                </Link>
              )}
              <Link href="/episodes" className="nav-btn nav-all">
                All Episodes
              </Link>
              {episode.number < episodes.length && (
                <Link href={`/episodes/${episodes.find(e => e.number === episode.number + 1)?.slug}`} className="nav-btn nav-next">
                  Next Episode →
                </Link>
              )}
            </div>
          </nav>
        </div>
      </article>
    </>
  );
}