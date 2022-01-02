import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@material-ui/core/Box";
import MiniProfileImage from "../MiniProfileImage/MiniProfileImage";

export default function AboutMePost(props) {

  return (
    <Card sx={{ my: 4 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MiniProfileImage/>
          <Typography variant="h5" sx={{ my: 1, mx: 2 }}>
            {props.title}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {props.content}
        </Typography>
      </CardContent>
    </Card>
  );
}
