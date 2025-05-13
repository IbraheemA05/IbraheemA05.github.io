export type BlogCategory = 'tryhackme' | 'projects' | 'cybersecurity';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: number;
  excerpt: string;
  coverImage?: string;
  content: string;
  category: BlogCategory;
}