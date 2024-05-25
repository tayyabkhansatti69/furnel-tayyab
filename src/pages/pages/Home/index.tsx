import { LoadingButton } from '@mui/lab'
import { Box, Button, Grid, IconButton, Typography, useTheme } from '@mui/material'

// import { Loading } from 'mdi-material-ui'

import { useRouter } from 'next/router'
import { useState } from 'react'
import { LiveDemoCard } from 'src/components/ReactHookForm/LiveDemo'
import AddIcon from '@mui/icons-material/Add'


const CreatorHomePage = () => {
  const AddWishListData = () => [
    {
      id: 1,
      name: 'Riya Mlotra',
      doB: '12/03/1996',
    doD:'01/01/1961',
      imageUrl: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286',
      type: 'image', // Added type property

    },
    {
      id: 2,
      name: 'Riya Mlotra',
      doB: '1996',
    doD:'1999',
      imageUrl: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286',
      type: 'image', // Added type property
    },

  ];
  const flowers=AddWishListData()
  const router = useRouter()
  const theme = useTheme()
const [cardValue,setCardValue]=useState('');
  const { id } = router.query;


const handleLiveBtn=()=>{
  setCardValue?.('Live')
}

const handleDemoBtn=()=>{
  setCardValue?.('Demo')
}

  return (
    <>
    {
      <Grid container justifyContent={'center'} display={'flex'}>
        <Typography variant='h2'>Create a Online Memorial Page</Typography>
        <Box justifyContent={'center'} display={'flex'} m={2}>
          <Typography
            variant='h6'
            sx={{
              wordBreak: 'break-word',
              width: '60%',
              color: '#7A7A7A',
              fontFamily: 'Montserrat',
              fontSize: '21px',
              fontWeight: 400
            }}
          >
            Our Memorial Pages elegantly incorporate service details, cherished photos, heartfelt condolences, and
            opportunities for charitable giving. Share memories effortlessly with loved ones, creating a comforting
            space for collective remembrance.
          </Typography>
        </Box>
        {!id?.length &&
        <Button
          variant='contained'
          sx={{
            marginY: '30px',
            width: '294px',
            textTransform: 'none',
            background: theme.palette.primary.main,
            '&:hover': {
              background: '#D5A021' // Change the opacity value as needed
            }
          }}
          type='submit'
          onClick={() => router.push('/creatorPage')}

          // loading={isLoading}
        >
          Create Memoral Page
        </Button>
        }
        {id?.length &&
        <>
        <Grid  item xs={12}gap={2} mt={2} mb={2}>
          <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} width={'50%'} sx={{gap:'0.1rem'}}>
         <LoadingButton
          fullWidth
            variant="outlined"
            color="secondary"

             onClick={handleLiveBtn}

            // disabled={disableCancelBtn}
          >
            Live
          </LoadingButton>
          <LoadingButton
          fullWidth
            variant="contained"

             onClick={handleDemoBtn}

            // loading={loading}
          >
            Demo
          </LoadingButton>
          </Box>
        </Grid>
         <Grid container spacing={0} m={0}>
         {flowers.map((flower: any) => (
           <Grid item key={flower.id} xs={12} sm={6} md={6} lg={4}>
             <LiveDemoCard flower={flower} cardValue={cardValue} />
           </Grid>
         ))}
         <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Box
                      sx={{
                        width: 85, // Set the width of the box (card size)
                        height: 357, // Set the height of the box (card size)
                        backgroundColor: '#F6F6F6', // Set the background color to gray
                        display: 'flex', // Use flexbox for centering
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                        borderRadius: 2 // Optional: Add some border radius for rounded corners
                      }}
                    >
                      <IconButton color='default' aria-label='add'>
                        <AddIcon fontSize='large' />
                      </IconButton>
                    </Box>
                  </Grid>
         </Grid>
         </>
        }
      </Grid>
}
    </>
  )
}

export default CreatorHomePage
