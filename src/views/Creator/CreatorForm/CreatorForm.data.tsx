import * as Yup from 'yup'


import RHFDatePicker from 'src/components/ReactHookForm/RHFDatePicker'
import RHFEditor from 'src/components/ReactHookForm/RHFEditor'
import RHFField from 'src/components/ReactHookForm/RHFField'

export const FormValidationSchema = Yup.object().shape({
  name: Yup?.string()?.trim()?.required('Required field'),

  nameOfUser: Yup?.string()?.trim()?.required('Required field'),
  emailOfUser:Yup?.string()?.trim()?.required('Required field'),
  paymentMethod:Yup?.string()?.trim()?.required('Required field'),
   qrcode:Yup?.string(),
})

export const FormDefaultValues = {
  name: ''
}

export const FormDataArray = () => {
  return [
    {
      id: 1,
      componentProps: {
        name: 'name',
        label: 'name',
        fullWidth: true,
        placeholder: 'Enter Name',
        required: true
      },
      component: RHFField,
      md: 12
    },

    {
      id: 2,
      componentProps: {
        name: 'dateofBirth',
        placeholder: 'Date of Birth',
        label: 'Date of Birth',
        fullWidth: true,
        select: true
      },

      component: RHFDatePicker,
      md: 6
    },

    {
      id: 3,
      componentProps: {
        name: 'dateofDeath',
        label: 'Date of Death',
        fullWidth: true,
        select: true
      },

      component: RHFDatePicker,
      md: 6
    },

    {
      id: 4,
      componentProps: {
        name: 'description',
        label: 'Description',
        fullWidth: true,
        required: true,
        style: { height: '110px' }
      },
      component: RHFEditor,
      md: 12
    }
  ]
}
