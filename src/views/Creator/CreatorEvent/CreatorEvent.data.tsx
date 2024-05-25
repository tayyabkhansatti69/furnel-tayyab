import * as Yup from 'yup'

import RHFTextField from 'src/components/ReactHookForm'
import RHFDatePicker from 'src/components/ReactHookForm/RHFDatePicker'
import RHFEditor from 'src/components/ReactHookForm/RHFEditor'
import RHFTimePicker from 'src/components/ReactHookForm/RHFTimePicker'

export const EventValidationSchema = Yup.object().shape({
  name: Yup?.string()?.trim()?.required('Required field')
})

export const EventDefaultValues = {
  name: ''
}

export const EventDataArray = () => {
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
      component: RHFTextField,
      md: 3
    },
    {
      id:2,
      componentProps: {
        name: 'time',
        label: 'Time',
        fullWidth: true,
        select: true,
      },
      component: RHFTimePicker,
      md: 3,
    },

    {
      id: 3,
      componentProps: {
        name: 'dateofBirth',
        placeholder: 'Date of Birth',
        label: 'Date of Birth',
        fullWidth: true,
        select: true
      },

      component: RHFDatePicker,
      md: 3
    },


    {
      id: 4,
      componentProps: {
        name: 'location',
        label: 'Location',
        fullWidth: true,
        placeholder: 'Enter Location',
        required: true
      },
      component: RHFTextField,
      md: 3
    },
    {
      id: 5,
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
