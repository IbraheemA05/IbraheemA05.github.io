import React, { useState } from 'react';
import { Search, Shield, Terminal, Code } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import BlogPostCard from '../components/BlogPostCard';
import { blogPosts } from '../data/blogPosts';
import { BlogCategory } from '../types/BlogTypes';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'All Posts', icon: Shield },
    { id: 'tryhackme', name: 'TryHackMe Writeups', icon: Terminal },
    { id: 'projects', name: 'Project Writeups', icon: Code },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
  ];

  return (
    <div className="pt-20">
      <PageHeader 
        title="Blog" 
        subtitle="Explore articles about cybersecurity, TryHackMe walkthroughs, and project writeups." 
        centered
      />

      <section className="py-12 container mx-auto px-4">
        {/* Categories */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as BlogCategory | 'all')}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-neon'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <category.icon size={18} className="mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 py-3 px-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-300 mb-2">No articles found</h3>
            <p className="text-gray-400">Try adjusting your search criteria</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogPage;