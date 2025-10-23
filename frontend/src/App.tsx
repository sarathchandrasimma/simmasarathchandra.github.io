import { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Moon, 
  Sun, 
  Youtube, 
  Instagram, 
  Code, 
  Database, 
  BarChart,
  Brain,
  Dumbbell,
} from 'lucide-react';
import profileImage from "./profile.jpg"
import Resume from "./SarathChandra_resume.pdf"
import fitness from "./fitness.jpg"
import cisco from './cisco.png'
import infosys from "./infosys.jpeg"
import nptel from "./nptel.jpeg"
import nptel2 from "./nptel2.png"
import mongodbCert from "./mongodb certification.jpg"
import salesforceAgentforce from "./salesforce agentforce.jpeg"
import shopnav from "./shopnav.png"
import BorrowerInfoExhange from "./BorrowerInfoExhange.png"
import oracleCert from "./oracleDataScienceCertificate.png"; 
import linktree from "./linktree.png"
import movieMowa from "./movieMowa.png"
import reversee from "./reversee.png"

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<{
    image: string;
    title: string;
    fileName: string;
  } | null>(null);
  
  const texts = [
    "Data Science Aspirant",
    "Content Creator",
    "Fitness Enthusiast",
    "AI Enthusiast"
  ];
  useEffect(() => {
  const currentText = texts[currentTextIndex];

  let timeout: any;

  if (!isDeleting && displayText.length < currentText.length) {
    timeout = setTimeout(() => {
      setDisplayText(currentText.substring(0, displayText.length + 1));
    }, 150);
  } else if (isDeleting && displayText.length > 0) {
    timeout = setTimeout(() => {
      setDisplayText(currentText.substring(0, displayText.length - 1));
    }, 80);
  } else if (!isDeleting && displayText === currentText) {
    timeout = setTimeout(() => {
      setIsDeleting(true);
    }, 1500);
  } else if (isDeleting && displayText === '') {
    setIsDeleting(false);
    setCurrentTextIndex((currentTextIndex + 1) % texts.length);
  }

  return () => clearTimeout(timeout);
}, [displayText, isDeleting, texts, currentTextIndex]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedCertificate) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedCertificate]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Certificate data
  const certificates = [
    {
      image: mongodbCert,
      title: "MongoDB Associate Developer Global Certification",
      fileName: "mongodb-certification.jpg",
      badge: "Global Certification",
      badgeStyle: darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800',
      description: "MongoDB Associate Developer Global Certification demonstrating proficiency in MongoDB database development and operations."
    },
    {
      image: salesforceAgentforce,
      title: "Salesforce Agentforce Certification",
      fileName: "salesforce-agentforce.jpeg",
      badge: "Agentforce Specialist",
      badgeStyle: darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800',
      description: "Salesforce Agentforce certification demonstrating expertise in AI-powered automation and intelligent agent development."
    },
    {
      image: oracleCert,
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      fileName: "oracleDataScienceCertificate.png",
      badge: "Oracle Certified Professional",
      badgeStyle: darkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800',
      description: "Global certification by Oracle University for proficiency in Data Science on Oracle Cloud Infrastructure."
    },
    {
      image: nptel,
      title: "NPTEL Data Engineering Certificate",
      fileName: "nptel-data-engineering.jpeg",
      badge: "Elite",
      badgeStyle: darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800',
      description: "Comprehensive data engineering course covering data pipelines, ETL processes, and database management."
    },

    {
      image: nptel2,
      title: "NPTEL Introduction to Machine Learning",
      fileName: "nptel-intro-ml.png",
      badge: "Elite",
      badgeStyle: darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800',
      description: "Introduction to Machine Learning course from NPTEL covering supervised and unsupervised learning basics."
    },
    {
      image: infosys,
      title: "Infosys Springboard Internship Certificate",
      fileName: "infosys-springboard.jpeg",
      badge: null,
      badgeStyle: "",
      description: "Hands-on experience with real-world data science projects and enterprise-level applications."
    },
    {
      image: cisco,
      title: "Cisco Python Essential Certificate",
      fileName: "cisco-python-essential.png",
      badge: "Cisco Essential",
      badgeStyle: darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800',
      description: "Comprehensive training in Cisco Python Essential - 1."
    }
  ];

  const handleCertificateClick = (cert: typeof certificates[0]) => {
    setSelectedCertificate({
      image: cert.image,
      title: cert.title,
      fileName: cert.fileName
    });
  };

  const handleOpenCertificate = () => {
    if (selectedCertificate) {
      window.open(selectedCertificate.image, '_blank');
    }
  };

  const handleDownloadCertificate = () => {
    if (selectedCertificate) {
      const link = document.createElement('a');
      link.href = selectedCertificate.image;
      link.download = selectedCertificate.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navbar */}
      <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Simma Sarath Chandra</h1>
          <div className="flex items-center space-x-6">
            <a href="#about" className="hidden md:block hover:text-blue-500 transition-colors">About</a>
            <a href="#skills" className="hidden md:block hover:text-blue-500 transition-colors">Skills</a>
            <a href="#certifications" className="hidden md:block hover:text-blue-500 transition-colors">Certifications</a>
            <a href="#projects" className="hidden md:block hover:text-blue-500 transition-colors">Projects</a>
            <a href="#content" className="hidden md:block hover:text-blue-500 transition-colors">Content</a>
            <a href="#contact" className="hidden md:block hover:text-blue-500 transition-colors">Contact</a>
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-blue-500 shadow-xl">
            <img 
              src={profileImage}
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Simma Sarath Chandra</h1>
          <div className="h-8 mb-8">
            <h2 className={`text-xl md:text-2xl font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {displayText}<span className="animate-pulse">|</span>
            </h2>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/sarathchandrasimma" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow-md transition-all`}
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/simma-sarathchandra/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow-md transition-all`}
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:sarathchandra.simma04@gmail.com" 
              className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow-md transition-all`}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className={`border-b-4 ${darkMode ? 'border-blue-400' : 'border-blue-500'} pb-2`}>About Me</span>
          </h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed">
            <p className="mb-6">
              I blend strong academic foundations with creative pursuits — building YouTube channels, exploring AI tools, and staying consistent with my fitness goals.
            </p>
            <p>
              I believe in fast learning, adaptability, and always pushing the bar higher. My goal is to leverage data science and AI to create innovative solutions that make a positive impact.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className={`border-b-4 ${darkMode ? 'border-blue-400' : 'border-blue-500'} pb-2`}>Tech Skills</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-lg'} transition-all flex flex-col items-center`}>
              <Code size={40} className={`mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              <h3 className="text-xl font-semibold">Python</h3>
            </div>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-lg'} transition-all flex flex-col items-center`}>
              <Code size={40} className={`mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              <h3 className="text-xl font-semibold">C++</h3>
            </div>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-lg'} transition-all flex flex-col items-center`}>
              <Database size={40} className={`mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              <h3 className="text-xl font-semibold">SQL</h3>
            </div>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-lg'} transition-all flex flex-col items-center`}>
              <BarChart size={40} className={`mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              <h3 className="text-xl font-semibold">Power BI</h3>
            </div>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-lg'} transition-all flex flex-col items-center`}>
              <Database size={40} className={`mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              <h3 className="text-xl font-semibold">Pandas</h3>
            </div>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-lg'} transition-all flex flex-col items-center`}>
              <BarChart size={40} className={`mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              <h3 className="text-xl font-semibold">Matplotlib</h3>
            </div>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-lg'} transition-all flex flex-col items-center`}>
              <Brain size={40} className={`mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              <h3 className="text-xl font-semibold">MERN - on going</h3>
            </div>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-lg'} transition-all flex flex-col items-center`}>
              <Github size={40} className={`mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              <h3 className="text-xl font-semibold">Git & GitHub</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      {/* <section id="certifications" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className={`border-b-4 ${darkMode ? 'border-blue-400' : 'border-blue-500'} pb-2`}>Certifications</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-md hover:shadow-xl transition-all`}>
              <a href=""></a><h3 className="text-xl font-bold mb-3">NPTEL Data Engineering</h3>
              <p className={`inline-block px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>Elite</p>
              <p className="mt-4">Comprehensive data engineering course covering data pipelines, ETL processes, and database management.</p>
            </div>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-md hover:shadow-xl transition-all`}>
              <h3 className="text-xl font-bold mb-3">Infosys Springboard Internship</h3>
              <p className="mt-4">Hands-on experience with real-world data science projects and enterprise-level applications.</p>
            </div>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-md hover:shadow-xl transition-all`}>
              <h3 className="text-xl font-bold mb-3">Infosys Data Visualization Path</h3>
              <p className={`inline-block px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'}`}>13 certifications</p>
              <p className="mt-4">Comprehensive training in data visualization techniques, tools, and best practices.</p>
            </div>
          </div>
        </div>
      </section> */}
      {/*<section id="certifications" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 text-center">
      <span className={`border-b-4 ${darkMode ? 'border-blue-400' : 'border-blue-500'} pb-2`}>
        Certifications
      </span>
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: 'NPTEL Data Engineering',
          badge: 'Elite',
          badgeStyle: darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800',
          description: 'Comprehensive data engineering course covering data pipelines, ETL processes, and database management.',
        },
        {
          title: 'Infosys Springboard Internship',
          description: 'Hands-on experience with real-world data science projects and enterprise-level applications.',
        },
        {
          title: 'Infosys Data Visualization Path',
          badge: '13 certifications',
          badgeStyle: darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800',
          description: 'Comprehensive training in data visualization techniques, tools, and best practices.',
        },
      ].map((cert, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 
            ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} 
            shadow-md hover:shadow-2xl`}
        >
          <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
          {cert.badge && (
            <p className={`inline-block px-3 py-1 rounded-full text-sm mb-2 ${cert.badgeStyle}`}>
              {cert.badge}
            </p>
          )}
          <p className="mt-4">{cert.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
*/}
<section id="certifications" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 text-center">
      <span className={`border-b-4 ${darkMode ? 'border-blue-400' : 'border-blue-500'} pb-2`}>
        Certifications
      </span>
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {certificates.map((cert, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer
            ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} 
            shadow-md hover:shadow-2xl group`}
          onClick={() => handleCertificateClick(cert)}
        >
          <div className="relative">
            <img 
              src={cert.image} 
              alt={cert.title} 
              className="w-full h-auto rounded mb-4 shadow-sm hover:shadow-md transition-shadow" 
            />
            {/* Click indicator overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded mb-4 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>
          {cert.badge && (
            <p className={`inline-block px-3 py-1 rounded-full text-sm mb-2 ${cert.badgeStyle}`}>
              {cert.badge}
            </p>
          )}
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-4`}>
            {cert.description}
          </p>
          {/* Click hint */}
          <p className={`text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            Click to view options
          </p>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* Projects Section
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className={`border-b-4 ${darkMode ? 'border-blue-400' : 'border-blue-500'} pb-2`}>Projects</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">⚙️ ShopNav (AI Product Scraper)</h4>
                  <p className="text-gray-400">In Progress</p>
                  <p className="mt-2">An intelligent web scraper that navigates e-commerce sites to find and compare products based on user specifications.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">⚙️ Borrower Info Exchange Dashboard</h4>
                  <p className="text-gray-400">In Progress</p>
                  <p className="mt-2">A comprehensive dashboard for tracking and managing borrower information with data visualization and analytics capabilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Projects Section */}
{/* <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 text-center">
      <span className={`border-b-4 ${darkMode ? 'border-blue-400' : 'border-blue-500'} pb-2`}>
        Projects
      </span>
    </h2>
    <div className="overflow-x-auto">
      <div className="flex gap-6 w-max px-2">
        {/* Project Card */}
        {/* {[
          {
            name: "ShopNav (AI Product Scraper)",
            description: "An intelligent web scraper that navigates e-commerce sites to find and compare products based on user specifications.",
            link: "https://shopnav-price-pilot.vercel.app/",
            github: "https://github.com/sarathchandrasimma/shopnav-price-pilot.git",
          },
          {
            name: "Borrower Info Exchange Dashboard",
            description: "A comprehensive dashboard for tracking and managing borrower information with data visualization and analytics capabilities.",
            link: "https://bank-borrower-nexus-ai.vercel.app/",
            github: "https://github.com/sarathchandrasimma/bank-borrower-nexus-ai.git",
          },
        ].map((project, idx) => (
          <div
            key={idx}
            className={`w-80 min-w-[20rem] cursor-pointer transition-all transform hover:scale-105 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} p-6`}
            onClick={() => window.open(project.link, "_blank")}
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="flex items-center space-x-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-sm hover:underline"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 0C5.372 0 0 5.373 0 12a12.007 12.007 0 008.208 11.385c.6.111.82-.261.82-.58 0-.287-.01-1.047-.016-2.056-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.334-1.755-1.334-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.839 1.238 1.839 1.238 1.07 1.834 2.807 1.304 3.49.997.109-.775.419-1.305.76-1.605-2.664-.305-5.466-1.333-5.466-5.932 0-1.31.467-2.381 1.235-3.22-.124-.304-.535-1.53.117-3.188 0 0 1.007-.322 3.3 1.23a11.47 11.47 0 013.006-.404c1.02.005 2.047.137 3.006.404 2.292-1.552 3.297-1.23 3.297-1.23.653 1.658.242 2.884.118 3.188.77.839 1.233 1.91 1.233 3.22 0 4.61-2.805 5.624-5.476 5.922.43.371.812 1.104.812 2.222 0 1.606-.015 2.901-.015 3.293 0 .32.217.696.825.578A12.007 12.007 0 0024 12c0-6.627-5.373-12-12-12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>GitHub (Private)</span>
              </a>
              <a href="mailto:sarathchandrasimma.04@gmail.com" className="hover:underline flex items-center space-x-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 13.065L1.994 6.384A2 2 0 014 4h16a2 2 0 012.006 2.384L12 13.065zm0 2.059L4 7.104V18h16V7.104l-8 8.02z" />
                </svg>
                <span>Email</span>
              </a>
              <a href="https://wa.me/919100151006" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center space-x-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.373 0 12a11.936 11.936 0 001.69 6.08L0 24l6.18-1.62A11.943 11.943 0 0012 24c6.63 0 12-5.373 12-12a11.94 11.94 0 00-3.48-8.52zM12 22c-1.7 0-3.32-.39-4.75-1.08l-.34-.17-3.67.96.98-3.57-.22-.36C3.43 16.11 3 14.09 3 12 3 6.48 7.48 2 12 2s9 4.48 9 10-4.48 10-9 10zm5.4-7.6c-.29-.14-1.7-.84-1.96-.94s-.45-.14-.64.14c-.19.29-.74.94-.9 1.13-.17.2-.33.21-.61.07s-1.19-.44-2.27-1.4c-.84-.75-1.4-1.67-1.56-1.95s-.02-.43.12-.57c.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5s-.64-1.55-.88-2.12c-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36s-1 1-.98 2.44.96 2.82 1.1 3.02c.14.2 1.9 2.9 4.6 4.06.64.28 1.14.45 1.53.57.64.2 1.22.17 1.68.1.51-.08 1.7-.7 1.94-1.38.24-.68.24-1.27.17-1.38-.08-.11-.27-.17-.56-.3z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section> */} 

{/* Projects Section */}
<section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 text-center">
      <span className={`border-b-4 ${darkMode ? 'border-blue-400' : 'border-blue-500'} pb-2`}>
        Projects
      </span>
    </h2>

    <div className="overflow-x-auto">
      <div className="flex gap-6 w-max px-2">
        {[
          {
            name: "ShopNav (AI Product Scraper)",
            description: "An intelligent web scraper that navigates e-commerce sites to find and compare products based on user specifications.",
            link: "https://shopnav-price-pilot.vercel.app/",
            github: "https://github.com/sarathchandrasimma/shopnav-price-pilot.git",
            image: shopnav, // Replace with your image URL
          },
          {
            name: "Borrower Info Exchange Dashboard",
            description: "A dashboard for tracking and managing borrower information with data visualization and analytics.",
            link: "https://bank-borrower-nexus-ai.vercel.app/",
            github: "https://github.com/sarathchandrasimma/bank-borrower-nexus-ai.git",
            image: BorrowerInfoExhange, // Replace with your image URL
          },
          {
            name: "Reversee: Reverse Prompt Engineering",
            description: "Reverse Prompt Engineering tool that generates AI prompts from YouTube videos or scenes. Utilizes NLP and video frame extraction for context-aware prompt generation.",
            link: "https://colab.research.google.com/drive/1LzUV5tfxMray5jiyVnOPgv1NKdB-UOeD?usp=sharing",
            github: "https://github.com/sarathchandrasimma/Reversee.git",
            image: reversee,
          },
          {
            name: "AI Mowa Linktree",
            description: "A social media linktree platform with multiple themes, admin analytics, and CRUD operations for managing links and social media presence.",
            link: "https://aimowalinktree.netlify.app/",
            github: "https://github.com/sarathchandrasimma/Custom-Link-Tree-for-social-media.git",
            image: linktree,
          },
          {
            name: "iMovies - Movie Ticket Booking System",
            description: "A comprehensive movie ticket booking system built with MERN stack featuring user authentication, seat selection, payment integration, and booking management.",
            link: "https://github.com/sarathchandrasimma/MoiveMowa-Tickek-Booking-System.git",
            github: "https://github.com/sarathchandrasimma/MoiveMowa-Tickek-Booking-System.git",
            image: movieMowa,
          },
        ].map((project, idx) => (
          <div
            key={idx}
            className={`w-80 min-w-[20rem] rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} p-4 flex flex-col justify-between`}

          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-40 object-cover cursor-pointer transition duration-300 hover:opacity-90"
              />
              <h3 className="text-xl font-semibold mb-2 hover:underline cursor-pointer">{project.name}</h3>
            </a>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap items-center gap-3 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-sm hover:underline"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.043-1.61-4.043-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.084-.73.084-.73 1.205.084 1.839 1.236 1.839 1.236 1.07 1.833 2.807 1.304 3.49.997.107-.775.418-1.304.76-1.604-2.664-.305-5.467-1.334-5.467-5.933 0-1.31.468-2.38 1.235-3.22-.124-.303-.536-1.527.117-3.184 0 0 1.007-.322 3.3 1.23A11.52 11.52 0 0112 6.844c1.02.005 2.047.137 3.006.404 2.292-1.552 3.297-1.23 3.297-1.23.653 1.657.242 2.881.118 3.184.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.476 5.922.43.372.813 1.104.813 2.222 0 1.605-.015 2.9-.015 3.292 0 .319.218.696.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>GitHub (repo)</span>
              </a>
              <a
                href="mailto:sarathchandrasimma.04@gmail.com"
                className="flex items-center space-x-1 text-sm hover:underline"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 13.065L1.994 6.384A2 2 0 014 4h16a2 2 0 012.006 2.384L12 13.065zm0 2.059L4 7.104V18h16V7.104l-8 8.02z" />
                </svg>
                <span>Email Me</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Content Section */}
      <section id="content" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className={`border-b-4 ${darkMode ? 'border-blue-400' : 'border-blue-500'} pb-2`}>My Channels</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a 
              href="https://www.youtube.com/@PuppyWins" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`block p-6 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} shadow-md transition-all`}
            >
              <div className="flex items-center mb-4">
                <Youtube size={24} className="mr-3 text-red-500" />
                <h3 className="text-xl font-bold">PoorPuppy</h3>
              </div>
              <p>Entertaining content featuring adorable puppies and their adventures.</p>
            </a>
            <a 
              href="https://www.youtube.com/@GodsPlan-Ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`block p-6 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} shadow-md transition-all`}
            >
              <div className="flex items-center mb-4">
                <Youtube size={24} className="mr-3 text-red-500" />
                <h3 className="text-xl font-bold">GodsPlanAI</h3>
              </div>
              <p>Exploring the intersection of spirituality and artificial intelligence.</p>
            </a>
            <a 
              href="https://www.youtube.com/@CelebrityCrushHub" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`block p-6 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} shadow-md transition-all`}
            >
              <div className="flex items-center mb-4">
                <Youtube size={24} className="mr-3 text-red-500" />
                <h3 className="text-xl font-bold">CelebrityCrushHub</h3>
              </div>
              <p>Celebrity news, updates, and entertainment content for fans.</p>
            </a>
            <a 
              href="https://youtube.com/@sarath_chandra" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`block p-6 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} shadow-md transition-all`}
            >
              <div className="flex items-center mb-4">
                <Youtube size={24} className="mr-3 text-red-500" />
                <h3 className="text-xl font-bold">Ai.mowa</h3>
              </div>
              <p>Educational content about AI technologies, tools, and applications.</p>
            </a>
            <a 
              href="https://instagram.com/ai.mowa" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`block p-6 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} shadow-md transition-all`}
            >
              <div className="flex items-center mb-4">
                <Instagram size={24} className="mr-3 text-pink-500" />
                <h3 className="text-xl font-bold">ai.mowa</h3>
              </div>
              <p>Visual content showcasing AI-generated art and technology insights.</p>
            </a>
            <a 
              href="https://instagram.com/s_sarath_c" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`block p-6 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} shadow-md transition-all`}
            >
              <div className="flex items-center mb-4">
                <Instagram size={24} className="mr-3 text-pink-500" />
                <h3 className="text-xl font-bold">s_sarath_c</h3>
              </div>
              <p>Personal lifestyle, fitness journey, and professional updates.</p>
            </a>
          </div>
        </div>
      </section>

      Fitness Section
      <section id="fitness" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className={`border-b-4 ${darkMode ? 'border-blue-400' : 'border-blue-500'} pb-2`}>Fitness & Lifestyle</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={fitness} 
                  alt="Fitness" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="flex items-center mb-4">
                <Dumbbell size={28} className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                <h3 className="text-2xl font-bold">Fitness is a Mindset</h3>
              </div>
              <p className="text-lg leading-relaxed">
                💪 Fitness isn't just a hobby — it's a mindset. I bring that discipline into every part of my life. Whether I'm pushing my limits at the gym or with code, I give it everything. The dedication and consistency required for fitness translates directly to my professional work ethic and problem-solving approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className={`border-b-4 ${darkMode ? 'border-blue-400' : 'border-blue-500'} pb-2`}>Contact Me</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg`}>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail size={24} className="mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <a href="mailto:sarathchandra.simma04@gmail.com" className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                      sarathchandra.simma04@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Github size={24} className="mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">GitHub</h3>
                    <a 
                      href="https://github.com/sarathchandrasimma" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
                    >
                      sarathchandrasimma
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Linkedin size={24} className="mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/simma-sarathchandra/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
                    >
                      simma-sarathchandra
                    </a>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <a 
                    href={Resume}
                    download 
                    className={`inline-flex items-center px-6 py-3 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium transition-colors`}
                  >
                    <Download size={20} className="mr-2" />
                    Download My Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Simma Sarath Chandra. All rights reserved.</p>
        </div>
      </footer>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className={`relative max-w-2xl w-full max-h-[90vh] ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-2xl overflow-hidden`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className={`absolute top-4 right-4 z-10 p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} transition-colors`}
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Certificate Image */}
            <div className="p-6">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-auto rounded-lg shadow-lg mb-6"
              />
              
              {/* Certificate Title */}
              <h3 className={`text-xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {selectedCertificate.title}
              </h3>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleOpenCertificate}
                  className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                    darkMode 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  } shadow-lg hover:shadow-xl`}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in New Tab
                </button>
                
                <button
                  onClick={handleDownloadCertificate}
                  className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                    darkMode 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  } shadow-lg hover:shadow-xl`}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;