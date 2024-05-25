// ** MUI Imports
import * as React from 'react'
import Switch from '@mui/material/Switch'

// ** MUI Imports

import { Box, Button, Divider, Grid, IconButton, Typography, useTheme } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import AddIcon from '@mui/icons-material/Add'

// import { useRouter } from 'next/router'

import { AddWishListModal } from './AddWishListModel'
import { AddWishListData,  data } from './creatorWishList.data'
import { FlowerCard } from 'src/components/ReactHookForm/Card'
import { AddPaymentMethodFunction } from './AddPaymentMethod'

// const label = { inputProps: { 'aria-label': 'Switch demo' } }

export const CreatorWishList = (props:any) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false)
const  {methods}=props





  const handleChange = () => {
    setIsSwitchOn(prev => !prev) // Toggle the switch state
  }

  // const router=useRouter()
  const [paymentMethod, setPaymentMethod] = React.useState(false)
  const [updatePaymentMethod, setupdatePaymentMethod] = React.useState(false)
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [showCard, setShowCard] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setShowCard?.(true)
  }

  const flowers = AddWishListData()

  const handleAccountDetail = () => {
    setPaymentMethod?.(true)
  }

  // const addPaymentMethod = useForm<any>({
  //   resolver: yupResolver(addpaymentMethodValidationSchema),
  //   defaultValues: addpaymentMethodValidationSchema

  // })

  // const router = useRouter()

  // const handleSave = () => {
  //   setupdatePaymentMethod?.(true)
  //   handleSubmit?.()
  // }

  const handleAccountDetailUpdate = () => {
    setupdatePaymentMethod?.(false)
    handleAccountDetail?.()
    console.log(updatePaymentMethod, paymentMethod)
  }

  return (
    <>
      <div>
        <Accordion>
          <AccordionSummary aria-controls='panel1-content' id='panel1-header'>
            <Box
              justifyContent={'space-between'}
              alignItems={'center'}
              flexDirection={'row'}
              display={'flex'}
              width={'100%'}
            >
              <Typography variant='h2'>WishList</Typography>
              <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center' }}>
                {isSwitchOn ? ' Enabled WishList' : 'Disabled WishList'}
                <Switch defaultChecked={isSwitchOn} onChange={handleChange} />
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ justifyContent: 'center', display: 'flex' }}>
            {showCard === false ? (
              <Button
                variant='contained'
                sx={{
                  marginY: '30px',
                  width: '144px',
                  textTransform: 'none',
                  background: theme.palette.primary.main,
                  '&:hover': {
                    background: '#D5A021' // Change the opacity value as needed
                  }
                }}
                onClick={handleOpen}
              >
                Add Wishlisht
              </Button>
            ) : (
              <>
                <Grid container spacing={2}>
                  {flowers.map((flower: any) => (
                    <Grid item key={flower.id} xs={12} sm={6} md={6} lg={4}>
                      <FlowerCard flower={flower}  />
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
                  <Grid item xs={12} md={12} lg={12} mt={4}>
                    <Divider color='#EBEBEB' sx={{ m: 2 }} />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12} mt={4}>
                    {!updatePaymentMethod && (
                      <>
                        <Typography variant='h3' sx={{ mt: 2, mb: 1 }}>
                          Account Details
                        </Typography>
                        <Typography variant='body1'>Add Account Details for Wishlist Contributions</Typography>
                      </>
                    )}
                    {!paymentMethod && !updatePaymentMethod && (
                      <Button
                        variant='contained'

                        // type='submit'
                        sx={{
                          marginY: '30px',
                          width: '200px',
                          textTransform: 'none',
                          background: theme.palette.primary.main,
                          '&:hover': {
                            background: '#D5A021' // Change the opacity value as needed
                          }
                        }}
                        onClick={handleAccountDetail}
                      >
                        Add Account Details
                      </Button>
                    )}

                    {paymentMethod && !updatePaymentMethod && (
                      <>
                       <AddPaymentMethodFunction setupdatePaymentMethod={setupdatePaymentMethod} methods={methods}/>
                      </>
                    )}

                    {updatePaymentMethod && (
                      <>
                        <Typography variant='h3'>Account Details</Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                          {data.map((item, index) => (
                            <Box key={index} sx={{ padding: 2 }}>
                              <Typography>
                                name: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; {item.name}
                              </Typography>
                              <Typography>
                                Email:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {item.email}
                              </Typography>
                              <Typography>Payment Method:&emsp;&emsp;&emsp;&nbsp; {item.payment_method}</Typography>
                              <Typography>
                                {' '}
                                Qr Code&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                <img src={item.qr_code} alt={`${item.name}'s QR code`} style={{ marginTop: 10 }} />
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                        <Button
                          variant='contained'
                          type='submit'
                          sx={{
                            // position:'relative',
                            // right:8,
                            // bottom:8,
                            marginY: '30px',
                            width: '200px',
                            textTransform: 'none',
                            background: theme.palette.primary.main,
                            '&:hover': {
                              background: '#D5A021' // Change the opacity value as needed
                            }
                          }}
                          onClick={handleAccountDetailUpdate}
                        >
                          Update
                        </Button>
                      </>
                    )}
                  </Grid>
                </Grid>
              </>
            )}
          </AccordionDetails>
        </Accordion>
      </div>
      <AddWishListModal open={open} handleClose={handleClose} setShowCard={setShowCard} />

    </>
  )
}
export default CreatorWishList
