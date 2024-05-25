// ** MUI Imports
import Card from '@mui/material/Card'
import { styled, useTheme } from '@mui/material/styles'

import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { useForm } from 'react-hook-form'
import { FormDataArray, FormDefaultValues, FormValidationSchema } from './CreatorForm.data'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import FormProvider from 'src/components/ReactHookForm/FormProvider'
import { Box, Button, Typography } from '@mui/material'

import { ChangeEvent, useState } from 'react'
import CreatorEvent from '../CreatorEvent'
import CreatorWishList from '../CreatorWishList'
import CreatorMemory from '../CreatorMemory'


const ImgStyled = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))
const themeImages = [
  {
    id: 1,
    image: '/images/pages/CreatorPage/black.png'
  },
  {
    id: 2,
    image: '/images/pages/CreatorPage/white-pink.png'
  },
  {
    id: 3,
    image: '/images/pages/CreatorPage/grey.png'
  },
  {
    id: 4,
    image: '/images/pages/CreatorPage/orange.png'
  }
]

const Form = () => {
  const methods = useForm<any>({
    resolver: yupResolver(FormValidationSchema),
    defaultValues: FormDefaultValues
  })


  const router = useRouter()



  const { handleSubmit } = methods
  const onSubmit = async (data:any) => {

     console.log(data)

    //  setupdatePaymentMethod?.(true)

       router.push('/')
  }
  const [imgSrc, setImgSrc] = useState<string>('/images/avatars/9.png')

  const onChange = (file: ChangeEvent) => {
    const reader = new FileReader()
    const { files } = file.target as HTMLInputElement
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string)

      reader.readAsDataURL(files[0])
    }
  }
  const theme = useTheme()

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={4} justifyContent={'space-between'} flexDirection={'row'} display={'flex'}>
                <Grid item xs={12} md={6} lg={7}>
                  <Grid container spacing={2} mt={0} mb={0}>
                    {FormDataArray()?.map((item: any) => (
                      <Grid item xs={12} md={item?.md} key={item?.id}>
                        <item.component {...item?.componentProps} size={'small'}sx={{background:'white'}} />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                <Grid item xs={12} md={6} lg={5} sx={{ marginTop: 0, marginBottom: 0 }}>
                  <Box sx={{ width: '100%', height: '100%' }}>
                    <label htmlFor='account-settings-upload-image'>
                      <ImgStyled src={imgSrc} alt='Profile Pic' />
                    </label>
                    <input
                      hidden
                      type='file'
                      onChange={onChange}
                      accept='image/png, image/jpeg'
                      id='account-settings-upload-image'
                    />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box mb={1}>
                <Typography variant='h2'>Theme</Typography>
              </Box>
              <Grid container spacing={3}>
                {themeImages.map(image => (
                  <Grid item key={image.id} xs={6} sm={3} md={2} lg={3}>
                    <img src={image.image} alt={`Theme ${image.id}`} style={{ width: '100%' }} />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <CreatorEvent />
        </Grid>
        <Grid item xs={12}>
          <CreatorWishList methods={methods}  />
        </Grid>
        <Grid item xs={12}>
          <CreatorMemory />
        </Grid>
        <Grid item xs={12}>
          <Box textAlign={'end'} p={2}>
            <Button
              variant='contained'
              sx={{
                marginY: '10px',
                width: '154px',
                textTransform: 'none',
                background: theme?.palette?.primary?.main,
                '&:hover': {
                  background: '#D5A021' // Change the opacity value as needed
                }
              }}
              type='submit'
              onClick={() => router.push('/creatorPage')}

              // loading={isLoading}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  )
}

export default Form
