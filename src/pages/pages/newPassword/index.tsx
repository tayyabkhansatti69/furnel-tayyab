// ** React Imports
import { ReactNode, useState } from 'react'

// ** Next Imports
// import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import Typography from '@mui/material/Typography'

// ** Icons Imports

import Image from 'next/image'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports

import { CardContent, Grid, useTheme } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// import { loginDataArray, loginDefaultValues, loginValidationSchema } from './login.Data'

import FormProvider from 'src/components/ReactHookForm/FormProvider'
import { useRouter } from 'next/router'

// import RHFCheckbox from 'src/components/ReactHookForm/RHFCheckbox'

// import useAuth from 'src/hooks/useAuth'
import { styled } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'

// import { NewPasswordDefaultValues, NewPasswordValidationSchema, PasswordDataArray } from './newPassword.data'




import { IconButton, InputAdornment } from '@mui/material'

import * as Yup from 'yup'

import RHFTextField from 'src/components/ReactHookForm'
import { EyeIcon, EyeSlashIcon } from 'src/assets/images/icons'

 const NewPasswordValidationSchema = Yup.object().shape({
  password: Yup?.string()?.required('Required field'),
  confirmPassword: Yup?.string()?.required('Required field')
})

 const NewPasswordDefaultValues = {
  password: '',
  confirmPassword: ''
}

 const PasswordDataArray = (handleClickShowPassword: any, handleMouseDownPassword: any, showPassword: any) => {
  return [
    {
      id: 1,
      componentProps: {
        name: 'password',
        label: 'Password',
        fullWidth: true,
        placeholder: 'Enter Password',
        required: true,
        type: showPassword ? 'text' : 'password',
        InputProps: {
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={() => handleClickShowPassword()}
                onMouseDown={handleMouseDownPassword}
              >
                {!showPassword ? <EyeSlashIcon /> : <EyeIcon />}
              </IconButton>
            </InputAdornment>
          )
        }
      },
      component: RHFTextField,
      md: 12
    },
    {
      id: 2,
      componentProps: {
        name: 'confirmPassword',
        label: 'Confirm Password',
        fullWidth: true,
        placeholder: 'Enter Your Confirm Password',
        required: true,
        type: showPassword ? 'text' : 'password',
        InputProps: {
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={() => handleClickShowPassword()}
                onMouseDown={handleMouseDownPassword}
              >
                {!showPassword ? <EyeSlashIcon /> : <EyeIcon />}
              </IconButton>
            </InputAdornment>
          )
        }
      },
      component: RHFTextField,
      md: 12
    }
  ]
}











const NewPasswordPage = () => {

  // ** State
  // const [values, setValues] = useState<State>({
  //   password: '',
  //   showPassword: false
  // })

  // // ** Hook

  const [showPassword, setShowPassword] = useState(false)
  const theme = useTheme()
  const handleClickShowPassword = () => {
    setShowPassword(show => !show)
  }
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const newPasswordForm = useForm({
    resolver: yupResolver(NewPasswordValidationSchema) as any,
    defaultValues: NewPasswordDefaultValues
  })

  // const { login } = useAuth()

  // const [authLogin, { isLoading }] = useAuthLoginMutation()
  const router = useRouter()
  const onSubmit = async () => {
    router.push('/pages/login')
  }

  const { handleSubmit } = newPasswordForm
  const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
    [theme.breakpoints.up('sm')]: { width: '28rem' }
  }))

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <FormProvider methods={newPasswordForm} onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column' // Aligning items vertically
              }}
            >
              <Box
                sx={{
                  mb: 8, // Adding margin bottom
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Image src='/images/login/loginIcon.png' alt='Description of the image' width={197} height={208} />
              </Box>
              <Box
                sx={{
                  mb: 6, // Adding margin bottom
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}
              >
                <Typography variant='h5'>Enter Your New Password</Typography>
                <Typography variant='body1'>Create Your New Password</Typography>
              </Box>

              <Grid container spacing={2}>
                {PasswordDataArray(handleClickShowPassword, handleMouseDownPassword, showPassword)?.map((item: any) => (
                  <Grid item xs={12} md={item?.md} key={item?.id}>
                    <item.component {...item?.componentProps} size={'small'} />
                  </Grid>
                ))}
              </Grid>

              {/* Sign In button */}
              <Button
                variant='contained'
                sx={{
                  marginY: '30px',
                  width: '100%',
                  textTransform: 'none',
                  background: theme.palette.primary.main,
                  '&:hover': {
                    background: '#D5A021' // Change the opacity value as needed
                  }
                }}
                type='submit'

                // loading={isLoading}
              >
                Change Password
              </Button>
            </Box>
          </FormProvider>
        </CardContent>
      </Card>
    </Box>
  )
}

NewPasswordPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default NewPasswordPage
