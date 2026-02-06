import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function BlogDetailPage() {
  const { slug } = useParams();

  return (
    <div className="pt-16 min-h-screen">
      <article className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>

          <ImageWithFallback
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=600&fit=crop"
            alt="Blog post"
            className="w-full h-96 object-cover rounded-xl mb-8"
          />

          <div className="flex items-center gap-6 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Alex Johnson</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Jan 20, 2026</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              This is a sample blog post. In a real application, this content would be fetched from a database or CMS.
            </p>

            <h2>Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <h2>Main Content</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`function example() {
  console.log("Hello World");
  return true;
}`}</code>
            </pre>

            <h2>Conclusion</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
