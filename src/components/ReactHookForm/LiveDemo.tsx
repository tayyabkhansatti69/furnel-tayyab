import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// import Avatar from '@mui/material/Avatar';

import { BookmarkAddIcon } from 'src/assets/icons';
import { AlertModals } from '../AlertModel';
import { Box } from '@mui/system';
import MemoryModal from '../updateMemory';

export const LiveDemoCard = ({ flower,cardValue }: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseModel = () => {
    setOpen(false);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    // Add your edit logic here
    handleOpen?.();
    handleClose();
  };

  const handleDelete = () => {
    // Add your delete logic here
    setOpenDeleteModel(true);
    handleClose();
  };

  const handleCloseAlertModal = () => {
    setOpenDeleteModel(false);
  };

  const handleEventDelete = () => {
    console.log("yes deleted");
    setOpenDeleteModel(false);
  };



  return (
    <>
      <Card sx={{ width: 320, height: 360, marginBottom: 2, position: 'relative' }}>
        {flower.type === 'image' ? (
          <CardMedia
            component="img"
            height="260"
            image={flower.imageUrl}
            alt={flower.flowerName}
            sx={{ width: '100%' }}
          />
        ) : (
          <CardMedia
            component="video"
            height="260"
            src={flower.imageUrl}
            controls
            sx={{ width: '100%' }}
          />
        )}
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start',background:'#F6F6F6' }}>
          <Box display={'flex'} flexDirection={'column'}  gap={2}>

          <Typography variant="h6">{flower?.name}</Typography>
          <Typography variant="body2">{flower?.doB}-{flower?.doD}</Typography>

          </Box>
          <Box sx={{ position: 'absolute', top: '8px', left: '8px',width:'50px',height:'30px', background:'green',color:'white' }}>
        <Typography ml={2}  >{cardValue}</Typography>
        </Box>
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
      </Card>
      <AlertModals
        type="Delete Memory"
        open={openDeleteModel}
        handleClose={handleCloseAlertModal}
        handleSubmitBtn={handleEventDelete}
        message="Are you sure you want to delete your Memory updates?"
      />
      <MemoryModal open={open} onClose={handleCloseModel}  />
    </>
  );
};
