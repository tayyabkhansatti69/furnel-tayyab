import RHFTextField from "src/components/ReactHookForm";
import RHFAutocomplete from "src/components/ReactHookForm/RHFAuroComplete";

import * as Yup from 'yup'

const optionsVisibleShop = ['Shop1', 'shop2'];
export const addWishListValidationSchema = Yup.object().shape({
  shop: Yup?.string()?.trim()?.required('Required field'),
  minAmount:Yup?.string()?.trim()?.required('Required field')
})
export const addWishListDetailsDefaultValues =  {
    shop:  null,
    minAmount:  ''
}
export const addWishListDetailsFields = [

  {
    id: 2,
    componentProps: {
      name: 'shop',
      label: 'Shop',
      options: optionsVisibleShop,
      placeholder: 'Select',
    },
    component: RHFAutocomplete,
  },
  {
    id: 3,
    componentProps: {
      name: 'minAmount',
      label: 'Minimum amount',
      placeholder: 'Enter Minimum Amount',
    },
    component: RHFTextField,
  },

];
