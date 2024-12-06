import React from "react";
import "./Skills.css";

const Skills = () => {
  return (

    <>
      <div className="skills-container">
        <h1>SKILLS</h1>
        <div className="line">
        </div>

        <div className="skills">
          <div className="skill">
            <h1>Front-end</h1>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </div>
          <div className="skill">
            <h1>Framework</h1>
            <li>Bootstrap</li>
            <li>ReactJS</li>
          </div>
          <div className="skill">
            <h1>Database</h1>
            <li>MySQL</li>
            <li>MongoDB</li>
          </div>
          <div className="skill">
            <h1>Programming Languages</h1>
            <li>C Programming</li>
            <li>Java</li>
            <li>Pyhton</li>
          </div>
          <div className="skill">
            <h1>Tools</h1>
            <li>GitHub</li>
            <li>Git</li>
            <li>VS Code</li>
          </div>
          <div className="skill">
            <h1>Soft Skills</h1>
            <li>Leadership</li>
            <li>Time & Work Management</li>
            <li>Easy Adaptability</li>
            <li>Consistency</li>
          </div>
        </div>
      </div>
    </>

  );
};

export default Skills;
