// ** React Imports
import { ReactNode, useEffect, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import Typography from '@mui/material/Typography'

// ** Icons Imports

import Image from 'next/image'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports

import { CardContent, Divider, Grid, useTheme } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


import FormProvider from 'src/components/ReactHookForm/FormProvider'
import { useRouter } from 'next/router'
import RHFCheckbox from 'src/components/ReactHookForm/RHFCheckbox'

// import useAuth from 'src/hooks/useAuth'
import { styled } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import { UseUser } from 'src/@core/context/userContext'






import { IconButton, InputAdornment } from '@mui/material'

import * as Yup from 'yup'

import RHFTextField from 'src/components/ReactHookForm'
import { EyeIcon, EyeSlashIcon } from 'src/assets/images/icons'






//  const styles = {
//   AuthHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     position: 'fixed',
//     top: 20,
//     width: '100%',
//     zIndex: 1,
//     padding: '0 7%',
//     '& a': {
//       backgroundColor: '#41CCB8',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '5px',
//       fontSize: '16px',
//       cursor: 'pointer',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       width: '85px',
//       height: '44px'
//     }
//   },

//   loginDashboard: {
//     backgroundColor: 'rgb(245, 245, 245)',
//     height: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   formStyling: {
//     display: 'grid',
//     border: '1.5px solid #E5E7EB',
//     borderRadius: '8px',
//     padding: '30px',
//     marginTop: '30px'
//   }
// }



 const loginValidationSchema = Yup.object().shape({
  email: Yup?.string()?.trim()?.required('Required field'),
  password: Yup?.string()?.required('Required field')
})

 const loginDefaultValues = {
  email: '',
  password: ''
}

 const loginDataArray = (handleClickShowPassword: any, handleMouseDownPassword: any, showPassword: any) => {
  return [
    {
      id: 1,
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
      id: 2,
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
    }
  ]
}



const LoginPage = () => {
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

  const loginForm = useForm({
    resolver: yupResolver(loginValidationSchema) as any,
    defaultValues: loginDefaultValues
  })

  // const { login } = useAuth()

  // const [authLogin, { isLoading }] = useAuthLoginMutation()
  const router = useRouter()
  const { setUser } = UseUser();

  //  const [email, setEmail] = useState('');
  //  const [password, setPassword] = useState('');

  const onSubmit = (data:any) => {
    console.log(data);

    // Save user to localStorage

    localStorage.setItem('user', JSON.stringify({ email: data.email, password: data.password }));

    // Redirect based on user credentials
    if (data.email === "superadmin@example.com" && data.password === 'superpassword') {
      router.push('/dashboard');
    } else if (data.email === "creator@example.com" && data.password === 'creatorpassword') {
      router.push('/pages/Home');
    } else {
      console.log('Invalid credentials');
    }

    // console.log(email,password)
  };

  useEffect(() => {
    const storedUserString = localStorage.getItem('user');
    if (storedUserString) {
      const storedUser = JSON.parse(storedUserString);

      // setEmail(storedUser.email);
      // setPassword(storedUser.password);
      setUser({ email: storedUser.email, password: storedUser.password });

      if (storedUser.email === "superadmin@example.com" && storedUser.password === 'superpassword') {
        router.push('/dashboard');
      } else if (storedUser.email === "creator@example.com" && storedUser.password === 'creatorpassword') {
        router.push('/pages/Home');
      } else {
        console.log('Invalid credentials');
      }
    }
  }, [router]);

  // const onSubmit = (data:any) => {
  //   console.log(data)
  //   // setEmail(data.email)
  //   // setPassword(data.setPassword);
  //   setUser({ email: data.email, password: data.password })

  //   if (data.email === "superadmin@example.com" && data.password === 'superpassword') {
  //     router.push('/dashboard')
  //   } else if (data.email === "creator@example.com" && data.password === 'creatorpassword') {
  //     router.push('/')
  //   } else {
  //     // Handle incorrect credentials
  //     router.push('/')
  //     console.log('Invalid credentials')
  //   }
  // }



  // const { setUser } = UseUser();
  // const onSubmit = async (data:any) => {

  //   // router.push(`/dashboard/email?${data?.email}password?${data?.password}`)

  //   setUser({ data?.email, data?.password });

  //   router.push({
  //     pathname: '/dashboard',
  //     query: { email: data?.email, password: data?.password }
  //   })


  // }

  const { handleSubmit } = loginForm
  const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
    [theme.breakpoints.up('sm')]: { width: '28rem' }
  }))

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <FormProvider methods={loginForm} onSubmit={handleSubmit(onSubmit)}>
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
                <Typography variant='h5'>Welcome Back!</Typography>
                <Typography>
                  <span>Dont have a account? </span>

                  <Link href='/pages/register' passHref>
                    <Typography
                      component='a'
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: '500',
                        textDecoration: 'underline',
                        mt: '4px'
                      }}
                    >
                      signup
                    </Typography>
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Divider sx={{ width: '400%', marginRight: '10px' }} />
                <Typography sx={{ color: '#062030' }}>OR</Typography>
                <Divider sx={{ width: '400%', marginLeft: '10px' }} />
              </Box>

              {/* Login form inputs */}
              <Grid container spacing={2}>
                {' '}
                {/* Adding spacing between grid items */}
                {loginDataArray(handleClickShowPassword, handleMouseDownPassword, showPassword)?.map((item: any) => (
                  <Grid item xs={12} md={item?.md} key={item?.id}>
                    <item.component {...item?.componentProps} size={'small'} />
                  </Grid>
                ))}
              </Grid>

              {/* Remember me checkbox and forgot password link */}
              <Grid container spacing={4} alignItems='center' justifyContent='space-between'>
                <Grid item xs={7}>
                  <RHFCheckbox name='rememberMe' label='Remember me' />
                </Grid>
                <Grid item xs={5} mt={2}>
                  <Link href='newPassword' passHref>
                    <Typography
                      component='a'
                      sx={{
                        color: theme.palette.common.black,
                        fontWeight: '500',
                        textDecoration: 'underline',
                        mt: '4px'
                      }}
                    >
                      Forgot password?
                    </Typography>
                  </Link>
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


                // onClick={() => router.push('/pages/register')}

                // loading={isLoading}
              >
                Sign In
              </Button>
            </Box>
          </FormProvider>
        </CardContent>
      </Card>
    </Box>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default LoginPage
