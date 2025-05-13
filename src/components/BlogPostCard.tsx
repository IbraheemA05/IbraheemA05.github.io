import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Shield, Terminal, Code } from 'lucide-react';
import { BlogPost, BlogCategory } from '../types/BlogTypes';

interface BlogPostCardProps {
  post: BlogPost;
}

const getCategoryIcon = (category: BlogCategory) => {
  switch (category) {
    case 'tryhackme':
      return <Terminal size={16} />;
    case 'projects':
      return <Code size={16} />;
    case 'cybersecurity':
      return <Shield size={16} />;
  }
};

const getCategoryName = (category: BlogCategory) => {
  switch (category) {
    case 'tryhackme':
      return 'TryHackMe';
    case 'projects':
      return 'Project';
    case 'cybersecurity':
      return 'Cybersecurity';
  }
};

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-700 hover:border-blue-500">
      {post.coverImage && (
        <Link to={`/blog/${post.id}`} className="block overflow-hidden h-48">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </Link>
      )}
      <div className="p-6">
        <div className="flex gap-4 mb-3 text-sm text-gray-400">
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
        
        <div className="mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600/20 text-blue-400">
            {getCategoryIcon(post.category)}
            <span className="ml-1">{getCategoryName(post.category)}</span>
          </span>
        </div>
        
        <Link to={`/blog/${post.id}`}>
          <h2 className="text-xl font-bold mb-2 text-white hover:text-blue-400 transition-colors duration-200">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
        
        <Link to={`/blog/${post.id}`} className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200">
          Read more →
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard;