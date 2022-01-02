import WorkExperiencePost from "./WorkExperiencePost";

const xyndicate = {
  title: "Full Stack Developer",
  company: "Xyndicate",
  duration: "Dec 2021 - Jan 2022",
  content: [
    "Develop user-facing applications to enhance functionality and user experience",
    "Built modular and reusable components using Vue.js to maintain code extendibility and reusability",
  ],
};

const wateroam = {
  title: "Production Technician",
  company: "Wateroam",
  duration: "Feb 2020 - June 2020",
  content: [
    "Led a team of 5 in the production of high-quality product which ensured Wateroam had enough stock to handle the increase in demand during circuit breaker, tripling their revenue compared to a regular time period",
    "Develop, build and test new processes and improve current processes such that productivity in terms of time to produce is raised",
  ],
};

export default function WorkExperience() {
  return (
    <div>
      <WorkExperiencePost info={xyndicate} />
      <WorkExperiencePost info={wateroam} />
    </div>
  );
}
