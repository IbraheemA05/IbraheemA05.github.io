import { BlogPost } from '../types/BlogTypes';

export const blogPosts: BlogPost[] = [
  {
    id: 'getting-started-cybersecurity',
    title: 'How I Got Into Cybersecurity',
    date: 'June 15, 2023',
    readTime: 8,
    category: 'cybersecurity',
    excerpt: 'My journey into cybersecurity began with curiosity and developed into a passion. Here\'s how I navigated the learning curve and found my place in this exciting field.',
    coverImage: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: `
      <p>My journey into cybersecurity began with a simple curiosity about how systems work and how they can be protected. What started as a hobby quickly developed into a passion as I delved deeper into the fascinating world of digital security.</p>
      
      <h2>The Beginning</h2>
      <p>Like many others in this field, I started by learning the basics of networking and operating systems. Understanding how data moves across networks and how systems communicate with each other provided the foundation I needed.</p>
      
      <p>My first real exposure to cybersecurity concepts came through online courses and CTF (Capture The Flag) competitions. These challenges pushed me to think like both a defender and an attacker, giving me valuable insights into security vulnerabilities and how to address them.</p>
      
      <h2>Education and Certifications</h2>
      <p>As my interest grew, I realized I needed more structured learning. I pursued formal education in computer science, focusing on security-related courses. The combination of theoretical knowledge and practical application was invaluable.</p>
      
      <p>Certifications played a crucial role in validating my skills and opening doors to opportunities. Starting with CompTIA Security+ gave me a solid foundation, which I later built upon with more specialized certifications.</p>
      
      <h2>Professional Growth</h2>
      <p>My first professional role in cybersecurity was as a junior analyst. This position exposed me to real-world security operations and incident response. The learning curve was steep, but the experience was invaluable.</p>
      
      <p>As I gained more experience, I began to focus on specific areas within cybersecurity. Cloud security, in particular, caught my interest as organizations increasingly moved their infrastructure to the cloud.</p>
      
      <h2>Continuous Learning</h2>
      <p>The cybersecurity field evolves rapidly, making continuous learning essential. I stay updated through professional communities, conferences, and by following industry leaders and security researchers.</p>
      
      <p>One of the most exciting aspects of cybersecurity is that there's always something new to learn. Whether it's a novel attack technique, a new tool, or an emerging technology, the field keeps you engaged and challenged.</p>
      
      <h2>Advice for Beginners</h2>
      <p>If you're considering a career in cybersecurity, here's my advice:</p>
      <ul>
        <li>Start with the fundamentals: networking, operating systems, and basic programming</li>
        <li>Practice with hands-on labs and CTF competitions</li>
        <li>Join cybersecurity communities to learn from others and stay inspired</li>
        <li>Pursue relevant certifications to validate your skills</li>
        <li>Develop a growth mindset and embrace continuous learning</li>
      </ul>
      
      <p>The cybersecurity field is both challenging and rewarding. It offers endless opportunities for growth and the satisfaction of knowing that your work helps protect organizations and individuals from digital threats.</p>
      
      <p>I'm excited to continue sharing my experiences and insights as I progress in this fascinating field. Stay tuned for more posts on specific cybersecurity topics and technologies!</p>
    `
  },
  {
    id: 'basic-pentesting-room',
    title: 'TryHackMe: Basic Pentesting Walkthrough',
    date: 'March 15, 2024',
    readTime: 15,
    category: 'tryhackme',
    excerpt: 'A detailed walkthrough of the Basic Pentesting room on TryHackMe, covering enumeration, exploitation, and privilege escalation.',
    coverImage: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: `
      <h2>Room Overview</h2>
      <p>The Basic Pentesting room on TryHackMe is an excellent starting point for beginners in penetration testing. This walkthrough will guide you through the process of compromising the machine while explaining each step.</p>

      <h2>Initial Enumeration</h2>
      <p>We begin with basic enumeration using nmap to discover open ports and services...</p>

      <h2>Web Application Analysis</h2>
      <p>The target is running a web server that requires careful analysis...</p>

      <h2>Gaining Access</h2>
      <p>After discovering vulnerabilities in the web application...</p>

      <h2>Privilege Escalation</h2>
      <p>With initial access secured, we move on to escalating our privileges...</p>

      <h2>Lessons Learned</h2>
      <p>This room teaches valuable lessons about basic penetration testing methodology...</p>
    `
  },
  {
    id: 'secure-chat-app',
    title: 'Building a Secure Chat Application',
    date: 'February 20, 2024',
    readTime: 12,
    category: 'projects',
    excerpt: 'A detailed walkthrough of building a secure chat application using end-to-end encryption and secure WebSocket connections.',
    coverImage: 'https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: `
      <h2>Project Overview</h2>
      <p>In this project, we'll build a secure chat application implementing end-to-end encryption...</p>

      <h2>Security Features</h2>
      <p>The application includes several security measures to protect user data...</p>

      <h2>Implementation Details</h2>
      <p>We'll use modern cryptography libraries and secure WebSocket connections...</p>

      <h2>Testing and Validation</h2>
      <p>Security testing is crucial for any chat application...</p>

      <h2>Deployment Considerations</h2>
      <p>When deploying the application, several security considerations must be addressed...</p>
    `
  }
];