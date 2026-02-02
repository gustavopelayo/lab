'use client';

import Link from 'next/link';
import { getLatestEpisodes } from '@/data/episodes';
import { generatePodcastJsonLd } from '@/components/SEO';



export default function HomePage() {
  const featuredEpisodes = getLatestEpisodes(3);

  return (
    <>
      {generatePodcastJsonLd({})}
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>The Future Starts Here</h1>
            <p className="hero-description">
              Join us every week as we explore cutting-edge technology, innovative ideas, 
              and the brilliant minds shaping our digital future. From AI breakthroughs 
              to sustainable tech solutions.
            </p>
            <div className="hero-actions">
              <Link href="/episodes" className="btn">
                Listen to Latest Episodes
              </Link>
              <Link href="#featured" className="btn-secondary">
                Featured Content
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-graphic">
              <div className="pulse-ring"></div>
              <div className="pulse-ring pulse-ring-delay-1"></div>
              <div className="pulse-ring pulse-ring-delay-2"></div>
              <div className="podcast-icon">🎙️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episodes */}
      <section id="featured" className="featured-section">
        <div className="container">
          <h2>Latest Episodes</h2>
          <div className="grid grid-3">
            {featuredEpisodes.map((episode) => (
              <div key={episode.id} className="card episode-card">
                <div className="episode-number">#{episode.number.toString().padStart(3, '0')}</div>
                <h3>{episode.title}</h3>
                <p className="episode-summary">{episode.summary}</p>
                <div className="episode-meta">
                  <span className="episode-date">
                    {new Date(episode.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="episode-duration">{episode.duration}</span>
                </div>
                <div className="episode-tags">
                  {episode.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/episodes/${episode.slug}`} className="episode-link">
                  Listen Now →
                </Link>
              </div>
            ))}
          </div>
          <div className="featured-actions">
            <Link href="/episodes" className="btn">
              View All Episodes
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Technology. Innovation. Future.</h2>
              <p>
                PodCast Pro brings you weekly conversations with leading technologists, 
                researchers, and innovators. We dive deep into the technologies that are 
                reshaping our world, from artificial intelligence to sustainable solutions.
              </p>
              <p>
                Every Tuesday, join us for insights that matter, discussions that inspire, 
                and glimpses into the technology that will define tomorrow.
              </p>
              <Link href="/faq" className="btn-secondary">
                Learn More
              </Link>
            </div>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">20+</div>
                <div className="stat-label">Episodes</div>
              </div>
              <div className="stat">
                <div className="stat-number">Weekly</div>
                <div className="stat-label">Schedule</div>
              </div>
              <div className="stat">
                <div className="stat-number">Tech</div>
                <div className="stat-label">Focus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          padding: 4rem 0 6rem;
          background: radial-gradient(circle at 30% 40%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 0, 110, 0.1) 0%, transparent 50%),
                      linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          overflow: hidden;
          position: relative;
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .hero h1 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }
        
        .hero-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .hero-graphic {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .pulse-ring {
          position: absolute;
          border: 2px solid var(--accent-neon);
          border-radius: 50%;
          width: 100%;
          height: 100%;
          animation: pulse 2s ease-out infinite;
          opacity: 0.6;
        }
        
        .pulse-ring-delay-1 {
          animation-delay: 0.5s;
          opacity: 0.4;
        }
        
        .pulse-ring-delay-2 {
          animation-delay: 1s;
          opacity: 0.2;
        }
        
        .podcast-icon {
          font-size: 4rem;
          z-index: 1;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        
        .featured-section {
          padding: 4rem 0;
        }
        
        .featured-section h2 {
          text-align: center;
          margin-bottom: 3rem;
          font-size: 2.5rem;
        }
        
        .episode-card {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .episode-number {
          position: absolute;
          top: -10px;
          right: -10px;
          background: var(--accent-neon);
          color: var(--bg-primary);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: bold;
        }
        
        .episode-card h3 {
          margin: 0.5rem 0 1rem;
          font-size: 1.3rem;
          line-height: 1.3;
        }
        
        .episode-summary {
          flex-grow: 1;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        
        .episode-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        
        .episode-tags {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        
        .tag {
          background: var(--bg-primary);
          color: var(--accent-neon);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          border: 1px solid var(--border-subtle);
        }
        
        .episode-link {
          color: var(--accent-neon);
          font-weight: 600;
          margin-top: auto;
        }
        
        .featured-actions {
          text-align: center;
          margin-top: 3rem;
        }
        
        .about-section {
          padding: 4rem 0;
          background: var(--bg-secondary);
        }
        
        .about-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .about-text h2 {
          margin-bottom: 1.5rem;
          font-size: 2.2rem;
        }
        
        .about-text p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          line-height: 1.6;
        }
        
        .about-stats {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .stat {
          text-align: center;
          padding: 1.5rem;
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          background: var(--bg-card);
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: var(--accent-neon);
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .hero h1 {
            font-size: 2.5rem;
          }
          
          .hero-visual {
            order: -1;
          }
          
          .hero-graphic {
            width: 200px;
            height: 200px;
          }
          
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .about-stats {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
          }
        }
        
        @media (max-width: 480px) {
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .btn, .btn-secondary {
            width: 100%;
            text-align: center;
            max-width: 250px;
          }
        }
      `}</style>
    </>
  );
}