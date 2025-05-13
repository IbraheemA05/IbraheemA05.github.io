import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.id === postId);
  
  useEffect(() => {
    if (!post) {
      return;
    }
    
    // Update the page title
    document.title = `${post.title} | Al-Hanif's Blog`;
    
    // Scroll to top on load
    window.scrollTo(0, 0);
    
    return () => {
      // Reset title when unmounting
      document.title = 'Al-Hanif\'s Blog';
    };
  }, [post]);
  
  if (!post) {
    return (
      <div className="pt-32 pb-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-8 text-gray-600">The blog post you're looking for doesn't exist.</p>
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to all articles
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {/* Back button */}
      <div className="container mx-auto px-4 mb-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to all articles
        </Link>
      </div>
      
      {/* Featured image */}
      {post.coverImage && (
        <div className="w-full h-64 sm:h-96 mb-8 overflow-hidden">
          <img 
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <article className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Article header */}
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 gap-4 text-sm">
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>Ademiloye Al-Hanif Ibraheem</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-1" />
                <span>Cybersecurity</span>
              </div>
            </div>
          </header>
          
          {/* Article content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Article footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">About the author</h3>
                <p className="text-gray-600">
                  Ademiloye Al-Hanif Ibraheem is a Cybersecurity Analyst passionate about web and cloud security.
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  to="/about"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  About Me
                </Link>
                <Link
                  to="/contact"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </article>
      
      {/* Related articles */}
      <section className="mt-16 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map(relatedPost => (
                <div key={relatedPost.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  {relatedPost.coverImage && (
                    <Link to={`/blog/${relatedPost.id}`} className="block h-40 overflow-hidden">
                      <img 
                        src={relatedPost.coverImage} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </Link>
                  )}
                  <div className="p-4">
                    <Link to={`/blog/${relatedPost.id}`}>
                      <h3 className="font-bold text-gray-900 hover:text-blue-600 transition-colors mb-2">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-500 mb-4">{relatedPost.date} · {relatedPost.readTime} min read</p>
                    <Link 
                      to={`/blog/${relatedPost.id}`} 
                      className="text-blue-600 text-sm font-medium hover:text-blue-800"
                    >
                      Read article →
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;