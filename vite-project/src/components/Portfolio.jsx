import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import "./Navbar.css";



// Skill Card Component
// SkillCard Component
const SkillCard = ({ icon, title, level, percent }) => {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="skill-icon">{icon}</div>
      <h3 className="skill-title">{title}</h3>
      <div className="skill-bar-container">
        <div className="skill-bar" style={{ width: `${percent}%` }}></div>
      </div>
      <p className="skill-percent">{percent}%</p>
    </motion.div>
  );
};

const App = () => {
  const fileInputRef = useRef(null);
  const [avatarSrc, setAvatarSrc] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme", !darkMode);
    document.body.classList.toggle("light-theme", darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark-theme" : "light-theme"}`}>
      <div className="layout-wrapper">
        {/* Navbar */}
        <div className="custom-navbar">
          <div className="nav-left">
            <span className="typed-logo">ST</span>
          </div>

          <div className="nav-center">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            
            <a href="#certifications" className="nav-link">Certifications</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="nav-right">
            <button className="theme-toggle" onClick={toggleTheme}>
              {darkMode ? "☀️" : "🌙"}
            </button>

            <div
              className="nav-avatar"
              onClick={() => avatarSrc ? setShowModal(true) : handleIconClick()}
            >
              {avatarSrc ? (
                <img src={avatarSrc} alt="avatar" />
              ) : (
                <span className="avatar-icon">👤</span>
              )}
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="hero-container" id="home">
          <div className="hero-content">
            <h1 className="hero-name">Siddharth Tajane</h1>
            <div className="identity-boxes">
              <div className="identity-tag">Frontend Developer</div>
              <div className="identity-tag">UI/UX Designer</div>
            </div>
            <p className="hero-objective">
              Passionate about crafting modern, user-friendly interfaces. Dedicated
              to building responsive and accessible web applications.
            </p>
            <a
              className="resume-button"
              href="https://drive.google.com/file/d/17de9csBBcGRJ5K_DXm063bxsDlXrsr2Z/view?usp=drivesdk "
              download
            >
              Download Resume
            </a>
            <div className="social-icons">
              <a href="https://github.com/Siddharth-Tajane" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/siddharth-tajane-903b46301/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="mailto:tajanesiddharthsunil@gmail.com"><MdEmail /></a>
              <a href="tel:+7219676792"><FaPhoneAlt /></a>
            </div>
          </div><div className="hero-photo-wrapper">
  <div className="flip-box">
    <div className="flip-box-inner">
      <div className="flip-box-front">
        <img src="/assets/Sidd_photo.jpg" alt="Professional" />
      </div>
      <div className="flip-box-back">
        <img src="/assets/photo1.jpg" alt="Personal" />
      </div>
    </div>
  </div>
</div>


        </section>

        {/* About Section */}
        <center>
          <section id="about" className="section-placeholder">
            <br />
            <br />
            <br />
            <h2 className="title">About</h2>
            <p className="about-text">
              Hello, I'm a UI/UX Developer from Pune, Maharashtra. I've completed my graduation in ECE Engineering from Amrutvahini Engineering College Sangamner.
              I'm a Junior UI/UX Developer with a good knowledge of Bootstrap4 framework and Responsive design along with HTML5, CSS3, and JavaScript. I am constantly improving my skills.
              <br />
              Birth Date: 31/03/2005 <br />
              Degree: BE(ECE) <br />
              Languages: English, Hindi, Marathi <br />
              City: Akole, Maharashtra <br />
            </p>

            <div className="vertical-timeline">
              <div className="timeline-box">
                <h3>BE</h3>
                <span>2022-2026</span>
                <p>Amrutvahini College of Engineering Sangamner</p>
              </div>

              <div className="timeline-box">
                <h3>HSC</h3>
                <span>2021-2022</span>
                <p>Modern Jr. College Akole</p>
              </div>

              <div className="timeline-box">
                <h3>SSC</h3>
                <span>2019-2020</span>
                <p>Agasti Vidyalaya Akole</p>
              </div>
            </div>
          </section>
        </center>

        {/* Skills Section */}
        <center>
          
            <section id="skills" className="section-placeholder">
              <br /> <br />
              <br />
  <h2 className="title">Skills</h2>
  <div className="skills-grid">
    <SkillCard icon="🌐" title="HTML5" percent={80} />
    <SkillCard icon="🎨" title="CSS3" percent={80} />
    <SkillCard icon="🟨" title="JavaScript" percent={60} />
    <SkillCard icon="🟢" title="Node.js" percent={50} />
    <SkillCard icon="⚛️" title="React" percent={65} />
    <SkillCard icon="🗄️" title="SQL" percent={70} />
    <SkillCard icon="🅱️" title="Bootstrap" percent={80} />
  </div>


          </section>
        </center>

        {/* Other Sections */}
        {/* Certifications Section */} <center>
<section id="certifications" className="section-placeholder">
  <br /> <br />
              <br />
  <h2 className="title">Certifications</h2>
  <div className="cert-grid">
    <motion.div
      className="cert-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src="/assets/IBM.png" alt="IBM Certificate" className="cert-icon" />
      <div className="cert-info">
        <h3>IBM-Artificial Intelligence</h3>
        <p>IBM</p>
        <a href="https://drive.google.com/file/d/18-hPTCb_m4J23U4qw0q2PTkzot5H6GDe/view?usp=drivesdk " target="_blank" rel="noopener noreferrer">
          View Certificate →
        </a>
      </div>
    </motion.div>

    <motion.div
      className="cert-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <img src="/assets/mern.png" alt="Mern Certificate" className="cert-icon" />
      <div className="cert-info">
        <h3>Full stack web development using Mern Technology</h3>
        <p>Edunet</p>
        <a href="https://drive.google.com/file/d/183rCB5OqZzsWF3WM04uZMAw0rllcaPkH/view?usp=drivesdk " target="_blank" rel="noopener noreferrer">
          View Certificate →
        </a>
      </div>
    </motion.div>

    <motion.div
      className="cert-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <img src="/assets/aspire.png" alt="self skill Certificate" className="cert-icon" />
      <div className="cert-info">
        <h3>Aptitude, Soft Skill and Technical Employability Enhancing Program</h3>
        <p>Aspire For Her</p>
        <a href="https://drive.google.com/file/d/18AUdg6f1WiOXh1Mh6MJhMlzHm30yO6qY/view?usp=drivesdk " target="_blank" rel="noopener noreferrer">
          View Certificate →
        </a>
      </div>
    </motion.div>
    <motion.div
      className="cert-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <img src="/assets/matlab.jpeg" alt="matlab Certificate" className="cert-icon" />
      <div className="cert-info"><br />
        <h3>Matlab Onramp</h3>
        <p>Matlab</p>
        <a href="https://drive.google.com/file/d/18AUdg6f1WiOXh1Mh6MJhMlzHm30yO6qY/view?usp=drivesdk " target="_blank" rel="noopener noreferrer">
          View Certificate →
        </a>
      </div>
    </motion.div>
  </div>
</section>
 </center>

 <center>

       <section id="projects" className="section-placeholder">
        <br /> <br />
              <br />
  <h2 className="title">Projects</h2>
  <div className="project-grid">
    <div className="project-card">
      <div className="project-inner">
        <div className="project-front">
          <img src="/assets/calculator.png" alt="Project 1" />
          <h3>Simple Calculator</h3>
        </div>
        <div className="project-back">
          <p> <br />Description:<br/><br/>
          The Simple Calculator is a responsive web application built using React that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. Designed with a clean and intuitive user interface, this project demonstrates the use of React components, state management, and event handling.</p>
          <a href="https://calculator-gp1fu3fkq-siddharths-projects-dec2c5e7.vercel.app/" target="_blank" rel="noopener noreferrer" className="visit-btn">
            Visit →
          </a>
        </div>
      </div>
    </div>

    <div className="project-card">
      <div className="project-inner">
        <div className="project-front">
          <img src="/assets/hairstyle.png" alt="Project 2" />
          <h3>HairStyle-Salon</h3>
        </div>
        <div className="project-back">
          <p> <br />Description:<br/><br/>
          The Hairstyle Salon is a fully responsive, static website designed using HTML and CSS. It provides a clean and elegant layout to showcase a salon's services, hairstyle gallery, stylist team, pricing, and contact details. This project focuses on creating a visually appealing and user-friendly interface using only front-end web technologies.</p>
          <a href="http://portfolios.ecti.co.in/DhanshriP/projects/hairstyle/index.html#" target="_blank" rel="noopener noreferrer" className="visit-btn">
            Visit →
          </a>
        </div>
      </div>
    </div>

    <div className="project-card">
      <div className="project-inner">
        <div className="project-front">
          <img src="/assets/vegetable.png" alt="Project 3" />
          <h3>Online Vegetable Shopping (Frontend)</h3>
        </div>
        <div className="project-back">
          <p><br />Description:<br/><br/>The Online Vegetable Shopping project is a static website built using HTML and CSS, designed to showcase fresh vegetables for online purchase. It includes a clean homepage, product sections, and a visually appealing layout. The site is fully responsive and optimized for both desktop and mobile users.</p>
          <a href="https://todoapp.com" target="_blank" rel="noopener noreferrer" className="visit-btn">
            Visit →
          </a>
        </div>
      </div>
    </div>

    {/* Add more cards here – layout will auto-wrap */}
  </div>
</section>

 </center><br /><br />


 <center>
<br /><br /><br />
<h2 className="title">Contact</h2>
  

      <section id="contact" className="section-placeholder contact-section">
        
        
  <div className="contact-content">
    <h2>Let's get connected</h2>
    <p>Feel free to reach out for collaboration or just a friendly hello 👋</p>

    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
  <div className="social-icons-row">
      <motion.a
        href="https://github.com/Siddharth-Tajane"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-wrapper"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
      >
        <FaGithub />
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/siddharth-tajane-903b46301/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-wrapper"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
      >
        <FaLinkedin />
      </motion.a>

      <motion.a
        href="mailto:tajanesiddharthsunil@gmail.com"
        className="icon-wrapper"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
      >
        <MdEmail />
      </motion.a>

      <motion.a
        href="tel:+7219676792"
        className="icon-wrapper"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
      >
        <FaPhoneAlt />
      </motion.a>
    </div>
</section>


        
 </center>

        {/* Footer */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Siddharth Tajane. All rights reserved.</p>
        </footer>
      </div>

      {/* Avatar Modal */}
      {showModal && (
        <div className="avatar-modal">
          <button className="close-modal" onClick={() => setShowModal(false)}>✖</button>
          <img src={avatarSrc} alt="avatar full" />
        </div>
      )}
    </div>
  );
};

export default App;
