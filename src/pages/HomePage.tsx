import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Code, Server, Github, Linkedin, Twitter } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg')] opacity-5 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-matrix-grid opacity-10 animate-matrix"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6 animate-glow">
            <Shield size={64} className="mx-auto text-blue-400 mb-4" />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow">
              Al-Hanif Ibraheem
            </h1>
            <p className="text-2xl md:text-3xl text-blue-400 font-semibold">
              Cybersecurity Analyst & Cloud Security Expert
            </p>
          </div>
          
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-300">
            Protecting digital assets and securing cloud infrastructure through advanced security analysis and implementation.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <SocialLink href="https://github.com/IbraheemA05" icon={<Github size={24} />} />
            <SocialLink href="https://www.linkedin.com/in/ademiloye-al-hanif-ibraheem-4b5a3027a" icon={<Linkedin size={24} />} />
            <SocialLink href="https://x.com/IbraheemA50?t=tSBvIKPdGLBCRLjjzmi03A&s=09" icon={<Twitter size={24} />} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="bg-blue-600 text-white font-medium px-8 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 shadow-neon"
            >
              Read My Blog
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-blue-400 text-blue-400 font-medium px-8 py-3 rounded-md hover:bg-blue-400/10 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse-slow"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-400">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              icon={<Shield size={32} />}
              title="Threat Analysis"
              description="Advanced threat detection and incident response capabilities"
            />
            <SkillCard
              icon={<Lock size={32} />}
              title="Security Architecture"
              description="Designing and implementing robust security systems"
            />
            <SkillCard
              icon={<Server size={32} />}
              title="Cloud Security"
              description="Securing cloud infrastructure and applications"
            />
            <SkillCard
              icon={<Code size={32} />}
              title="Secure Development"
              description="Implementing security-first development practices"
            />
            <SkillCard
              icon={<Shield size={32} />}
              title="Risk Management"
              description="Identifying and mitigating security risks"
            />
            <SkillCard
              icon={<Lock size={32} />}
              title="Compliance"
              description="Ensuring adherence to security standards"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Secure Your Digital Future</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Whether you need consultation on cybersecurity, cloud security implementation, or want to collaborate on a project,
            I'm here to help protect your digital assets.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white font-medium px-8 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 shadow-neon"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
      <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default HomePage;