import DisplayPicture from "./../../assets/DisplayPicture.jpg";
import Avatar from '@mui/material/Avatar';

export default function MiniProfileImage() {

  return (
    <Avatar
      alt="Ryan"
      src={DisplayPicture}
      sx={{ width: 30, height: 30 }}
    />
  )
  
}