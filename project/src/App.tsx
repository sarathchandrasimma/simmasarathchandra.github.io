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
import Resume from "./sarathchandra_resume.pdf"
import fitness from "./fitness.jpg"
import cisco from './cisco.png'
import infosys from "./infosys.jpeg"
import nptel from "./nptel.jpeg"

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
    <div className="grid md:grid-cols-3 gap-8">

      {/* Certificate 1 */}
      <div
        className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 
          ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} 
          shadow-md hover:shadow-2xl`}
      >
        <img src={nptel} alt="NPTEL Data Engineering Certificate" className="w-full h-auto rounded mb-4 shadow-sm" />
        <p className={`inline-block px-3 py-1 rounded-full text-sm mb-2 ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
          Elite
        </p>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-4`}>
          Comprehensive data engineering course covering data pipelines, ETL processes, and database management.
        </p>
      </div>

      {/* Certificate 2 */}
      <div
        className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 
          ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} 
          shadow-md hover:shadow-2xl`}
      >
        <img src={infosys} alt="Infosys Springboard Internship Certificate" className="w-full h-auto rounded mb-4 shadow-sm" />
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-4`}>
          Hands-on experience with real-world data science projects and enterprise-level applications.
        </p>
      </div>

      {/* Certificate 3 */}
      <div
        className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 
          ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} 
          shadow-md hover:shadow-2xl`}
      >
        <img src={cisco} alt="Cisco Python Essential Certificate" className="w-full h-auto rounded mb-4 shadow-sm" />
        <p className={`inline-block px-3 py-1 rounded-full text-sm mb-2 ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'}`}>
          Cisco Essential
        </p>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-4`}>
          Comprehensive training in Cisco Python Essential - 1.
        </p>
      </div>

    </div>
  </div>
</section>




      {/* Projects Section */}
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

      {/* Fitness Section */}
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
    </div>
  );
}

export default App;