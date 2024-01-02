import {
    faCode, faLaptopCode, faTerminal, faPalette, faCogs, faFileCode, faAd,
    faToolbox, faTvAlt, faStore, faB, faDashboard
} from '@fortawesome/free-solid-svg-icons';
import { faConfluence, faGit, faFigma, faNpm, faChrome, faJira, faSass, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

export const skillSet = {
    'Front-end Development': [
        'HTML',
        'CSS',
        'Javascript',
        'ES6',
        'ReactJS',
        'Redux',
        'SASS'
    ],
    'Development Tools & Environment': [
        'VS Code',
        'REST APIs',
        'NPM',
        'Babel',
        'Webpack',
        'Git',
        'Chrome'
    ],
    'Collaboration & Project Management': [
        'Jira',
        'Confluence',
        'Zeplin',
        'Figma'
    ],
    'Smart TV Development': [
        'LG WebOS',
        'TizenOS',
        'Sony SmartTV',
        'Vidaa'
    ],
    'Web Analytics & Others': [
        'Mixpanel',
        'IMA',
        'SSAI',
        'DRM'
    ]
}

export const skillTypes = Object.keys(skillSet);

export const skillIconsList = {
    'HTML': faHtml5, 'CSS': faCss3Alt, 'Javascript': faJs, 'ES6': faJsSquare, 'ReactJS': faReact, 'Redux': faStore, 'REST APIs': faTerminal, 'SASS': faSass,
    'VS Code': faCode, 'Chrome Debugger': faToolbox, 'Jira': faJira, 'Git': faGit, 'Confluence': faConfluence, 'Zeplin': faPalette, 'Figma': faFigma,
    'Chrome': faChrome, 'LG WebOS': faTvAlt, 'TizenOS': faTvAlt, 'Sony SmartTV': faTvAlt, 'Vidaa': faTvAlt,
    'NPM': faNpm, 'Babel': faB, 'Webpack': faLaptopCode, 'Mixpanel': faDashboard, 'IMA': faAd, 'SSAI': faAd, 'DRM': faFileCode, 'Deep Linking': faCogs,
    'default': faJs
}

export const githubUrl = 'https://github.com/harshadaYCSM';

export const linkedinUrl = 'https://www.linkedin.com/in/harshada-chaudhari-3a8220b1/';

export const typewriterTextStrings = [
    "Software Developer",
    "Smart TV App Developer",
    "Frontend Developer",
    "ReactJS Enthusiast",
    "Aspiring Fullstack Developer",
    "A Job Seeker, currently",
]

export const projects = {
    "Infinite SmartTV Project": {
        duration: "07/2022 - 03/2023",
        description: "Web app development for 5 different OTT clients’ app on a single code base.",
        tags: ["ReactJS", "HTML5", "CSS", "DashJS"]
    },
    "Zee5 Player &amp; Web App": {
        duration: "03/2020 - 06/2022",
        description: "Worked on development of a responsive & feature-rich web application for SmartTVs.",
        tags: ["Vanilla Javascript", "HTML5", "CSS", "SASS", "Redux"]
    },
    "India Today": {
        duration: "02/2018 - 02/2020",
        description: "Built responsive web applications for India Today & AajTak, news provider firms.",
        tags: ["Vanilla Javascript", "React", "HTML", "CSS"]
    }
}

export const projectNames = Object.keys(projects);

export const summary = 'Worked on multiple projects, ensuring exceptional user experience & optimized performance. Contributed to feature additions, UI enhancements & bug fixing to meet the customer demands. Utilized Agile Software Development(Scrum) methodologies for all projects.';