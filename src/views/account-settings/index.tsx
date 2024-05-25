import { Button, Grid, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import { Box } from '@mui/system'
import {
  settingDataArray,
  settingDataArrayTwo,
  settingDefaultValues,
  settingDefaultValuesTwo,
  settingValidationSchema,
  settingValidationSchemaTwo
} from './accountSetting.data'

// import { useRouter } from 'next/router'

import FormProvider from 'src/components/ReactHookForm/FormProvider'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const ImgStyled = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))
export const Setting = () => {
  const [imgSrc, setImgSrc] = useState<string>('/images/avatars/10.png')

  const onChange = (file: ChangeEvent) => {
    const reader = new FileReader()
    const { files } = file.target as HTMLInputElement
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string)

      reader.readAsDataURL(files[0])
    }
  }

  // const [showPassword, setShowPassword] = useState(false)

  const theme = useTheme()

  // const handleClickShowPassword = () => {
  //   setShowPassword(show => !show)
  // }
  // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault()
  // }

  const method2 = useForm({
    resolver: yupResolver(settingValidationSchemaTwo) as any,
    defaultValues: settingDefaultValuesTwo
  })

  // const { login } = useAuth()

  // const [authLogin, { isLoading }] = useAuthLoginMutation()

  // const router = useRouter()

  const onSubmit = async (data:any) => {console.log(data)}

  const { handleSubmit } = method2

  const method1 = useForm({
    resolver: yupResolver(settingValidationSchema) as any,
    defaultValues: settingDefaultValues
  })

  // const { login } = useAuth()

  // const [authLogin, { isLoading }] = useAuthLoginMutation()

  const onSubmit2 = async (data:any) => {console.log(data)}

  const { handleSubmit: handleSubmitTwo } = method1
  const data = settingDataArrayTwo

  return (
    <>
      <Typography variant='h2'>Account Settings</Typography>

      <Grid container spacing={2} display={'flex'} justifyContent={'space-between'}>
        <Grid item xs={12} md={9} lg={9}>
          <Box borderRadius={3} border={`2px solid #FFFF`} p={2} sx={{ background: 'white' }}>
            {' '}
            <Typography variant='h6' mt={2} mb={2}>Edit Profile</Typography>
            {/* Adding spacing between grid items */}
            <FormProvider methods={method2} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                {' '}
                {/* Adding spacing be)tween grid items */}
                {data?.map((item: any) => (
                  <Grid item xs={12} md={item?.md} key={item?.id}>
                    <item.component {...item?.componentProps} size={'small'} />
                  </Grid>
                ))}
              </Grid>
              <Button
                variant='contained'
                fullWidth
                sx={{
                  marginY: '10px',
                  marginTop: '2rem',
                  textTransform: 'none',
                  background: theme?.palette?.primary?.main,
                  '&:hover': {
                    background: '#D5A021' // Change the opacity value as needed
                  }
                }}
                type='submit'

                // onClick={() => router.push('/creatorPage')}

                // loading={isLoading}
              >
                Save Changes
              </Button>
            </FormProvider>
          </Box>
        </Grid>
        <Grid item xs={12} md={9} lg={2.5}>
          <Box sx={{ background: 'white' }}>
            <Box sx={{ width: '100%', height: '100%' }} p={2} borderRadius={3} border={`2px solid #FFFF`}>
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
          </Box>
        </Grid>
        <Grid item xs={12} md={9} lg={9}>
          <Box
            borderRadius={3}
            border={`2px solid #FFFF`}

            // p={2}
            sx={{ background: 'white' }}
          >
           < Typography variant='h6' mt={2} mb={2}>Password</Typography>
            <FormProvider methods={method1} onSubmit={handleSubmitTwo(onSubmit2)}>
              <Grid container spacing={2}>
                {settingDataArray()?.map((item: any) => (
                  <Grid item xs={12} md={item?.md} key={item?.id}>
                    <item.component {...item?.componentProps} size={'small'} />
                  </Grid>
                ))}
              </Grid>
              <Button
                variant='contained'
                fullWidth
                sx={{
                  marginY: '10px',
                  marginTop:'2rem',
                  textTransform: 'none',
                  background: theme?.palette?.primary?.main,
                  '&:hover': {
                    background: '#D5A021' // Change the opacity value as needed
                  }
                }}
                type='submit'

                // onClick={() => router.push('/creatorPage')}

                // loading={isLoading}
              >
                Save Passwords
              </Button>
            </FormProvider>

          </Box>
        </Grid>
      </Grid>
    </>
  )
}
export default Setting
