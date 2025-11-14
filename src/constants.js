// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import renderLogo from './assets/tech_logo/render_logo.png'


import mnnitLogo from './assets/education_logo/mnnitLogo.jpg'
import sunbeamLogo from './assets/education_logo/sunbeamLogo.png'
import stthomasLogo from './assets/education_logo/stThomasLogo.jpg'
// Project Section Logo's
import realestateLogo from './assets/work_logo/realStateLogo.png'
import lmsLogo from './assets/work_logo/lmsLogo.png'
import resumeBuilderLogo from './assets/work_logo/resumeBuilderLogo.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Render', logo: renderLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];


 export const education = [
  {
    id: 0,
    img: mnnitLogo,
    school: "Motilal Nehru National Institute of Technology (MNNIT) Allahabad",
    date: "2022 - 2026",
    grade: "CGPA: 8.06 (till 6th semester)",
    desc: "Currently pursuing B.Tech in Electronics and Communication Engineering at MNNIT Allahabad. Gaining strong knowledge in core engineering subjects while actively working on full-stack development, DSA, and real-world MERN projects. Also involved in coding contests, technical projects, and campus activities such as the MNNIT Cricket Club.",
    degree: "Bachelor of Technology - Electronics and Communication Engineering",
  },
  {
    id: 1,
    img: sunbeamLogo,
    school: "Sunbeam School Narayanpur",
    date: "2019 - 2020",
    grade: "94.6%",
    desc: "Completed Class XII from CBSE board with excellent academic performance. Strong foundation in Physics, Chemistry, and Mathematics along with active participation in school activities.",
    degree: "CBSE (XII) - PCM",
  },
  {
    id: 2,
    img: stthomasLogo,
    school: "St. Thomas School Lower Lines, Chunar",
    date: "2017 - 2018",
    grade: "91%",
    desc: "Completed Class X from CBSE board with distinction. Built early interest in technology, problem-solving, and academic excellence.",
    degree: "CBSE (X) - Science",
  },
];

  
 export const projects = [
  {
    id: 0,
    title: "Real Estate Listing Platform",
    description:
      "A full-stack MERN real estate application with secure authentication, listing management, payments, and image uploads. Includes search, filter, pagination, Google OAuth, Razorpay payments, Cloudinary integration, and a built-in Gemini chatbot for user assistance.",
    image: realestateLogo,
    tags: [
      "React JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Redux",
      "Tailwind CSS",
      "Razorpay",
      "Cloudinary",
      "Google OAuth",
      "API",
    ],
    github: "https://github.com/Gaurav4069/Real-EState.git",
    webapp: "https://real-estate-o6kv.onrender.com/",
  },

  {
    id: 1,
    title: "Full-Stack Course Platform (LMS)",
    description:
      "A complete MERN-based learning platform with secure authentication, role-based dashboards, video streaming, exams, discount feature, anti-cheating detection, Razorpay payments, image uploads, Zoom-based doubt sessions, and a Pomodoro productivity timer.",
    image: lmsLogo,
    tags: [
      "React JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Razorpay",
      "Zoom API",
      "Cloudinary",
      "shadcn/ui",
      "JavaScript",
    ],
    github: "https://github.com/NITianHarsh/MernStackLMS.git",
    webapp: "https://gyaanpath.onrender.com/",
  },
  {
  id: 2,
  title: "AI Resume Builder",
  description:
    "A full-stack React + Strapi CMS Resume Builder application that helps users create, edit, share and download professional resumes. Features include live JSON-based editing, PDF generation, AI-powered summary generator, ATS score checker, resume templates, and secure authentication with Clerk.",
  image: resumeBuilderLogo,
  tags: [
    "React JS",
    "Strapi CMS",
    "Node.js",
    "SQLite",
    "Tailwind CSS",
    "Bootstrap",
    "Clerk Authentication",
    "AI Integration",
    "PDF Generation",
    "ATS Score"
  ],
  github: "https://github.com/Gaurav4069/ResumeBuilder",
  webapp: null
}

];
