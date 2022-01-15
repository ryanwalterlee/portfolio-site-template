import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@material-ui/core/Box";
import MiniProfileImage from "../MiniProfileImage/MiniProfileImage";
import Languages from "./LanguagesLogo";
import Transition from "../helpers/Transition";

export default function LanguagesPost(props) {

  const createListOfLanguages = () => {
    return props.skills.map((skill) => (
      <Languages key={skill.name} src={skill.logo} name={skill.name} />
    ))
  }

  return (
    <Transition children={
      <Card sx={{ my: 4 }}>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MiniProfileImage/>
            <Typography variant="h5" sx={{ my: 1, mx: 2 }}>
              {props.title}
            </Typography>
          </Box>
          <Box sx={{ mt: 2, mx: 2, display: 'flex', flexWrap: 'wrap'}}>
            {createListOfLanguages()}
          </Box>
        </CardContent>
      </Card>
    }/>
  );
}