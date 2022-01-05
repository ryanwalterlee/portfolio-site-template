import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@material-ui/core/Box";
import MiniProfileImage from "../MiniProfileImage/MiniProfileImage";

export default function WorkExperiencePost(props) {
  const createDescription = () => {
    return props.info.content.map((content, index) => (
      <li key={index}>
        <Typography sx={{ mt: 1 }}>{content}</Typography>
      </li>
    ));
  };

  return (
    <Card sx={{ my: 4 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MiniProfileImage />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              mx: 2,
            }}
          >
            <Typography variant="h5">{props.info.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {props.info.company}, {props.info.duration}
            </Typography>
          </Box>
        </Box>

        <ul>{createDescription()}</ul>
        
      </CardContent>
    </Card>
  );
}
