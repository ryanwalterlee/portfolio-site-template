// ALL INFORMATION SHOULD BE HERE

// IMPORT STATEMENTS FOR IMAGES HERE
// YOU MIGHT HAVE TO ADD IMAGES TO src/assets IF YOU WANT OTHER IMAGES
import html from 'programming-languages-logos/src/html/html.svg'
import javascript from 'programming-languages-logos/src/javascript/javascript.svg'
import typescript from 'programming-languages-logos/src/typescript/typescript.svg'
import python from 'programming-languages-logos/src/python/python.svg'
import java from 'programming-languages-logos/src/java/java.svg'
import r from 'programming-languages-logos/src/r/r.svg'
import css from 'programming-languages-logos/src/css/css.svg'
import MySQLlogo from './assets/MySQLlogo.svg'
import ReactLogo from './assets/ReactLogo.svg'
import VueLogo from './assets/VueLogo.svg'

import FinancialCalculator from "./assets/FinancialCalculator.jpg";
import Attendex from "./assets/Attendex.jpg";

import DisplayPicture from "./assets/DisplayPicture.jpg";
import { type } from '@testing-library/user-event/dist/type'

// REPOSITORY NAME (IMPORTANT!!)
export const repositoryName = "portfolio-site-template";

// FOR PROFILE HEADER
export const displayPicture = DisplayPicture;

export const linkedin = "https://www.linkedin.com/in/ryan-walter-lee-534512193/";
export const github = "https://github.com/ryanwalterlee";

export const name = "Ryan Walter Lee";
export const description = "Year 3 NUS Computer Science";

// ABOUT ME PAGE
export const aboutMeInformation = [
  {
    title: "Introduction",
    content:
      `Hello Viewer, My name is Ryan Walter Lee, 
      currently a Year 4 Computer Science student 
      at the National University of Singapore.`,
  },

  {
    title: "Why I love Computer Science",
    content: `Something that I like about coding is prospect of writing clean code.
      After completing a task, I find myself going back to clean it up over multiple iterations.
      For example, I could first start by abstracting functions and components,
      then find ways to turn the code into something more understandable through function programming,
      and maybe afterwards I would collate all the string constants into a single file. Somehow,
      I have more motivation cleaning code than cleaning my room.
    `
  },

  {
    title: "Other Interests (besides SWE of course)",
    content:
      `I enjoy doing calisthenics, in fact, 
      I'm currently the Ex-Captain of NUS Calisthenics, 
      a CCA where we help all students to achieve their better self. 
      I'm also a huge MCU, Naruto and Pokemon fan and 
      my youtube suggestions can vouch for that.`,
  },

  {
    title: "Career Goals",
    content:
      `My long term goal is to be a software engineer. 
      I like software engineering because of the 
      amount of challenge it brings. 
      The process of building a website or app is very tough, 
      but the satisfaction of making something 
      work or successfully debugging triumphs all. 
      As such, I am looking for full time software engineer roles`,
  },
];

// SKILLS PAGE
export const languages = [
  { logo: javascript, name: "Javascript" },
  { logo: typescript, name: "Typescript"},
  { logo: html, name: "HTML" },
  { logo: css, name: "CSS" },
  { logo: python, name: "Python" },
  { logo: java, name: "Java" },
  { logo: MySQLlogo, name: "SQL"}
]

export const frameworks = [
  {logo: ReactLogo, name: "React.js", description: ["React Router", "Material UI"]},
  {logo: VueLogo, name: "Vue.js", description: ["Vuex Store", "Vue Router", "Vuetify"]}
]

export const libraries = [
  {logo: javascript, name: "Javascript", description: ["Express.js", "mysql2", "Puppeteer"]},
  {logo: python, name: "Python", description: ["NumPy", "Pandas", "Sci-kit Learn"]}
]

// PROJECTS PAGE

// EACH OBJECT SHOULD HAVE
// title (string), 
// image (optional), 
// content (string), 
// tech (string), 
// link (string) (a working link)
export const projectInformation = [
  {
    title: "Attendex Backend",
    image: Attendex,
    content: 
      `An attendance app that keeps tracks of multiple classes with each class 
      having multiple dates. 
      A user can create an account with this application to store 
      their classes for future records. 
      A MySQL relational database was used to store this app's data 
      with the endpoints made with Express.js. 
      Click on this card to view the code, schema and documentation for this project.`,
    tech: "Express.js, mysql2 driver, MySQL, MySQL workbench",
    link: "https://github.com/Attendex/attendex-backend"
  },
  {
    title: "Financial Calculator",
    image: FinancialCalculator,
    content:
      `Use this web application to do fundamental analysis on stocks. 
      Enter the required information about the company 
      and the web app will help calculate the statistics 
      that indicates if this stock is worthy of being added to your portfolio 
      based on Fundamental Analysis Principles from a book by Warren Buffett. 
      Click on this card to view the code and the deployed app.`,
    tech: "Vue.js, Vuex, Vue Router, Axios",
    link: "https://github.com/ryanwalterlee/Financial-Calculator",
  },

  {
    title: "MacroTrends Webscrapping API",
    content:
      `An API that scrapes past 10 years EPS and PE ratio of a company
      that is on the stock exchange. A ticker is needed for the GET request. 
      This API is used by Financial Calculator Project. Click on this card to view the code on Github.`,
    tech: "Express.js, Puppeteer",
    link: "https://github.com/ryanwalterlee/Historic-Financial-WebScraping-API",
  },

  {
    title: "Personal Portfolio Website Template",
    content:
      `The template that is used by the site you are looking at right now. 
      (Incase you are wondering I DID NOT copy this from someone's Github, 
      instead I created it myself from scratch) 
      The code is abstracted to the point that all information can be edited 
      from a single file which is 'src/Information.js'. 
      Clone this repo and start building your dream portfolio site 
      in a social media profile theme. Click on this card to visit the Github repo 
      and maybe clone it for your own use.`,
    tech: "React.js, React Router, Material UI",
    link: "https://github.com/ryanwalterlee/portfolio-site-template",
  },
];

// WORK EXPERIENCE PAGE

// EACH OBJECT SHOULD HAVE
// title (string), 
// company (string), 
// duration (string), 
// content (array of descriptions)
export const workInformation = [
  {
    title: "Full Stack Developer",
    company: "GIC",
    duration: "Jan 2023 - Jun 2023",
    content: [
      "Worked on an internal full stack web application which is meant to help portfolio managers investing in public equities to make investment decisions",
      "Develop features in the frontend with Next.js, RTK query and an internal UI library, backend with Loopback Framework in TypeScript, Microservice in .Net Framework and MsSQL for databases",
      "Created a Python microservice from scratch using an internal boilerplate repository that uses FastAPI. This allowed users to obtain live portfolio data instead of outdated data",
      "Implemented JSON logging with Winston following a Backend for Frontend (BFF) architecture, thereby enhancing system observability by adding correlation IDs to all incoming and outgoing requests. The correlation ID implementation enables seamless end-to-end logging, and facilitates efficient tracking and linking of logs across microservices",
    ]
  },
  {
    title: "FrontEnd Web Developer",
    company: "Growthbeans",
    duration: "May 2022 - July 2022",
    content: [
      "Worked in a team of 4 to develop the GrowthCircles web application from scratch",
      "Built modular and reusable components using React to maximise code extensibility and reusability",
      "Followed Figma UI created by the UI team closely to create aesthetic interfaces using CSS",
      "Navigate ambiguity in requirements in the UI to output as much as possible given the constraints",
      "Integrated Firebase to React to display and store user data using various custom React Hooks",
      "Spotted a potential asynchronous bug, improved on the Firebase document structure and refactored the entire codebase to suit the new structure, leading to the prevention of the bug as well as cleaner and easier to understand code due to a more suitable Firebase structure",
      "Refactored entire codebase from Javascript to Typescript which reduced type-related and object-field related bugs, increase the understandability of code and increase the speed of future development",
    ]
  },
  {
    title: "Production Technician",
    company: "Wateroam",
    duration: "Feb 2020 - June 2020",
    content: [
      "Led a team of 5 in the production of high-quality product which ensured Wateroam had enough stock to handle the increase in demand during circuit breaker, tripling their revenue compared to a regular time period",
      "Develop, build and test new processes and improve current processes such that productivity in terms of time to produce is raised",
    ],
  },
];