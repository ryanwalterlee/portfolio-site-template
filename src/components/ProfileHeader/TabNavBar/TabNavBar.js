import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import { repositoryName } from "./../../../Information";

const aboutMe = "/" + repositoryName;
const skills = "/" + repositoryName + "/skills";
const projects = "/" + repositoryName + "/projects";
const work = "/" + repositoryName + "/workexperience";

export default function TabNavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}        
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
      >
        <Tab label="About me" component={Link} to={aboutMe} />
        <Tab label="Skills" component={Link} to={skills} />
        <Tab label="Projects" component={Link} to={projects} />
        <Tab label="Work Experience" component={Link} to={work} />
      </Tabs>
    </Box>
  );
}
