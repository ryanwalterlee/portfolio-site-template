import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@material-ui/core/Box";
import MiniProfileImage from "../MiniProfileImage/MiniProfileImage";
import { CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import { useState } from "react";

const useStyles = makeStyles({
  image: {
    objectFit: "contain",
  },
  base: {
    transition: "transform 0.15s ease-in-out"
  },
  hover: {
    transform: "scale3d(1.05, 1.05, 1)"
  },
  media: {
    display: "flex",
    "@media (max-width: 500px)": { // eslint-disable-line no-useless-computed-key
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }
  }
})

export default function ProjectPost(props) {
  const classes = useStyles();

  const renderImageConditionally = () => {
    if (props.info.image) {
      return (
        <CardMedia
          sx={{ height: 300, width: 300, mx: 2 }}
          className={classes.image}
          component="img"
          image={props.info.image}
          height="150"
        />
      );
    }
  };

  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })

  return (
    <a target="_blank" href={props.info.link} style={{textDecoration: 'none'}}>
      <Card
        sx={{ my: 4 }}
        className={classes.base}
        classes={{ root: state.raised ? classes.hover : "" }}
        onMouseOver={()=>setState({ raised: true, shadow:3})} 
        onMouseOut={()=>setState({ raised:false, shadow:1 })} 
        raised={state.raised} 
        zdepth={state.shadow}
      >
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <MiniProfileImage />
            <Box sx={{ mx: 2 }}>
              <Typography variant="h5">{props.info.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                Tech Stacks Used: {props.info.tech}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex" }}
            className={classes.media}>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
              {renderImageConditionally()}
            </Box>

            <Container
              sx={{
                mx: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1" sx={{ my: 1 }}>
                {props.info.content}
              </Typography>
            </Container>
          </Box>
        </CardContent>
      </Card>
    </a>
  );
}
