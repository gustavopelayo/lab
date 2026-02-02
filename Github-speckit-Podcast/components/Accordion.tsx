'use client';

import { useState } from 'react';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(id);
      }
      
      return newSet;
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent, id: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        const buttonId = `accordion-button-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id} className="accordion-item">
            <h3 className="accordion-header">
              <button
                id={buttonId}
                type="button"
                className="accordion-button"
                onClick={() => toggleItem(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="accordion-question">{item.question}</span>
                <span className="accordion-icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
            </h3>
            
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`accordion-panel ${isOpen ? 'accordion-panel-open' : ''}`}
              hidden={!isOpen}
            >
              <div className="accordion-content">
                <p>{item.answer}</p>
                {item.category && (
                  <div className="accordion-category">
                    <span className="category-tag">{item.category}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      <style jsx>{`
        .accordion {
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          overflow: hidden;
          background: var(--bg-card);
        }

        .accordion-item {
          border-bottom: 1px solid var(--border-subtle);
        }

        .accordion-item:last-child {
          border-bottom: none;
        }

        .accordion-header {
          margin: 0;
        }

        .accordion-button {
          width: 100%;
          padding: 1.25rem;
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          transition: all 0.2s ease;
        }

        .accordion-button:hover {
          background: var(--bg-secondary);
          color: var(--accent-neon);
        }

        .accordion-button:focus {
          outline: 2px solid var(--accent-neon);
          outline-offset: -2px;
          background: var(--bg-secondary);
        }

        .accordion-question {
          flex: 1;
          line-height: 1.4;
        }

        .accordion-icon {
          background: var(--accent-neon);
          color: var(--bg-primary);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: bold;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .accordion-button[aria-expanded='true'] .accordion-icon {
          background: var(--accent-pink);
          transform: rotate(180deg);
        }

        .accordion-panel {
          overflow: hidden;
          transition: all 0.3s ease;
          max-height: 0;
          opacity: 0;
        }

        .accordion-panel-open {
          max-height: 500px;
          opacity: 1;
        }

        .accordion-content {
          padding: 0 1.25rem 1.25rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .accordion-content p {
          margin: 0 0 1rem;
          font-size: 0.95rem;
        }

        .accordion-category {
          margin-top: 1rem;
        }

        .category-tag {
          display: inline-block;
          background: var(--bg-primary);
          color: var(--accent-neon);
          border: 1px solid var(--border-subtle);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .accordion-button {
            padding: 1rem;
            font-size: 0.95rem;
          }

          .accordion-content {
            padding: 0 1rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .accordion-button {
            padding: 0.875rem;
          }

          .accordion-icon {
            width: 20px;
            height: 20px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}