import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";

export default function FrameworkLogo(props) {

  const createDescription = () => {
    return props.description.map((description) => (
      <li>
        <Typography>{description}</Typography>
      </li>
    ))
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mx: 3,
        my: 1
      }}
    >
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Paper elevation={0} sx={{ m: 2 }}>
          <img src={props.src} height="80" width="80" object-fit="contain" />
        </Paper>
        <Typography><strong>{props.name}</strong></Typography>
      </Box>

      <Box>
        <ul>
          {createDescription()}
        </ul>
      </Box>
    </Box>
  );
}
