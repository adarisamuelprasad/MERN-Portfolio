import React from "react";

const skillsData = [
  {
    category: "Programming & DSA",
    icon: "fas fa-code",
    skills: [
      "Python",
      "Java",
      "C",
      "JavaScript",
      "Dart",
      "Problem Solving",
      "Algorithms",
      "Competitive Programming"
    ]
  },
  {
    category: "AI/ML & Libraries",
    icon: "fas fa-brain",
    skills: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "TensorFlow & Keras",
      "Deep Learning",
      "Computer Vision (OpenCV, Mediapipe)",
      "Natural Language Processing (NLP)",
      "Matplotlib & Data Visualization"
    ]
  },
  {
  category: "Web Development",
  icon: "fas fa-globe",
  skills: [
    "HTML & CSS",
    "JavaScript",
    "React.js",
    "Node.js & Express.js",
    "MongoDB & MySQL",
    "EJS / Server-side Rendering",
    "REST APIs"
  ]
  },
  {
    category: "Mobile Development",
    icon: "fas fa-mobile-alt",
    skills: [
      "React Native",
      "Flutter",
      "Dart",
      "Firebase",
      "Android Basics"
    ]
  },
  
  {
    category: "Tools & Platforms",
    icon: "fas fa-wrench",
    skills: [
      "VS Code / Eclipse / IntelliJ IDEA",
    "Git & GitHub",
    "Firebase Hosting & Cloud",
    "Vercel / Netlify (Frontend Deployment)",
    "Render (Backend Deployment)",
    "Google Cloud Platform",
    "Linux / Ubuntu"
    ]
  },
  {
    category: "Soft Skills",
    icon: "fas fa-lightbulb",
    skills: [
      "Team Collaboration",
      "Leadership",
      "Communication",
      "Public Speaking"
    ]
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
