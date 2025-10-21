import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Centralized data for all your projects
const projectsData = [
  {
    title: "MERN Portfolio",
    image: "/images/project-portfolio.png",
    description: "My full-stack MERN portfolio with a theme toggle, responsive layout, and smooth animations.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    liveUrl: "https://adari-samuel-prasad.vercel.app/",
    githubUrl: "https://github.com/adarisamuelprasad/MERN-Portfolio"
  },
  {
    title: "Smart Traffic Control",
    image: "/images/dynamic-signals.png",
    description: "Deep learning project automating traffic signals with YOLO-based real-time vehicle detection.",
    tech: ["Python", "OpenCV", "YOLO", "Tkinter"],
    githubUrl: "https://github.com/adarisamuelprasad/Smart-Traffic-Control-System"
  },
  {
    title: "Rakshak360",
    image: "/images/project-rakshak.png",
    description: "A tourist safety system using AI, Geo-Fencing, and Blockchain for the Smart India Hackathon.",
    tech: ["AI/ML", "Blockchain", "Geo-fencing"],
    githubUrl: "https://github.com/adarisamuelprasad"
  },
  {
    title: "AarogyaLink",
    image: "/images/project-aarogya.png",
    description: "Full-stack web app that recommends hospitals based on user symptoms, using Gemini and Places APIs.",
    tech: ["React", "Node.js", "Gemini API", "Places API"],
    githubUrl: "https://github.com/adarisamuelprasad/AarogyaLink"
  },
  {
    title: "EchoAble",
    image: "/images/project-gesture.png",
    description: "AI-powered system converting hand gestures & sign language into text/speech to assist differently abled users.",
    tech: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
    githubUrl: "https://github.com/adarisamuelprasad/Sign-Language-Recognition"
  },
  // {
  //   title: "E-commerce Platform",
  //   image: "/images/project-ecommerce.png",
  //   description: "A full-stack e-commerce website with server-side rendering, cart & purchase flow.",
  //   tech: ["Node.js", "Express.js", "EJS", "MongoDB"],
  //   githubUrl: "https://github.com/adarisamuelprasad/e-commerce"
  // },
];


const Projects = () => {
  return (
    <section id="projects">
      <div className="section-title-container">
        <h2 data-aos="zoom-in">My Projects</h2>
      </div>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card" data-aos="fade-up" data-aos-delay={index * 80}>
            <div className="project-image-container">
              <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="skill-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Demo">
                    <FaExternalLinkAlt />
                  </a>
                )}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub Repo">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;