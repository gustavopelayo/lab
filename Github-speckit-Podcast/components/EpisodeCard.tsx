import Link from 'next/link';
import { Episode } from '@/data/episodes';

interface EpisodeCardProps {
  episode: Episode;
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Link href={`/episodes/${episode.slug}`} className="episode-card-link">
      <article className="episode-card">
        <div className="episode-header">
          <div className="episode-number">#{episode.number.toString().padStart(3, '0')}</div>
          <div className="episode-duration">{episode.duration}</div>
        </div>
        
        <h2 className="episode-title">{episode.title}</h2>
        
        <p className="episode-summary">{episode.summary}</p>
        
        <div className="episode-meta">
          <time 
            dateTime={episode.publishDate}
            className="episode-date"
          >
            {formatDate(episode.publishDate)}
          </time>
        </div>
        
        <div className="episode-tags">
          {episode.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="episode-tag">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="episode-action">
          <span className="listen-cta">
            Listen Now →
          </span>
        </div>
      </article>

      <style jsx>{`
        .episode-card-link {
          display: block;
          text-decoration: none;
          height: 100%;
        }

        .episode-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          padding: 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .episode-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-neon), var(--accent-pink));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .episode-card-link:hover .episode-card {
          border-color: var(--accent-neon);
          transform: translateY(-4px);
          box-shadow: var(--shadow-glow);
        }

        .episode-card-link:hover .episode-card::before {
          transform: scaleX(1);
        }

        .episode-card-link:focus {
          outline: 2px solid var(--accent-neon);
          outline-offset: 2px;
          border-radius: 12px;
        }

        .episode-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .episode-number {
          background: var(--accent-neon);
          color: var(--bg-primary);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: bold;
        }

        .episode-duration {
          background: var(--bg-secondary);
          color: var(--text-secondary);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
          border: 1px solid var(--border-subtle);
        }

        .episode-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .episode-summary {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .episode-meta {
          margin-bottom: 1rem;
        }

        .episode-date {
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .episode-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .episode-tag {
          background: var(--bg-primary);
          color: var(--accent-neon);
          border: 1px solid var(--border-subtle);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .episode-action {
          margin-top: auto;
        }

        .listen-cta {
          color: var(--accent-neon);
          font-weight: 600;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
        }

        .episode-card-link:hover .listen-cta {
          color: var(--accent-pink);
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .episode-card {
            padding: 1.25rem;
          }

          .episode-title {
            font-size: 1.2rem;
          }

          .episode-summary {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </Link>
  );
}