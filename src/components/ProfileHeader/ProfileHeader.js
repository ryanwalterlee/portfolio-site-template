import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import { displayPicture } from '../../Information';
import TabNavBar from './TabNavBar/TabNavBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { linkedin, github, name, description } from '../../Information';

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
          src={ displayPicture }
          sx={{ width: 200, height: 200 }}
        />
      </Box>
      <CardContent sx={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
        <a href={linkedin} target="_blank" >
          <LinkedInIcon color="primary" sx={{mx: 3}} style={{ fontSize:40 }} />
        </a>
        <Box>
          <Typography variant="body2" align='center' color="text.secondary">{name}</Typography>
          <Typography variant="body2" align='center' color="text.secondary">{description}</Typography>
        </Box>
        <a href={github} target="_blank" style={{ textDecoration: "none" }} >
          <GitHubIcon sx={{mx: 3}} style={{ color: "black", fontSize:38 }} />
        </a>
      
      </CardContent>
      <CardActions sx={{maxWidth: '100%'}}>
        <TabNavBar/>
      </CardActions>
    </Card>
    )
}