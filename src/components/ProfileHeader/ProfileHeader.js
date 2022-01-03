import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import DisplayPicture from "./../../assets/DisplayPicture.jpg";
import TabNavBar from './TabNavBar/TabNavBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
      <CardContent sx={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
        <a href="https://www.linkedin.com/in/ryan-walter-lee-534512193/" target="_blank" >
          <LinkedInIcon color="primary" sx={{mx: 3}} style={{ fontSize:40 }} />
        </a>
        <Box>
          <Typography variant="body2" align='center' color="text.secondary">Ryan Walter Lee</Typography>
          <Typography variant="body2" align='center' color="text.secondary">Year 2 NUS Computer Science</Typography>
        </Box>
        <a href="https://github.com/ryanwalterlee" target="_blank" style={{ textDecoration: "none" }} >
          <GitHubIcon sx={{mx: 3}} style={{ color: "black", fontSize:38 }} />
        </a>
      
      </CardContent>
      <CardActions sx={{ display: "flex", flexDirection: "column"}}>
        <TabNavBar/>
      </CardActions>
    </Card>
    )
}