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
    skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow & Keras", "Deep Learning", "Computer Vision"]
  },
  {
    category: "Web Development",
    icon: "fas fa-globe",
    skills: ["MERN Stack (MongoDB, Express, React.js, Node.js)", "REST APIs", "HTML & CSS"]
  },
  {
    category: "Mobile Development",
    icon: "fas fa-mobile-alt",
    skills: ["React Native", "Flutter", "Firebase"]
  },
  {
    category: "Tools & Platforms",
    icon: "fas fa-wrench",
    skills: ["VS Code / IntelliJ IDEA", "Git & GitHub", "Firebase Hosting & Cloud", "Google Cloud Platform", "Linux / Ubuntu"]
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
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h3><i className={category.icon}></i> {category.category}</h3>
            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
