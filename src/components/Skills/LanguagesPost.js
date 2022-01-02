import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@material-ui/core/Box";
import MiniProfileImage from "../MiniProfileImage/MiniProfileImage";
import Languages from "./LanguagesLogo";

export default function LanguagesPost(props) {

  const createListOfLanguages = () => {
    return props.skills.map((skill) => (
      <Languages src={skill.logo} name={skill.name} />
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
          {createListOfLanguages()}
        </Box>
      </CardContent>
    </Card>
  );
}