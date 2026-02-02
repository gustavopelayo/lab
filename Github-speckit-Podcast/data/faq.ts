export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqItems: FAQItem[] = [
  {
    id: '001',
    question: 'How often do you release new episodes?',
    answer: 'We release new episodes every Tuesday. Our team works hard to maintain a consistent schedule so you can look forward to fresh content weekly.',
    category: 'General',
  },
  {
    id: '002',
    question: 'Can I suggest topics or guests for future episodes?',
    answer: 'Absolutely! We love hearing from our community. You can send us your suggestions through our social media channels or contact form. We read every suggestion and consider them for future episodes.',
    category: 'Content',
  },
  {
    id: '003',
    question: 'Are there transcripts available for episodes?',
    answer: 'Yes, we provide full transcripts for all episodes. They are usually available within 24-48 hours after an episode is published. You can find them on each episode page.',
    category: 'Accessibility',
  },
  {
    id: '004',
    question: 'How can I be a guest on the show?',
    answer: 'We welcome interesting guests who have expertise in technology, innovation, or related fields. Please reach out through our contact page with your background and proposed topic.',
    category: 'Guests',
  },
  {
    id: '005',
    question: 'Do you offer video versions of episodes?',
    answer: 'Currently, we focus on audio content to provide the best listening experience. However, we are exploring video options and may offer them in the future.',
    category: 'Format',
  },
  {
    id: '006',
    question: 'How can I support the podcast?',
    answer: 'The best way to support us is by listening, subscribing, and sharing episodes with friends. You can also follow us on social media and engage with our community.',
    category: 'Support',
  },
  {
    id: '007',
    question: 'Are older episodes still available?',
    answer: 'Yes! Our entire catalog is available. You can browse all episodes in our episodes section or use the search feature to find specific topics.',
    category: 'Archive',
  },
  {
    id: '008',
    question: 'Do you have a mobile app?',
    answer: 'While we don\'t have a dedicated app, our website is fully optimized for mobile devices. You can also find us on all major podcast platforms.',
    category: 'Platform',
  },
  {
    id: '009',
    question: 'How do you choose your topics and guests?',
    answer: 'We focus on cutting-edge technology topics that affect our daily lives. Guest selection is based on expertise, innovation, and the ability to explain complex topics in an accessible way.',
    category: 'Content',
  },
  {
    id: '010',
    question: 'Can I download episodes for offline listening?',
    answer: 'Yes, all episodes can be downloaded for offline listening. Look for the download link on each episode page or use your favorite podcast app.',
    category: 'Technical',
  },
  {
    id: '011',
    question: 'Do you offer premium or ad-free content?',
    answer: 'Currently, all our content is free and accessible to everyone. We believe in making technology knowledge available to all listeners.',
    category: 'Access',
  },
  {
    id: '012',
    question: 'How can I stay updated on new episodes?',
    answer: 'Subscribe to our podcast on your favorite platform, follow us on social media, or check back on our website every Tuesday for the latest episode.',
    category: 'Updates',
  },
];

// Helper functions
export const getFAQByCategory = (category: string): FAQItem[] => {
  return faqItems.filter((item) => item.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = faqItems
    .map((item) => item.category)
    .filter((category): category is string => category !== undefined);
  return Array.from(new Set(categories)).sort();
};