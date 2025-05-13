import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Twitter, Github } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <PageHeader 
        title="Contact Me" 
        subtitle="Have a question or want to work together? I'd love to hear from you."
        centered
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                Feel free to reach out with any questions about cybersecurity, cloud computing, 
                or if you're interested in collaborating on a project. I'm always open 
                to connecting with fellow professionals and enthusiasts.
              </p>
              
              <div className="space-y-6 mb-10">
                <ContactDetail 
                  icon={<Mail className="text-blue-600" size={20} />}
                  title="Email"
                  detail="your.email@example.com"
                  link="mailto:your.email@example.com"
                />
                <ContactDetail 
                  icon={<Linkedin className="text-blue-600" size={20} />}
                  title="LinkedIn"
                  detail="Ademiloye Al-Hanif Ibraheem"
                  link="https://www.linkedin.com/in/ademiloye-al-hanif-ibraheem-4b5a3027a"
                />
                <ContactDetail 
                  icon={<Twitter className="text-blue-600" size={20} />}
                  title="Twitter"
                  detail="@IbraheemA50"
                  link="https://x.com/IbraheemA50?t=tSBvIKPdGLBCRLjjzmi03A&s=09"
                />
                <ContactDetail 
                  icon={<Github className="text-blue-600" size={20} />}
                  title="GitHub"
                  detail="IbraheemA05"
                  link="https://github.com/IbraheemA05"
                />
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Response Time</h3>
                <p className="text-gray-700">
                  I typically respond to all inquiries within 24-48 hours. For urgent matters, 
                  please indicate so in your message.
                </p>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Looking for Collaboration?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            I'm open to speaking opportunities, guest posting, and collaborative projects 
            in the cybersecurity and cloud computing space.
          </p>
          <a 
            href="https://www.linkedin.com/in/ademiloye-al-hanif-ibraheem-4b5a3027a" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-white text-blue-700 font-medium px-8 py-3 rounded-md hover:bg-blue-50 transition-colors duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

interface ContactDetailProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  link: string;
}

const ContactDetail: React.FC<ContactDetailProps> = ({ icon, title, detail, link }) => {
  return (
    <div className="flex items-start">
      <div className="mr-3 mt-1">{icon}</div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          {detail}
        </a>
      </div>
    </div>
  );
};

export default ContactPage;