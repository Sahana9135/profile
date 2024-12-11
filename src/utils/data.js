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

export const WORK_EXPERIENCE = [
    {
        title : "Certified Course",
        responsibilities : "Certified in Full-Stack Web Development from CSC after completing a 6-month intensive program, demonstrating high proficiency in both front-end and back-end technologies.",
    },
    {
        title : "TN Skills",
        responsibilities : "Achieved First Level Qualification and participated in the Second Level of Web Development, these can showcasing strong foundational skills and knowledge through TN Skills.",
    },
    {
        title : "Training Program",
        responsibilities : "Completed an intensive 15-day Full-Stack Web Development training at Vyoobam Tech, And gaining practical experience in modern web technologies and development practices.",
    },
    {
        title : "Blogging Platform",
        responsibilities : "Developing an interactive and dynamic front-end blogging platform as a project for the Vyoobam Tech training program ,focusing on modern web design and user engagement features.",
    },
]