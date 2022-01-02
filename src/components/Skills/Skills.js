import html from 'programming-languages-logos/src/html/html.svg'
import javascript from 'programming-languages-logos/src/javascript/javascript.svg'
import python from 'programming-languages-logos/src/python/python.svg'
import java from 'programming-languages-logos/src/java/java.svg'
import r from 'programming-languages-logos/src/r/r.svg'
import css from 'programming-languages-logos/src/css/css.svg'
import ReactLogo from './../../assets/ReactLogo.svg'
import VueLogo from './../../assets/VueLogo.svg'

import LanguagesPost from './LanguagesPost';
import FrameworkPost from './FrameworkPost'

const languages = [
  { logo: javascript, name: "Javascript" },
  { logo: html, name: "HTML" },
  { logo: css, name: "CSS" },
  { logo: python, name: "Python" },
  { logo: java, name: "Java" },
  { logo: r, name: "R" },
]

const frameworks = [
  {logo: ReactLogo, name: "React", description: ["React Router", "Material UI"]},
  {logo: VueLogo, name: "Vue.js", description: ["Vuex Store", "Vue Router", "Vuetify"]}
]

const libraries = [
  {logo: javascript, name: "Javascript", description: ["Express.js", "Puppeteer"]},
  {logo: python, name: "Python", description: ["NumPy", "Pandas", "Sci-kit Learn"]}
]


export default function Skills() {

  return (
    <div>
      <LanguagesPost skills={languages} title="Programming Languages"/>
      <FrameworkPost skills={frameworks} title="Frameworks" />
      <FrameworkPost skills={libraries} title="Libraries" />
    </div>
  );
}
