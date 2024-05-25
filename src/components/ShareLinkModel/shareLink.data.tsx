
import RHFTextField from "src/components/ReactHookForm";
import * as Yup from 'yup'


export const shareLinkValidationSchema = Yup.object().shape({
  link: Yup?.string()?.trim()?.required('Required field'),
  password:Yup?.string()?.trim()?.required('Required field')
})
export const shareLinkDefaultValues =  {
    link:  '',
    password:  ''
}
export const shareLinkFields = [

  {
    id: 2,
    componentProps: {
      name: 'link',
      placeholder: 'Enter Your Link',
    },
    component: RHFTextField,
  },
  {
    id: 3,
    componentProps:
    {
      name: 'password',

      // label: 'Minimum amount',

      placeholder: 'Enter Your Password',
    },
    component: RHFTextField,
  },

];
