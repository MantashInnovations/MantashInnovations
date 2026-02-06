export const projects = [
  {
    id: 1,
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    client: 'RetailMax Inc.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    description: 'A modern e-commerce platform with advanced features',
    problem: 'The client needed a scalable e-commerce solution that could handle high traffic during peak seasons while providing excellent user experience.',
    solution: 'We built a custom e-commerce platform using React, Node.js, and MongoDB with microservices architecture for scalability.',
    challenges: [
      'Handling 100K+ concurrent users',
      'Real-time inventory management',
      'Payment gateway integration',
      'SEO optimization'
    ],
    results: [
      '300% increase in conversion rate',
      '99.9% uptime during Black Friday',
      '50% reduction in page load time',
      '$2M+ in sales in first month'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
    testimonial: {
      text: 'ManTash Innovations transformed our online presence. The platform they built exceeded all our expectations and delivered incredible ROI.',
      author: 'John Smith',
      position: 'CEO, RetailMax Inc.',
      rating: 5
    }
  },
  {
    id: 2,
    slug: 'healthcare-mobile-app',
    title: 'Healthcare Mobile App',
    client: 'MediCare Solutions',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    description: 'A telemedicine app connecting patients with doctors',
    problem: 'Healthcare provider needed a HIPAA-compliant mobile app for virtual consultations and patient management.',
    solution: 'Developed a secure Flutter app with video calling, appointment scheduling, and electronic health records.',
    challenges: [
      'HIPAA compliance',
      'Secure video streaming',
      'Real-time notifications',
      'Cross-platform compatibility'
    ],
    results: [
      '50K+ downloads in 3 months',
      '95% user satisfaction rate',
      '40% reduction in no-shows',
      'Featured on App Store'
    ],
    technologies: ['Flutter', 'Firebase', 'WebRTC', 'Node.js'],
    testimonial: {
      text: 'The app has revolutionized how we deliver healthcare services. Patients love the convenience and our efficiency has improved significantly.',
      author: 'Dr. Sarah Johnson',
      position: 'Medical Director, MediCare Solutions',
      rating: 5
    }
  },
  {
    id: 3,
    slug: 'ai-chatbot-platform',
    title: 'AI-Powered Customer Service Platform',
    client: 'ServiceHub Corp',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    description: 'Intelligent chatbot reducing customer service costs',
    problem: 'Company was spending millions on customer service with long wait times and inconsistent quality.',
    solution: 'Built an AI chatbot using GPT-4, RAG system, and custom training on company data to handle 80% of queries.',
    challenges: [
      'Training on proprietary data',
      'Multilingual support',
      'Integration with existing systems',
      'Maintaining context in conversations'
    ],
    results: [
      '70% reduction in support costs',
      '24/7 instant responses',
      '85% query resolution rate',
      '4.8/5 customer satisfaction'
    ],
    technologies: ['Python', 'LangChain', 'GPT-4', 'Vector DB', 'FastAPI'],
    testimonial: {
      text: 'This AI solution has transformed our customer service. We can now serve more customers better while reducing costs significantly.',
      author: 'Michael Chen',
      position: 'CTO, ServiceHub Corp',
      rating: 5
    }
  },
  {
    id: 4,
    slug: 'fintech-dashboard',
    title: 'FinTech Analytics Dashboard',
    client: 'InvestPro',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    description: 'Real-time financial analytics and trading platform',
    problem: 'Financial firm needed a real-time analytics platform for traders with complex data visualization.',
    solution: 'Created a high-performance dashboard with real-time data streaming, advanced charts, and predictive analytics.',
    challenges: [
      'Real-time data processing',
      'Complex financial calculations',
      'Security and compliance',
      'Low-latency requirements'
    ],
    results: [
      'Sub-second data updates',
      '10K+ active traders',
      '99.99% uptime',
      '30% faster trading decisions'
    ],
    technologies: ['React', 'TypeScript', 'WebSocket', 'Python', 'PostgreSQL'],
    testimonial: {
      text: 'The dashboard gives our traders a competitive edge with instant insights and lightning-fast performance.',
      author: 'David Williams',
      position: 'Head of Trading, InvestPro',
      rating: 5
    }
  },
  {
    id: 5,
    slug: 'nft-marketplace',
    title: 'NFT Marketplace',
    client: 'ArtChain',
    category: 'Blockchain',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
    description: 'Decentralized marketplace for digital art and collectibles',
    problem: 'Artists needed a platform to mint, showcase, and sell NFTs with low fees and high security.',
    solution: 'Built a full-stack NFT marketplace on Ethereum with smart contracts, wallet integration, and gas optimization.',
    challenges: [
      'Smart contract security',
      'Gas optimization',
      'Wallet integration',
      'IPFS storage'
    ],
    results: [
      '$5M+ in transactions',
      '10K+ NFTs minted',
      'Zero security incidents',
      'Featured on CoinDesk'
    ],
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
    testimonial: {
      text: 'ManTash Innovations made our vision of a fair NFT marketplace a reality. The platform is secure, fast, and user-friendly.',
      author: 'Emma Davis',
      position: 'Founder, ArtChain',
      rating: 5
    }
  }
];
