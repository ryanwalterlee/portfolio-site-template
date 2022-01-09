import ProjectPost from "./ProjectsPost";
import { projectInformation } from "../../Information";

const makeProjectPost = () => {
  return projectInformation.map((post) => (
    <ProjectPost info={post} key={post.title}/>
  ))
}

export default function Projects() {
    return (
      <div>
        {makeProjectPost()}
      </div>
    );
  }