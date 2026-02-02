'use client';

import Link from 'next/link';
import { useState } from 'react';
import { episodes, sortEpisodesByDate, sortEpisodesByNumber } from '@/data/episodes';
import EpisodeCard from '@/components/EpisodeCard';

export default function EpisodesPage() {
  const [sortOrder, setSortOrder] = useState<'date' | 'number'>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const sortedEpisodes = sortOrder === 'date' 
    ? sortEpisodesByDate(sortDirection === 'asc')
    : sortEpisodesByNumber(sortDirection === 'asc');

  const handleSortChange = (newSortOrder: 'date' | 'number') => {
    if (newSortOrder === sortOrder) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortOrder(newSortOrder);
      setSortDirection(newSortOrder === 'date' ? 'desc' : 'asc');
    }
  };

  return (
    <div className="episodes-page">
      <div className="container">
        <header className="episodes-header">
          <h1>All Episodes</h1>
          <p>Explore our complete collection of technology and innovation discussions.</p>
        </header>

        <div className="episodes-controls">
          <div className="sort-controls">
            <label htmlFor="sort-select" className="sr-only">
              Sort episodes by
            </label>
            <div className="sort-buttons">
              <button
                onClick={() => handleSortChange('date')}
                className={`sort-btn ${sortOrder === 'date' ? 'sort-btn-active' : ''}`}
                aria-pressed={sortOrder === 'date'}
              >
                By Date {sortOrder === 'date' && (sortDirection === 'desc' ? '↓' : '↑')}
              </button>
              <button
                onClick={() => handleSortChange('number')}
                className={`sort-btn ${sortOrder === 'number' ? 'sort-btn-active' : ''}`}
                aria-pressed={sortOrder === 'number'}
              >
                By Episode # {sortOrder === 'number' && (sortDirection === 'desc' ? '↓' : '↑')}
              </button>
            </div>
          </div>

          <div className="episodes-count">
            <span>{episodes.length} episodes</span>
          </div>
        </div>

        <div className="episodes-grid">
          {sortedEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>

        <div className="episodes-footer">
          <p>Looking for something specific? Check out our <Link href="/faq">FAQ</Link> for more information.</p>
        </div>
      </div>

      <style jsx>{`
        .episodes-page {
          padding: 2rem 0 4rem;
          min-height: 80vh;
        }

        .episodes-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .episodes-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .episodes-header p {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .episodes-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding: 1rem;
          background: var(--bg-secondary);
          border-radius: 8px;
          border: 1px solid var(--border-subtle);
        }

        .sort-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .sort-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }

        .sort-btn:hover {
          border-color: var(--accent-neon);
          color: var(--text-primary);
        }

        .sort-btn:focus {
          outline: 2px solid var(--accent-neon);
          outline-offset: 2px;
        }

        .sort-btn-active {
          background: var(--accent-neon);
          color: var(--bg-primary);
          border-color: var(--accent-neon);
        }

        .episodes-count {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .episodes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .episodes-footer {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid var(--border-subtle);
        }

        .episodes-footer p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .episodes-footer a {
          color: var(--accent-neon);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .episodes-header h1 {
            font-size: 2rem;
          }

          .episodes-controls {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .sort-buttons {
            justify-content: center;
          }

          .episodes-count {
            text-align: center;
          }

          .episodes-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .sort-buttons {
            flex-direction: column;
            gap: 0.5rem;
          }

          .sort-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}