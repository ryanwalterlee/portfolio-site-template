import WorkExperiencePost from "./WorkExperiencePost";
import { workInformation } from "../../Information";

const makeWorkExperiencePost = () => {
  return workInformation.map((post, index) => (
    <WorkExperiencePost info={post} key={index} />
  ))
}

export default function WorkExperience() {
  return (
    <div>
      {makeWorkExperiencePost()}
    </div>
  );
}
