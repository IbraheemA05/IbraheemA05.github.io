import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Al-Hanif's Blog</h3>
            <p className="text-gray-400">Sharing my cybersecurity, cloud, and tech journey</p>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <SocialLink href="https://github.com/IbraheemA05" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/ademiloye-al-hanif-ibraheem-4b5a3027a" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://x.com/IbraheemA50?t=tSBvIKPdGLBCRLjjzmi03A&s=09" icon={<Twitter size={20} />} label="Twitter" />
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Ademiloye Al-Hanif Ibraheem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;