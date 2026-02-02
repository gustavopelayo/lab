'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container">
        <nav className="nav-content">
          <Link href="/" className="logo">
            <h2>PodCast Pro</h2>
          </Link>
          
          <div className="nav-menu-container">
            {/* Mobile menu button */}
            <button
              className="nav-menu-button md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="nav-menu"
              aria-label="Toggle navigation menu"
            >
              <span className={`hamburger-line ${isMenuOpen ? 'hamburger-line-1-open' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'hamburger-line-2-open' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'hamburger-line-3-open' : ''}`}></span>
            </button>
            
            {/* Navigation menu */}
            <ul 
              id="nav-menu"
              className={`nav-links ${isMenuOpen ? 'nav-links-mobile-open' : ''}`}
            >
              <li>
                <Link 
                  href="/" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/episodes" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Episodes
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      
      <style jsx>{`
        .nav-menu-container {
          position: relative;
        }
        
        .nav-menu-button {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 32px;
          height: 32px;
          background: transparent;
          border: none;
          cursor: pointer;
          gap: 4px;
        }
        
        .hamburger-line {
          width: 24px;
          height: 2px;
          background: var(--accent-neon);
          transition: all 0.3s ease;
          transform-origin: center;
        }
        
        .hamburger-line-1-open {
          transform: rotate(45deg) translate(6px, 6px);
        }
        
        .hamburger-line-2-open {
          opacity: 0;
        }
        
        .hamburger-line-3-open {
          transform: rotate(-45deg) translate(6px, -6px);
        }
        
        .nav-links-mobile-open {
          display: flex !important;
        }
        
        @media (max-width: 768px) {
          .nav-menu-button {
            display: flex;
          }
          
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            right: 0;
            flex-direction: column;
            background: var(--bg-secondary);
            border: 1px solid var(--border-subtle);
            border-radius: 8px;
            padding: 1rem;
            gap: 0.5rem;
            min-width: 150px;
            box-shadow: var(--shadow-card);
            z-index: 1000;
          }
        }
        
        .logo h2 {
          margin: 0;
          background: linear-gradient(45deg, var(--accent-neon), var(--accent-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </header>
  );
}