import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import DisplayPicture from "./../../assets/DisplayPicture.jpg";
import { makeStyles } from '@mui/styles';
import TabNavBar from './../TabNavBar/TabNavBar';
import Typography from '@mui/material/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@mui/material/Avatar';

export default function ProfileHeader() {

  return (
    <Card sx={{display:'flex', 
      flexDirection:'column', 
      justifyContent:'center', 
      alignItems: 'center',
      mt: 3}}>
      <Box mt={3} mb={1}>
        <Avatar
          alt="Ryan"
          src={DisplayPicture}
          sx={{ width: 200, height: 200 }}
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