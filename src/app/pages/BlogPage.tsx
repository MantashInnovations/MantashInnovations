import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const blogPosts = [
  {
    id: 1,
    slug: 'web-development-trends-2026',
    title: 'Web Development Trends to Watch in 2026',
    excerpt: 'Explore the latest trends shaping the future of web development',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
    category: 'Web Development',
    author: 'Alex Johnson',
    date: 'Jan 20, 2026',
  },
  {
    id: 2,
    slug: 'ai-transforming-business',
    title: 'How AI is Transforming Modern Business',
    excerpt: 'Discover how artificial intelligence is revolutionizing industries',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    category: 'AI/ML',
    author: 'Michael Brown',
    date: 'Jan 18, 2026',
  },
  {
    id: 3,
    slug: 'mobile-app-best-practices',
    title: 'Mobile App Development Best Practices',
    excerpt: 'Learn the essential practices for building successful mobile apps',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    category: 'Mobile',
    author: 'Sarah Chen',
    date: 'Jan 15, 2026',
  },
  {
    id: 4,
    slug: 'ux-design-principles',
    title: 'Essential UX Design Principles for 2026',
    excerpt: 'Master the fundamentals of user experience design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    category: 'Design',
    author: 'Emily Davis',
    date: 'Jan 12, 2026',
  },
  {
    id: 5,
    slug: 'blockchain-explained',
    title: 'Blockchain Technology Explained Simply',
    excerpt: 'A beginner-friendly guide to understanding blockchain',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
    category: 'Blockchain',
    author: 'James Wilson',
    date: 'Jan 10, 2026',
  },
  {
    id: 6,
    slug: 'api-security-guide',
    title: 'Complete Guide to API Security',
    excerpt: 'Protect your APIs with these essential security practices',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    category: 'Security',
    author: 'Alex Johnson',
    date: 'Jan 8, 2026',
  },
];

export function BlogPage() {
  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-primary">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Insights, tips, and trends from the world of technology
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all">
                    <div className="aspect-video overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold mt-4 mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-primary">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
