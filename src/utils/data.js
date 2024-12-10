import Front from './front-end.png';
import Database from './backend.png';
import Skills from './skill.png';
import Tools from'./service.png';
import Program from './binary-code.png';

export const SKILLS = [
    {
        title: "Frontend",
        icon : Front,
        skills: [
            { skill: "HTML5", percentage: "90%"},
            { skill: "CSS3", percentage: "80%"},
            { skill: "JavaScript", percentage: "60%"},
            { skill: "ReactJS", percentage: "55%"},
        ],
    },
     {
        title: "Database",
        icon : Database,
        skills: [
            { skill: "MongoDB", percentage: "70%"},
            { skill: "My SQL", percentage: "80%"},
        ],
    },
     {
        title: "Tools",
        icon : Tools,
        skills: [
            { skill: "GitHub", percentage: "80%"},
            { skill: "Git", percentage: "70%"},
            { skill: "VS Code", percentage: "85%"},
        ],
    },
     {
        title: "Programming Languages",
        icon : Program,
        skills: [
            { skill: "C Programming", percentage: "80%"},
            { skill: "Python", percentage: "85%"},
            { skill: "Java", percentage: "80%"},
        ],
    },
 {
        title: "Soft Skills",
        icon : Skills,
        skills: [
            { skill: "Leadership", percentage: "80%"},
            { skill: "Work Management", percentage: "90%"},
            { skill: "Easy Adaptability", percentage: "85%"},
             { skill: "Time Management", percentage: "95%"},
            { skill: "Consistency", percentage: "75%"},
        ],
    },
]