import { displayPicture } from '../../Information';
import Avatar from '@mui/material/Avatar';

export default function MiniProfileImage() {

  return (
    <Avatar
      alt="Ryan"
      src={displayPicture}
      sx={{ width: 30, height: 30 }}
    />
  )
  
}