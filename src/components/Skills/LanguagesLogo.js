import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";

export default function LanguagesLogo(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        m: 1,
      }}
    >
      <Paper elevation={0} sx={{ m: 2 }}>
        <img src={props.src} height="60" width="60" object-fit="contain" />
      </Paper>
      <Typography ><strong>{props.name}</strong></Typography>
    </Box>
  );
}
