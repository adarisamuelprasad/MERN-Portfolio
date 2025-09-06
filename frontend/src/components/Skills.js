import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3><i className="fas fa-code"></i> Programming</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3><i className="fas fa-globe"></i> Web Development</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React.js</li>
            <li>Node.js & Express.js</li>
            <li>MongoDB & MySQL</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3><i className="fas fa-brain"></i> Libraries & Frameworks</h3>
          <ul>
            <li>NumPy & Pandas</li>
            <li>Scikit-learn</li>
            <li>TensorFlow</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3><i className="fas fa-wrench"></i> Tools & Platforms</h3>
          <ul>
            <li>VS Code & Google Colab</li>
            <li>Git & GitHub</li>
            <li>Eclipse & IntelliJ IDEA</li>
            <li>Render & Netlify</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
