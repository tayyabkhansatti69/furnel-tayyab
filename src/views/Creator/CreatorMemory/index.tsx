// ** MUI Imports

import { Box, Button, Grid, Typography } from '@mui/material'
import { EventIcon } from 'src/assets/icons'

import  React, {  useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

import { MemoryCard } from 'src/components/ReactHookForm/MemoryCard'
import { AddMemoryModal } from './AddMemory'






export const CreatorMemory = () => {

  const AddWishListData = () => [
    {
      id: 1,
      name: 'Riya Mlotra',
      relation: 'family Member',
      description:'In the final moment, the breath s silent agreement echoes the immortalized',
      imageUrl: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286',
      type: 'image', // Added type property
    },
    {
      id: 2,
      name: 'Riya Mlotra',
      relation: 'family Member',
      description:'In the final moment, the breath s silent agreement echoes the immortalized',
      imageUrl: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286',
      type: 'image', // Added type property
    },
    {
      id: 3,
      name: 'Riya Mlotra',
      relation: 'family Memberlower',
      description:'In the final moment, the breath s silent agreement echoes the immortalized',
      imageUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      type: 'video', // Added type property for video
    }
  ];

  const [open, setOpen] = useState(false);


// const [show,setShow]=React.useState(false);

const [otherState, setOtherState] = useState(false);

  const handleOpen = () => {
    setOpen(true);


  };

  const handleClose = () => {


    setOpen(false);setOtherState(true)
  };


const flowers=AddWishListData()

  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<EventIcon />} aria-controls='panel1-content' id='panel1-header'>
          <Box
            justifyContent={'space-between'}
            alignItems={'center'}
            flexDirection={'row'}
            display={'flex'}
            width={'100%'}
          >
            <Typography variant='h2'>Memories</Typography>
            <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}>
              Add Memories
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
        <div>
      {otherState === false ? (
        <>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add Memory
          </Button>
          <AddMemoryModal open={open} onClose={handleClose} />
        </>
      ) : (
        <Grid container spacing={2}>
          {flowers.map((flower: any) => (
            <Grid item key={flower.id} xs={12} sm={6} md={6} lg={4}>
              <MemoryCard flower={flower} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
export default CreatorMemory
