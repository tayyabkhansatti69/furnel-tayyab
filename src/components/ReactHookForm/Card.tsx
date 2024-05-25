import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BookmarkAddIcon } from 'src/assets/icons';
import { AlertModals } from '../AlertModel';

// import { BookmarkAdd as BookmarkAddIcon, MoreVert as MoreVertIcon } from '@mui/icons-material';

export const FlowerCard = ({ flower }: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDeleteModel,setOpenDeleteModel]=React.useState(false)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    // Add your edit logic here
    handleClose();
  };

  const handleDelete = () => {
    // Add your delete logic here
    setOpenDeleteModel?.(true);
    handleClose();
  };
  const handleCloseAlertModal=()=>{
    setOpenDeleteModel(false)

  }
  const handleEventDelete=()=>{
    console.log("yes deleted")
    setOpenDeleteModel(false)
  }

  return (
    <>
    <Card sx={{ width: 320, height: 357, marginBottom: 2, position: 'relative' }}>
      <CardMedia
        component="img"
        height="280"
        image={flower.imageUrl}
        alt={flower.flowerName}
        sx={{ width: '100%' }}
      />
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">{flower.flowerName}</Typography>
        <div style={{ textAlign: 'right' }}>
          <Typography variant="body2">Price:</Typography>
          <Typography variant="h6">${flower.price}</Typography>
        </div>
        <IconButton
          aria-label="more"
          aria-controls="flower-menu"
          aria-haspopup="true"
          onClick={handleClick}
          size="small"
          sx={{ position: 'absolute', top: '8px', right: '8px' }}
        >
          <BookmarkAddIcon />
        </IconButton>
        <Menu
          id="flower-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleEdit}>Edit</MenuItem>
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
      </CardContent>
      {/* <IconButton
        aria-label="bookmark flower"
        color="default"
        size="small"
        sx={{ position: 'absolute', top: '8px', right: '48px' }} // Adjusting position to accommodate menu button
      >
        <BookmarkAddIcon />
      </IconButton> */}
    </Card>
     <AlertModals
     type="Delete WishList"
     open={openDeleteModel}
     handleClose={handleCloseAlertModal}
     handleSubmitBtn={handleEventDelete}
     message="Are you sure you want to delete your wishList updates?"
   />
   </>
  );
};
