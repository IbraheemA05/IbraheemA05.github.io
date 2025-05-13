import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Shield, Cloud, Database, Award, BookOpen, Lock, Terminal, Server, Network } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 relative">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg')] opacity-10 bg-cover bg-center"></div>
        <PageHeader 
          title="About Me" 
          subtitle="Hi, I'm Ademiloye Al-Hanif Ibraheem. I'm a Cybersecurity Analyst passionate about defending digital frontiers." 
        />
      </div>
      
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">My Journey</h2>
              <p className="text-gray-300 mb-4">
                My journey into technology began with a fascination for system security and digital defense mechanisms. 
                As cyber threats evolved, I dedicated myself to mastering the art of cybersecurity and protecting digital assets.
              </p>
              <p className="text-gray-300 mb-4">
                With experience spanning various aspects of cybersecurity and cloud computing, I've developed expertise in 
                threat detection, incident response, and secure cloud architecture.
              </p>
              <p className="text-gray-300">
                Through this blog, I share insights from the frontlines of cybersecurity, helping others understand and 
                implement robust security practices in our increasingly connected world.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Core Competencies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ExpertiseCard 
                  icon={<Shield size={24} />}
                  title="Threat Detection"
                  description="Advanced threat hunting and analysis"
                />
                <ExpertiseCard 
                  icon={<Terminal size={24} />}
                  title="Security Tools"
                  description="Mastery of security frameworks and tools"
                />
                <ExpertiseCard 
                  icon={<Network size={24} />}
                  title="Network Security"
                  description="Securing complex network infrastructures"
                />
                <ExpertiseCard 
                  icon={<Lock size={24} />}
                  title="Access Control"
                  description="Identity and access management"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Certifications & Achievements</h2>
          <div className="space-y-6">
            <CertificationCard 
              title="Certified Information Systems Security Professional (CISSP)"
              date="2022"
              description="Advanced certification in cybersecurity principles, covering security operations, network security, and risk management."
            />
            <CertificationCard 
              title="AWS Certified Security - Specialty"
              date="2022"
              description="Expert-level certification in AWS security services and best practices for securing cloud infrastructure."
            />
            <CertificationCard 
              title="Certified Ethical Hacker (CEH)"
              date="2021"
              description="Comprehensive training in ethical hacking methodologies and security assessment techniques."
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Secure the Digital Future</h2>
          <p className="text-xl mb-10 text-blue-100">
            I'm always interested in connecting with fellow security professionals and organizations 
            committed to strengthening their security posture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white font-medium px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Get in Touch
            </Link>
            <Link
              to="/blog"
              className="bg-transparent border-2 border-blue-400 text-blue-400 font-medium px-8 py-3 rounded-md hover:bg-blue-400/10 transition-colors duration-300"
            >
              Read My Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="text-blue-400 mr-4">{icon}</div>
      <div>
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

interface CertificationCardProps {
  title: string;
  date: string;
  description: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ title, date, description }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-700 hover:border-blue-500 transition-all duration-300">
      <div className="flex items-start">
        <div className="text-blue-400 mr-4">
          <Award size={24} />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-white">{title}</h4>
            <span className="text-sm text-gray-400">{date}</span>
          </div>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;