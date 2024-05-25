// import { IconButton, InputAdornment } from '@mui/material'

import * as Yup from 'yup'

import RHFTextField from 'src/components/ReactHookForm'

// import { EyeIcon, EyeSlashIcon } from 'src/pages/icons'

export const settingValidationSchema = Yup.object().shape({
    password: Yup?.string()?.required('Required field'),
    confirmPassword: Yup?.string()?.trim()?.required('Required field'),
    newPassword: Yup?.string()?.trim()?.required('Required field'),

  })

export const settingDefaultValues = {

  password: '',
  confirmPassword:'',
  newPassword:''
}

export const settingDataArray = () => {
  return [
    {
      id: 1,
      componentProps: {
        name: 'password',
        label: 'Password',
        fullWidth: true,
        placeholder: 'Enter Password',
        required: true
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
        placeholder: 'Enter Password',
        required: true,

        // type: showPassword ? 'text' : 'password',
        // InputProps: {
        //   endAdornment: (
        //     <InputAdornment position='end'>
        //       <IconButton
        //         aria-label='toggle password visibility'
        //         onClick={() => handleClickShowPassword()}
        //         onMouseDown={handleMouseDownPassword}
        //       >
        //         {!showPassword ? <EyeSlashIcon /> : <EyeIcon />}
        //       </IconButton>
        //     </InputAdornment>
        //   )
        // }
      },
      component: RHFTextField,
      md: 12
    },
    {
      id: 3,
      componentProps: {
        name: 'newPassword',
        label: 'New Password',
        fullWidth: true,
        placeholder: 'Enter New Password',
        required: true
      },
      component: RHFTextField,
      md: 12
    },
  ]
}


export const settingValidationSchemaTwo = Yup.object().shape({
  name: Yup?.string()?.required('Required field'),
  email: Yup?.string()?.trim()?.required('Required field'),

})

export const settingDefaultValuesTwo = {

name: '',
email:''
}

export const settingDataArrayTwo =[
  {
    id: 1,
    componentProps: {
      name: 'name',
      label: 'Name',
      fullWidth: true,
      placeholder: 'Enter Name',
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
      required: true,


    },
    component: RHFTextField,
    md: 12
  }
]

