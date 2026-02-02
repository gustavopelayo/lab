'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PodCast Pro</h3>
            <p>Exploring technology, innovation, and the future through insightful conversations.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/episodes">All Episodes</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li><a href="#" rel="noopener noreferrer">Twitter/X</a></li>
              <li><a href="#" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="#" rel="noopener noreferrer">YouTube</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} PodCast Pro. All rights reserved.</p>
          <p>Built with Next.js and passion for technology.</p>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-subtle);
          padding: 3rem 0 1rem;
          margin-top: 4rem;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-section h3 {
          color: var(--accent-neon);
          margin-bottom: 1rem;
        }
        
        .footer-section h4 {
          color: var(--text-primary);
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        
        .footer-section p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        
        .footer-links a {
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }
        
        .footer-links a:hover {
          color: var(--accent-neon);
        }
        
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border-subtle);
          text-align: center;
        }
        
        .footer-bottom p {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin: 0.25rem 0;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .footer {
            padding: 2rem 0 1rem;
          }
        }
      `}</style>
    </footer>
  );
}