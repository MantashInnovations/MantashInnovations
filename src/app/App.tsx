import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import { HomePage } from '@/app/pages/HomePage';
import { AboutPage } from '@/app/pages/AboutPage';
import { ServicesPage } from '@/app/pages/ServicesPage';
import { ServiceDetailPage } from '@/app/pages/ServiceDetailPage';
import { PortfolioPage } from '@/app/pages/PortfolioPage';
import { ProjectDetailPage } from '@/app/pages/ProjectDetailPage';
import { TechnologiesPage } from '@/app/pages/TechnologiesPage';
import { ContactPage } from '@/app/pages/ContactPage';
import { BlogPage } from '@/app/pages/BlogPage';
import { BlogDetailPage } from '@/app/pages/BlogDetailPage';
import { TestimonialsPage } from '@/app/pages/TestimonialsPage';
import { CareersPage } from '@/app/pages/CareersPage';
import { NotFoundPage } from '@/app/pages/NotFoundPage';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { FontLoader } from '@/app/components/FontLoader';
import { useEffect } from 'react';
import { initializeErrorSuppressor } from '@/app/utils/errorSuppressor';
import { Toaster } from 'sonner';

function Layout() {
  // Initialize global error suppression
  useEffect(() => {
    initializeErrorSuppressor();
    
    // Additional DOM-level image error suppression
    const handleImageError = (e: Event) => {
      const target = e.target as HTMLImageElement;
      if (target && target.tagName === 'IMG') {
        const src = target.src || '';
        const patterns = [
          'google.com',
          'googlelogo',
          'microsoft',
          'akamaized',
          'unsplash',
          'wikipedia'
        ];
        
        const shouldSuppress = patterns.some(pattern => src.includes(pattern));
        
        if (shouldSuppress) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          
          if (process.env.NODE_ENV === 'development') {
            console.debug('[DOM Image error suppressed]:', src.substring(0, 60));
          }
        }
      }
    };
    
    // Capture phase to catch errors before they bubble
    document.addEventListener('error', handleImageError, true);
    
    return () => {
      document.removeEventListener('error', handleImageError, true);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <FontLoader />
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster position="top-center" theme="dark" />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'services/:slug',
        element: <ServiceDetailPage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'portfolio/:slug',
        element: <ProjectDetailPage />,
      },
      {
        path: 'technologies',
        element: <TechnologiesPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
      {
        path: 'blog/:slug',
        element: <BlogDetailPage />,
      },
      {
        path: 'testimonials',
        element: <TestimonialsPage />,
      },
      {
        path: 'careers',
        element: <CareersPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
