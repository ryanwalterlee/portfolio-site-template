import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActions } from '@mui/material';
import DisplayPicture from "./../../assets/DisplayPicture.jpg";
import { makeStyles } from '@mui/styles';
import TabNavBar from './../TabNavBar/TabNavBar';
import Typography from '@mui/material/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  image: {
    objectFit: 'contain',
    borderRadius: '50%',
  }
});

export default function ProfileHeader() {

  const classes = useStyles();

  return (
    <Card sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
      <Box mt={3} mb={1}>
        <CardMedia
          sx={{height:200, width:200}}
          className={classes.image}
          component="img"
          image={DisplayPicture}
        />
      </Box>
      <CardContent>
        <Typography variant="body2" align='center' color="text.secondary">Ryan Walter Lee</Typography>
        <Typography variant="body2" align='center' color="text.secondary">Year 2 NUS Computer Science</Typography>
      </CardContent>
      <CardActions>
        <TabNavBar className="tab-nav-bar"/>
      </CardActions>
    </Card>
    )
}