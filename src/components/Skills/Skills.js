import {languages, frameworks, libraries} from '../../Information';
import LanguagesPost from './LanguagesPost';
import FrameworkPost from './FrameworkPost';


export default function Skills() {

  return (
    <div>
      <LanguagesPost skills={languages} title="Programming Languages"/>
      <FrameworkPost skills={frameworks} title="Frameworks" />
      <FrameworkPost skills={libraries} title="Libraries" />
    </div>
  );
}
