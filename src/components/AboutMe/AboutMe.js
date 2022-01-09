import React from "react";
import AboutMePost from "./AboutMePost";
import { aboutMeInformation } from "../../Information";

const makeAboutMePost = () => {
  return aboutMeInformation.map((post) => (
    <AboutMePost title={post.title} content={post.content} key={post.title} />
  ))
}

export default function AboutMe() {
  return (
    <div className="container">
      { makeAboutMePost() }
    </div>
  );
}
