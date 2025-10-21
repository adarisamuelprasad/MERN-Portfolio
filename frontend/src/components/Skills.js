import React from "react";

const skillsData = [
  {
    category: "Programming & DSA",
    icon: "fas fa-code",
    skills: ["Python", "Java", "C", "JavaScript", "Problem Solving", "Algorithms"]
  },
  {
    category: "AI/ML & Libraries",
    icon: "fas fa-brain",
    skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Keras", "Deep Learning", "Computer Vision"]
  },
  {
    category: "Web Development",
    icon: "fas fa-globe",
    skills: ["MERN Stack", "REST APIs", "HTML", "CSS", "JavaScript"]
  },
  {
    category: "Mobile Development",
    icon: "fas fa-mobile-alt",
    skills: ["React Native", "Flutter", "Firebase"]
  },
  {
    category: "Tools & Platforms",
    icon: "fas fa-wrench",
    skills: ["VS Code", "IntelliJ IDEA", "Git & GitHub", "Firebase", "Google Cloud Platform", "Linux"]
  },
  {
    category: "Soft Skills",
    icon: "fas fa-lightbulb",
    skills: ["Team Collaboration", "Leadership", "Communication", "Public Speaking"]
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-title-container">
        <h2 data-aos="zoom-in">My Skills</h2>
      </div>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category" data-aos="fade-up" data-aos-delay={index * 80}>
            <h3><i className={category.icon}></i> {category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;