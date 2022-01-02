import ProjectPost from "./ProjectsPost";
import FinancialCalculator from "./../../assets/FinancialCalculator.jpg"

const financialCalculator = {
  title: "Financial Calculator",
  image: FinancialCalculator,
  content: "Use this web application to do fundamental analysis on stocks. Enter the required information about the company and the web app will help calculate the statistics that indicates if this stock is worthy of being added to your portfolio based on Fundamental Analysis Principles from a book by Warren Buffett.",
  tech: "Vue.js, Vuex, Vue Router, Axios",
  link: "https://github.com/ryanwalterlee/Financial-Calculator"
}

const MacroTrends = {
  title: "MacroTrends Webscrapping API",
  content: "An API that scrapes past 10 years EPS and PE ratio of a company that is on the stock exchange. A ticker is needed for the GET request. This API is used by Financial Calculator Project",
  tech: "Express.js, Puppeteer",
  link: "https://github.com/ryanwalterlee/Historic-Financial-WebScraping-API"
}

const portfolio = {
  title: "This website",
  content: "Showcasing my portfolio in a social media profile style website :)",
  tech: "React, React Router, Material UI",
  link: "https://github.com/ryanwalterlee/ryan-portfolio-website"
}



export default function Projects() {
    return (
      <div>
        <ProjectPost info={financialCalculator} />
        <ProjectPost info={MacroTrends} />
        <ProjectPost info={portfolio} />
      </div>
    );
  }