// ALL INFORMATION SHOULD BE HERE

// IMPORT STATEMENTS FOR IMAGES HERE
// YOU MIGHT HAVE TO ADD IMAGES TO src/assets IF YOU WANT OTHER IMAGES
import html from 'programming-languages-logos/src/html/html.svg'
import javascript from 'programming-languages-logos/src/javascript/javascript.svg'
import python from 'programming-languages-logos/src/python/python.svg'
import java from 'programming-languages-logos/src/java/java.svg'
import r from 'programming-languages-logos/src/r/r.svg'
import css from 'programming-languages-logos/src/css/css.svg'
import ReactLogo from './assets/ReactLogo.svg'
import VueLogo from './assets/VueLogo.svg'

import FinancialCalculator from "./assets/FinancialCalculator.jpg";

import DisplayPicture from "./assets/DisplayPicture.jpg";

// REPOSITORY NAME (IMPORTANT!!)
export const repositoryName = "portfolio-site-template";

// FOR PROFILE HEADER
export const displayPicture = DisplayPicture;

export const linkedin =
  "https://www.linkedin.com/in/ryan-walter-lee-534512193/";
export const github = "https://github.com/ryanwalterlee";

export const name = "Ryan Walter Lee";
export const description = "Year 2 NUS Computer Science";

// ABOUT ME PAGE
export const aboutMeInformation = [
  {
    title: "Introduction",
    content:
      "Hello Viewer, My name is Ryan Walter Lee, currently a Year 2 Computer Science student at the National University of Singapore.",
  },

  {
    title: "Other Interests (besides SWE of course)",
    content:
      "I enjoy doing calisthenics, in fact, I'm currently the Captain of NUS Calisthenics, a CCA where we help all students to achieve their better self. I'm also a huge MCU and Naruto fan and my youtube suggestions can vouch for that.",
  },

  {
    title: "Career Goals",
    content:
      "My long term goal is to be a software engineer. I like software engineering because of the amount of challenge it brings. The process of building a website or app is very tough, but the satisfaction of making something work or successfully debugging triumphs all. As such, I am looking for software engineering internships during my summer (May - end July, full time) and winter (Dec full time, Jan part time) breaks.",
  },
];

// SKILLS PAGE
export const languages = [
  { logo: javascript, name: "Javascript" },
  { logo: html, name: "HTML" },
  { logo: css, name: "CSS" },
  { logo: python, name: "Python" },
  { logo: java, name: "Java" },
  { logo: r, name: "R" },
]

export const frameworks = [
  {logo: ReactLogo, name: "React", description: ["React Router", "Material UI"]},
  {logo: VueLogo, name: "Vue.js", description: ["Vuex Store", "Vue Router", "Vuetify"]}
]

export const libraries = [
  {logo: javascript, name: "Javascript", description: ["Express.js", "Puppeteer"]},
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
    title: "Financial Calculator",
    image: FinancialCalculator,
    content:
      "Use this web application to do fundamental analysis on stocks. Enter the required information about the company and the web app will help calculate the statistics that indicates if this stock is worthy of being added to your portfolio based on Fundamental Analysis Principles from a book by Warren Buffett.",
    tech: "Vue.js, Vuex, Vue Router, Axios",
    link: "https://github.com/ryanwalterlee/Financial-Calculator",
  },

  {
    title: "MacroTrends Webscrapping API",
    content:
      "An API that scrapes past 10 years EPS and PE ratio of a company that is on the stock exchange. A ticker is needed for the GET request. This API is used by Financial Calculator Project",
    tech: "Express.js, Puppeteer",
    link: "https://github.com/ryanwalterlee/Historic-Financial-WebScraping-API",
  },

  {
    title: "Personal Portfolio Website Template",
    content:
      "The template that is used by the site you are looking at right now. The code is abstracted to the point that all information can be edited from a single file which is 'src/Information.js'. Clone this repo and start building your dream portfolio site in a social media profile theme.",
    tech: "React, React Router, Material UI",
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
    company: "Comand.cc",
    duration: "Dec 2021 - Jan 2022",
    content: [
      "Develop user-facing applications to enhance functionality and user experience",
      "Built modular and reusable components using Vue.js to maintain code extendibility and reusability",
    ],
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
