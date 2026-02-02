'use client';

import { useState } from 'react';
import { faqItems, getAllCategories } from '@/data/faq';
import Accordion from '@/components/Accordion';
import { Metadata } from 'next';

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...getAllCategories()];
  
  const filteredFAQ = selectedCategory === 'All' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  return (
    <div className="faq-page">
      <div className="container">
        {/* Header */}
        <header className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to common questions about PodCast Pro, our episodes, 
            and how to get the most out of your listening experience.
          </p>
        </header>

        {/* Category Filter */}
        <section className="faq-filters">
          <h2 className="sr-only">Filter questions by category</h2>
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-tab ${selectedCategory === category ? 'category-tab-active' : ''}`}
                aria-pressed={selectedCategory === category}
              >
                {category}
                {category !== 'All' && (
                  <span className="category-count">
                    {faqItems.filter(item => item.category === category).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* FAQ Content */}
        <section className="faq-content">
          <h2 className="sr-only">
            {selectedCategory === 'All' ? 'All questions' : `${selectedCategory} questions`}
          </h2>
          
          {filteredFAQ.length > 0 ? (
            <>
              <div className="faq-summary">
                <p>
                  {selectedCategory === 'All' 
                    ? `Showing all ${filteredFAQ.length} questions`
                    : `${filteredFAQ.length} question${filteredFAQ.length !== 1 ? 's' : ''} in ${selectedCategory}`
                  }
                </p>
              </div>
              
              <Accordion items={filteredFAQ} allowMultiple={true} />
            </>
          ) : (
            <div className="no-results">
              <p>No questions found in this category.</p>
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section className="faq-contact">
          <div className="contact-card">
            <h2>Still Have Questions?</h2>
            <p>
              Can't find what you're looking for? We'd love to hear from you and help answer 
              any questions about the podcast, suggest topics, or discuss potential collaboration.
            </p>
            <div className="contact-options">
              <a href="#" className="contact-link">
                📧 Send us an email
              </a>
              <a href="#" className="contact-link">
                💬 Join our community
              </a>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .faq-page {
          padding: 2rem 0 4rem;
          min-height: 80vh;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .faq-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .faq-header p {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .faq-filters {
          margin-bottom: 3rem;
        }

        .category-tabs {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          flex-wrap: wrap;
          padding: 1rem;
          background: var(--bg-secondary);
          border-radius: 8px;
          border: 1px solid var(--border-subtle);
        }

        .category-tab {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .category-tab:hover {
          border-color: var(--accent-neon);
          color: var(--text-primary);
        }

        .category-tab:focus {
          outline: 2px solid var(--accent-neon);
          outline-offset: 2px;
        }

        .category-tab-active {
          background: var(--accent-neon);
          color: var(--bg-primary);
          border-color: var(--accent-neon);
        }

        .category-count {
          background: var(--bg-primary);
          color: var(--accent-neon);
          padding: 0.125rem 0.375rem;
          border-radius: 10px;
          font-size: 0.75rem;
          font-weight: bold;
          min-width: 20px;
          text-align: center;
        }

        .category-tab-active .category-count {
          background: var(--bg-secondary);
          color: var(--accent-neon);
        }

        .faq-content {
          max-width: 800px;
          margin: 0 auto 4rem;
        }

        .faq-summary {
          margin-bottom: 2rem;
          text-align: center;
        }

        .faq-summary p {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .no-results {
          text-align: center;
          padding: 3rem;
          color: var(--text-secondary);
        }

        .faq-contact {
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
        }

        .contact-card h2 {
          margin-bottom: 1rem;
          color: var(--accent-neon);
        }

        .contact-card p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-options {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-card);
          color: var(--text-primary);
          border: 1px solid var(--border-subtle);
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          border-color: var(--accent-neon);
          color: var(--accent-neon);
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow);
        }

        .contact-link:focus {
          outline: 2px solid var(--accent-neon);
          outline-offset: 2px;
        }

        @media (max-width: 768px) {
          .faq-header h1 {
            font-size: 2rem;
          }

          .faq-header p {
            font-size: 1rem;
          }

          .category-tabs {
            padding: 0.75rem;
          }

          .contact-card {
            padding: 1.5rem;
          }

          .contact-options {
            flex-direction: column;
            align-items: center;
          }

          .contact-link {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .category-tabs {
            justify-content: flex-start;
            overflow-x: auto;
            padding: 0.5rem;
          }

          .category-tab {
            white-space: nowrap;
            flex-shrink: 0;
          }
        }
      `}</style>
    </div>
  );
}