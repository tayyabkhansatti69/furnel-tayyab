// ** React Imports
import { useState, ReactNode } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

// import Checkbox from '@mui/material/Checkbox'
// import TextField from '@mui/material/TextField'

import Typography from '@mui/material/Typography'

// import InputLabel from '@mui/material/InputLabel'
// import IconButton from '@mui/material/IconButton'

import CardContent from '@mui/material/CardContent'

// import FormControl from '@mui/material/FormControl'
// import OutlinedInput from '@mui/material/OutlinedInput'

import { styled, useTheme } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'

// import InputAdornment from '@mui/material/InputAdornment'

// import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'

// ** Icons Imports
// import Google from 'mdi-material-ui/Google'
// import Github from 'mdi-material-ui/Github'
// import Twitter from 'mdi-material-ui/Twitter'
// import Facebook from 'mdi-material-ui/Facebook'
// import EyeOutline from 'mdi-material-ui/EyeOutline'
// import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
// import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
// import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'
import Image from 'next/image'
import { Grid } from '@mui/material'

// import { RegisterDataArray, RegisterDefaultValues, RegisterValidationSchema } from './register.data'

import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import FormProvider from 'src/components/ReactHookForm/FormProvider'
import RHFCheckbox from 'src/components/ReactHookForm/RHFCheckbox'

// interface State {
//   password: string
//   showPassword: boolean
// }

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

// const LinkStyled = styled('a')(({ theme }) => ({
//   fontSize: '0.875rem',
//   textDecoration: 'none',
//   color: theme.palette.primary.main
// }))

// const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
//   marginTop: theme.spacing(1.5),
//   marginBottom: theme.spacing(4),
//   '& .MuiFormControlLabel-label': {
//     fontSize: '0.875rem',
//     color: theme.palette.text.secondary
//   }
// }))










import { IconButton, InputAdornment } from '@mui/material'

import * as Yup from 'yup'

import RHFTextField from 'src/components/ReactHookForm'
import { EyeIcon, EyeSlashIcon } from 'src/assets/images/icons'

 const RegisterValidationSchema = Yup.object().shape({
  firstName: Yup?.string()?.trim()?.required('Required field'),
  lastName: Yup?.string()?.trim()?.required('Required field'),
  email: Yup?.string()?.trim()?.required('Required field'),
  password: Yup?.string()?.required('Required field'),
  confirmPassword: Yup?.string()?.required('Required field'),
  termAndCondtion: Yup?.string()?.required('Required field')
})

 const RegisterDefaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  termAndCondition: ''
}

 const RegisterDataArray = (handleClickShowPassword: any, handleMouseDownPassword: any, showPassword: any) => {
  return [
    {
      id: 1,
      componentProps: {
        name: 'firstName',
        label: 'First Name',
        fullWidth: true,
        placeholder: 'Enter Your First Name',
        required: true
      },
      component: RHFTextField,
      md: 12
    },
    {
      id: 2,
      componentProps: {
        name: 'lastName',
        label: 'Last Name',
        fullWidth: true,
        placeholder: 'Enter Your Last Name',
        required: true
      },
      component: RHFTextField,
      md: 12
    },
    {
      id: 2,
      componentProps: {
        name: 'email',
        label: 'Email',
        fullWidth: true,
        placeholder: 'Enter Email',
        required: true
      },
      component: RHFTextField,
      md: 12
    },
    {
      id: 3,
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
      id: 5,
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




const RegisterPage = () => {
  // ** States
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(show => !show)
  }
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const RegisterForm = useForm({
    resolver: yupResolver(RegisterValidationSchema)as any,
    defaultValues: RegisterDefaultValues
  })

  // const { login } = useAuth()

  // const [authLogin, { isLoading }] = useAuthLoginMutation()
  const router = useRouter()

  const { handleSubmit } = RegisterForm
  const onSubmit = async () => {
    router.push('/')
  }

  const theme = useTheme()

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <FormProvider methods={RegisterForm} onSubmit={handleSubmit(onSubmit)}>
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
              <Typography variant='h5'>Register a New Account!</Typography>
              <Typography>
                <span>Already Register? </span>

                <Link href='/pages/login' passHref>
                  <Typography
                    component='a'
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: '500',
                      textDecoration: 'underline',
                      mt: '4px'
                    }}
                  >
                    LoginIn
                  </Typography>
                </Link>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Divider sx={{ width: '45%', marginRight: '10px' }} />
              <Typography sx={{ color: '#062030' }}>OR</Typography>
              <Divider sx={{ width: '45%', marginLeft: '10px' }} />
            </Box>
            <Grid container spacing={2} mt={1} mb={1}>
              {RegisterDataArray(handleClickShowPassword, handleMouseDownPassword, showPassword)?.map((item: any) => (
                <Grid item xs={12} md={item?.md} key={item?.id}>
                  <item.component {...item?.componentProps} size={'small'} />
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={4} alignItems='center' justifyContent='space-between'>
              <Grid item xs={8}>
                <RHFCheckbox name='termAndCondtion' label='Term And Condition' />
              </Grid>
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
              Sign Up
            </Button>
          </FormProvider>
        </CardContent>
      </Card>
    </Box>
  )
}

RegisterPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default RegisterPage
