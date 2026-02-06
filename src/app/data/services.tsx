import { Code2, Smartphone, Palette, Brain, Link2, Zap, LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  technologies: string[];
  color: string;
}

export const services: Service[] = [
  {
    id: 1,
    slug: 'web-development',
    title: 'Web Development',
    icon: Code2,
    description: 'Build powerful, scalable web applications with cutting-edge technologies and best practices.',
    features: [
      'Custom web application development',
      'Responsive and mobile-first design',
      'RESTful API development',
      'Database design and optimization'
    ],
    technologies: ['React', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    color: '#00E5FF'
  },
  {
    id: 2,
    slug: 'mobile-app',
    title: 'Mobile Application Development',
    icon: Smartphone,
    description: 'Create stunning mobile apps for iOS and Android with Flutter for seamless cross-platform experiences.',
    features: [
      'Cross-platform mobile app development',
      'Native iOS and Android apps',
      'App Store and Play Store deployment',
      'Push notifications and real-time features'
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'React Native'],
    color: '#00E5FF'
  },
  {
    id: 3,
    slug: 'uiux-design',
    title: 'UI/UX Design',
    icon: Palette,
    description: 'Design beautiful, intuitive interfaces that delight users and drive engagement.',
    features: [
      'User research and persona development',
      'Wireframing and prototyping',
      'Visual design and brand identity',
      'Usability testing and iteration'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
    color: '#00E5FF'
  },
  {
    id: 4,
    slug: 'ai-ml',
    title: 'AI/ML Solutions',
    icon: Brain,
    description: 'Harness the power of AI and machine learning to automate processes and gain insights.',
    features: [
      'Machine learning model development',
      'Natural language processing',
      'Computer vision solutions',
      'Predictive analytics'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face'],
    color: '#00E5FF'
  },
  {
    id: 5,
    slug: 'langchain',
    title: 'LangChain Development',
    icon: Link2,
    description: 'Build sophisticated LLM-powered applications, agents, and workflows using the LangChain framework.',
    features: [
      'Custom LLM application development',
      'Intelligent autonomous agents',
      'Advanced RAG implementation',
      'Chain optimization and deployment'
    ],
    technologies: ['LangChain', 'OpenAI', 'Pinecone', 'Vercel AI SDK'],
    color: '#00E5FF'
  },
  {
    id: 6,
    slug: 'ai-projects',
    title: 'AI Transformation Projects',
    icon: Zap,
    description: 'End-to-end AI transformation services to revolutionize your business operations.',
    features: [
      'AI strategy and roadmap',
      'Custom AI model training',
      'RAG systems and chatbots',
      'AI integration and deployment'
    ],
    technologies: ['LangChain', 'LangGraph', 'GPT', 'BERT', 'Transformers'],
    color: '#00E5FF'
  }
];
