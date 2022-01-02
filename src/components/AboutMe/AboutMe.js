import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import AboutMePost from "./AboutMePost";

const introduction = {
  title: "Introduction",
  content:
    "Hello Viewer, My name is Ryan Walter Lee, currently a Year 2 Computer Science student at the National University of Singapore.",
};

const interest = {
  title: "Other Interests (besides SWE of course)",
  content:
    "I enjoy doing calisthenics, in fact, I'm currently the Captain of NUS Calisthenics, a CCA where we help all students to achieve their better self. I'm also a huge marvel and Naruto fan and my youtube suggestions can vouch for that.",
};

const career = {
  title: "Career Goals",
  content:
    "My long term goal is to be a software engineer. I like software engineering because of the amount of challenge it brings. The process of building a website or app is very tough, but the satisfaction of making something work or successfully debugging triumphs all. As such, I am looking for software engineering internships during my summer (May - end July, full time) and winter (Dec full time, Jan part time) breaks.",
};

export default function AboutMe() {
  return (
    <div className="container">
      <AboutMePost title={introduction.title} content={introduction.content} />
      <AboutMePost title={interest.title} content={interest.content} />
      <AboutMePost title={career.title} content={career.content} />
    </div>
  );
}
