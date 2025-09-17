import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2>🚀 My Projects</h2>
      <div className="projects-grid">

         {/* --- Smart Traffic Control --- */}
        <div className="project-card">
          <h3>🚦 Smart Traffic Control</h3>
          <p>Deep learning project automating traffic signals with YOLO-based real-time vehicle detection and Tkinter-based UI.</p>
          <div className="project-tech">
            <span>Python</span><span>OpenCV</span><span>YOLO</span><span>Tkinter</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/adarisamuelprasad/Smart-Traffic-Control-System" target="_blank" rel="noopener noreferrer" className="button">GitHub</a>
          </div>
        </div>


        {/* --- AarogyaLink --- */}
        <div className="project-card">
          <h3>🏥 AarogyaLink</h3>
          <p>AI-driven healthcare web app for symptom-based hospital recommendations, insurance filters, and scheme-based navigation.</p>
          <div className="project-tech">
            <span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>EJS</span>
            <span>Google Gemini API</span><span>Google Maps API</span>
          </div>
          <div className="project-links">
            <a href="https://aarogya-link.vercel.app/" target="_blank" rel="noopener noreferrer" className="button">Live Demo</a>
            <a href="https://github.com/adarisamuelprasad/AarogyaLink" target="_blank" rel="noopener noreferrer" className="button">GitHub</a>
          </div>
        </div>


        {/* --- MERN Portfolio --- */}
        <div className="project-card">
          <h3>🌐 MERN Portfolio</h3>
          <p>
          My full-stack MERN portfolio application, with separate frontend & backend folders, showcasing projects, theme toggle, responsive design, and deployment.  
          </p>
          <div className="project-tech">
            <span>MongoDB</span><span>Express.js</span><span>React</span><span>Node.js</span>
          </div>
          <div className="project-links">
            <a href="https://adari-samuel-prasad.vercel.app/" target="_blank" rel="noopener noreferrer" className="button">Live Site</a>
            <a href="https://github.com/adarisamuelprasad/MERN-Portfolio" target="_blank" rel="noopener noreferrer" className="button">GitHub</a>
          </div>
        </div>
        
        {/* --- Rakshak360 --- */}
        <div className="project-card">
          <h3>🛡️ Rakshak360</h3>
          <p>Smart Tourist Safety & Incident Response system using AI, Geo-fencing & Blockchain for faster rescue and secure ID verification.</p>
          <div className="project-tech">
            <span>AI/ML</span><span>Blockchain</span><span>Geo-fencing</span><span>Kiosk</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/adarisamuelprasad" target="_blank" rel="noopener noreferrer" className="button">GitHub</a>
          </div>
        </div>

       

        {/* --- EchoAble (replaced Sign Language Translator) --- */}
        <div className="project-card">
          <h3>📣 EchoAble — Bridging Communication</h3>
          <p>
            Cross-platform Flutter application aimed at bridging communication for differently-abled users.
            The repository contains Android/iOS/web/desktop folders and is implemented with Flutter & Dart.
          </p>
          <div className="project-tech">
            <span>Flutter</span><span>Dart</span><span>Cross-platform</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/adarisamuelprasad/EchoAble" target="_blank" rel="noopener noreferrer" className="button">GitHub Repo</a>
          </div>
        </div>

        

        

        {/* --- E-commerce Platform --- */}
        <div className="project-card">
          <h3>🛒 E-commerce Platform</h3>
          <p>Full-stack e-commerce website with product browsing, cart, and purchase flow using server-side rendering.</p>
          <div className="project-tech">
            <span>Node.js</span><span>Express.js</span><span>EJS</span><span>MongoDB</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/adarisamuelprasad/e-commerce" target="_blank" rel="noopener noreferrer" className="button">GitHub</a>
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default Projects;
