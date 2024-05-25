// ** MUI Imports

import { Box, Grid, Typography } from '@mui/material'
import { EventIcon } from 'src/assets/icons'
import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { EventDataArray } from './CreatorEvent.data'
import CloseIcon from '@mui/icons-material/Close';
import { AlertModals } from 'src/components/AlertModel'

export const CreatorEvent = () => {
  const [openDeleteModel,setOpenDeleteModel]=React.useState(false)

  const handleCloseAlertModal=()=>{
    setOpenDeleteModel(false)

  }
  const handleEventDelete=()=>{
    console.log("yes deleted")
    setOpenDeleteModel(false)
  }

  return (
    <>
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
            <Typography variant='h2'>Events Updates</Typography>
            <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}>
              Add Event
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails  sx={{ position: 'relative' }} >
        <CloseIcon sx={{ position: 'absolute', top: '8px', right: '8px', cursor: 'pointer' }} onClick={() => setOpenDeleteModel(true)} />
          <Grid container spacing={2} p={6} mb={0} sx={{background:'#F6F6F6'}}>
            {EventDataArray()?.map((item: any) => (
              <Grid item xs={12} md={item?.md} key={item?.id}>
                <item.component {...item?.componentProps} size={'small'} sx={{background:'white'}}/>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
       <AlertModals
       type="Delete Event"
       open={openDeleteModel}
       handleClose={handleCloseAlertModal}
       handleSubmitBtn={handleEventDelete}
       message="Are you sure you want to delete your event updates?"
     />
     </>
  )
}
export default CreatorEvent
