export interface Episode {
  id: string;
  number: number;
  slug: string;
  title: string;
  summary: string;
  publishDate: string; // ISO 8601
  duration: string;
  heroImage: string;
  audioSrc: string;
  tags: string[];
}

export const episodes: Episode[] = [
  {
    id: '001',
    number: 1,
    slug: 'the-future-of-tech',
    title: 'The Future of Technology: AI and Beyond',
    summary: 'Exploring the cutting-edge developments in artificial intelligence and their impact on society.',
    publishDate: '2024-01-15',
    duration: '42:15',
    heroImage: '/images/episode-01.jpg',
    audioSrc: '/media/episode-01.mp3',
    tags: ['AI', 'Technology', 'Future'],
  },
  {
    id: '002',
    number: 2,
    slug: 'quantum-computing-revolution',
    title: 'Quantum Computing: The Next Revolution',
    summary: 'Deep dive into quantum computing and how it will transform computing as we know it.',
    publishDate: '2024-01-22',
    duration: '38:45',
    heroImage: '/images/episode-02.jpg',
    audioSrc: '/media/episode-02.mp3',
    tags: ['Quantum', 'Computing', 'Science'],
  },
  {
    id: '003',
    number: 3,
    slug: 'blockchain-beyond-crypto',
    title: 'Blockchain Beyond Cryptocurrency',
    summary: 'Discovering real-world applications of blockchain technology outside of digital currencies.',
    publishDate: '2024-01-29',
    duration: '45:30',
    heroImage: '/images/episode-03.jpg',
    audioSrc: '/media/episode-03.mp3',
    tags: ['Blockchain', 'Innovation', 'Technology'],
  },
  {
    id: '004',
    number: 4,
    slug: 'sustainable-tech-solutions',
    title: 'Sustainable Tech Solutions for Climate Change',
    summary: 'How technology is being used to combat climate change and create a sustainable future.',
    publishDate: '2024-02-05',
    duration: '40:20',
    heroImage: '/images/episode-04.jpg',
    audioSrc: '/media/episode-04.mp3',
    tags: ['Sustainability', 'Climate', 'Innovation'],
  },
  {
    id: '005',
    number: 5,
    slug: 'cybersecurity-in-modern-world',
    title: 'Cybersecurity in the Modern World',
    summary: 'Understanding the evolving landscape of cybersecurity threats and defenses.',
    publishDate: '2024-02-12',
    duration: '44:10',
    heroImage: '/images/episode-05.jpg',
    audioSrc: '/media/episode-05.mp3',
    tags: ['Security', 'Privacy', 'Technology'],
  },
  {
    id: '006',
    number: 6,
    slug: 'space-exploration-tech',
    title: 'Space Exploration Technology',
    summary: 'The latest innovations propelling humanity toward the stars and beyond.',
    publishDate: '2024-02-19',
    duration: '47:55',
    heroImage: '/images/episode-06.jpg',
    audioSrc: '/media/episode-06.mp3',
    tags: ['Space', 'Exploration', 'Innovation'],
  },
  {
    id: '007',
    number: 7,
    slug: 'virtual-reality-metaverse',
    title: 'Virtual Reality and the Metaverse',
    summary: 'Exploring virtual worlds and the future of digital human interaction.',
    publishDate: '2024-02-26',
    duration: '41:30',
    heroImage: '/images/episode-07.jpg',
    audioSrc: '/media/episode-07.mp3',
    tags: ['VR', 'Metaverse', 'Digital'],
  },
  {
    id: '008',
    number: 8,
    slug: 'biotech-medical-breakthroughs',
    title: 'Biotech and Medical Breakthroughs',
    summary: 'Revolutionary advances in biotechnology and personalized medicine.',
    publishDate: '2024-03-05',
    duration: '43:25',
    heroImage: '/images/episode-08.jpg',
    audioSrc: '/media/episode-08.mp3',
    tags: ['Biotech', 'Medicine', 'Health'],
  },
  {
    id: '009',
    number: 9,
    slug: 'autonomous-vehicles-future',
    title: 'Autonomous Vehicles: Driving Into the Future',
    summary: 'The technology and challenges behind self-driving cars and transportation.',
    publishDate: '2024-03-12',
    duration: '39:15',
    heroImage: '/images/episode-09.jpg',
    audioSrc: '/media/episode-09.mp3',
    tags: ['Autonomous', 'Transportation', 'AI'],
  },
  {
    id: '010',
    number: 10,
    slug: 'renewable-energy-innovations',
    title: 'Renewable Energy Innovations',
    summary: 'Breakthrough technologies in solar, wind, and alternative energy sources.',
    publishDate: '2024-03-19',
    duration: '46:40',
    heroImage: '/images/episode-10.jpg',
    audioSrc: '/media/episode-10.mp3',
    tags: ['Renewable', 'Energy', 'Sustainability'],
  },
  {
    id: '011',
    number: 11,
    slug: 'neural-interfaces-brain-tech',
    title: 'Neural Interfaces and Brain Technology',
    summary: 'The fascinating world of brain-computer interfaces and neural enhancement.',
    publishDate: '2024-03-26',
    duration: '44:50',
    heroImage: '/images/episode-11.jpg',
    audioSrc: '/media/episode-11.mp3',
    tags: ['Neural', 'Brain', 'Interface'],
  },
  {
    id: '012',
    number: 12,
    slug: 'robotics-automation-future',
    title: 'Robotics and Automation in Everyday Life',
    summary: 'How robots and automation are reshaping work, home, and society.',
    publishDate: '2024-04-02',
    duration: '42:30',
    heroImage: '/images/episode-12.jpg',
    audioSrc: '/media/episode-12.mp3',
    tags: ['Robotics', 'Automation', 'Future'],
  },
  {
    id: '013',
    number: 13,
    slug: 'edge-computing-revolution',
    title: 'Edge Computing Revolution',
    summary: 'Understanding how edge computing is bringing processing power closer to data sources.',
    publishDate: '2024-04-09',
    duration: '40:45',
    heroImage: '/images/episode-13.jpg',
    audioSrc: '/media/episode-13.mp3',
    tags: ['Edge Computing', 'Infrastructure', 'Performance'],
  },
  {
    id: '014',
    number: 14,
    slug: 'digital-privacy-rights',
    title: 'Digital Privacy in the Information Age',
    summary: 'Protecting personal data and privacy in an increasingly connected world.',
    publishDate: '2024-04-16',
    duration: '43:20',
    heroImage: '/images/episode-14.jpg',
    audioSrc: '/media/episode-14.mp3',
    tags: ['Privacy', 'Security', 'Rights'],
  },
  {
    id: '015',
    number: 15,
    slug: 'smart-cities-urban-tech',
    title: 'Smart Cities and Urban Technology',
    summary: 'How technology is transforming urban living and city infrastructure.',
    publishDate: '2024-04-23',
    duration: '41:55',
    heroImage: '/images/episode-15.jpg',
    audioSrc: '/media/episode-15.mp3',
    tags: ['Smart Cities', 'Urban', 'Infrastructure'],
  },
  {
    id: '016',
    number: 16,
    slug: 'gene-editing-crispr',
    title: 'Gene Editing and CRISPR Technology',
    summary: 'The promise and ethical implications of genetic engineering and CRISPR.',
    publishDate: '2024-04-30',
    duration: '45:15',
    heroImage: '/images/episode-16.jpg',
    audioSrc: '/media/episode-16.mp3',
    tags: ['Gene Editing', 'CRISPR', 'Ethics'],
  },
  {
    id: '017',
    number: 17,
    slug: 'augmented-reality-applications',
    title: 'Augmented Reality: Enhancing Our World',
    summary: 'Practical applications of AR technology in education, work, and entertainment.',
    publishDate: '2024-05-07',
    duration: '38:40',
    heroImage: '/images/episode-17.jpg',
    audioSrc: '/media/episode-17.mp3',
    tags: ['AR', 'Augmented Reality', 'Applications'],
  },
  {
    id: '018',
    number: 18,
    slug: 'internet-of-things-iot',
    title: 'Internet of Things: Connected Everything',
    summary: 'How IoT devices are creating a more connected and intelligent world.',
    publishDate: '2024-05-14',
    duration: '42:10',
    heroImage: '/images/episode-18.jpg',
    audioSrc: '/media/episode-18.mp3',
    tags: ['IoT', 'Connected', 'Smart Devices'],
  },
  {
    id: '019',
    number: 19,
    slug: 'machine-learning-everyday-ai',
    title: 'Machine Learning in Everyday Life',
    summary: 'Understanding how ML algorithms influence our daily digital experiences.',
    publishDate: '2024-05-21',
    duration: '40:35',
    heroImage: '/images/episode-19.jpg',
    audioSrc: '/media/episode-19.mp3',
    tags: ['Machine Learning', 'AI', 'Everyday'],
  },
  {
    id: '020',
    number: 20,
    slug: 'tech-ethics-responsible-innovation',
    title: 'Tech Ethics and Responsible Innovation',
    summary: 'Examining the moral responsibilities of technologists and the future of ethical AI.',
    publishDate: '2024-05-28',
    duration: '47:20',
    heroImage: '/images/episode-20.jpg',
    audioSrc: '/media/episode-20.mp3',
    tags: ['Ethics', 'Responsibility', 'Innovation'],
  },
];

// Helper functions
export const getEpisodeBySlug = (slug: string): Episode | undefined => {
  return episodes.find((episode) => episode.slug === slug);
};

export const getLatestEpisodes = (count: number = 3): Episode[] => {
  return episodes
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, count);
};

export const sortEpisodesByDate = (ascending: boolean = false): Episode[] => {
  return [...episodes].sort((a, b) => {
    const dateA = new Date(a.publishDate).getTime();
    const dateB = new Date(b.publishDate).getTime();
    return ascending ? dateA - dateB : dateB - dateA;
  });
};

export const sortEpisodesByNumber = (ascending: boolean = true): Episode[] => {
  return [...episodes].sort((a, b) => {
    return ascending ? a.number - b.number : b.number - a.number;
  });
};