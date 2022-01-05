import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from'react-router-dom';

export default function TabNavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
        <Tab label="About me" component={Link} to="/ryan-portfolio-website" />
        <Tab label="Skills" component={Link} to="/ryan-portfolio-website/skills" />
        <Tab label="Projects" component={Link} to="/ryan-portfolio-website/projects" />
        <Tab label="Work Experience" component={Link} to="/ryan-portfolio-website/workexperience" />
      </Tabs>
    </Box>
  );
}