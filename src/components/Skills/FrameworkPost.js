import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@material-ui/core/Box";
import MiniProfileImage from "../MiniProfileImage/MiniProfileImage";
import FrameworkLogo from "./FrameworkLogo";

// props:
// skills: [{logo: {image source}, name: {name of framework}, description: {elaborate}}]
// title: "title of post"

export default function FrameworkPost(props) {

  const createListOfSkills = () => {
    return props.skills.map((skill) => (
      <FrameworkLogo src={skill.logo} name={skill.name} description={skill.description}/>
    ))
  }

  return (
    <Card sx={{ my: 4 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MiniProfileImage/>
          <Typography variant="h5" sx={{ my: 1, mx: 1.5 }}>
            {props.title}
          </Typography>
        </Box>
        <Box sx={{ mt: 2, mx: 2, display: 'flex', flexWrap: 'wrap'}}>
          {createListOfSkills()}
        </Box>
      </CardContent>
    </Card>
  );
}