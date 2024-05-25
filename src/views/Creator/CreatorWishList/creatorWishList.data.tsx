// import RHFTextField from "src/components/ReactHookForm";

import RHFImageUpload from "src/components/ReactHookForm/RFHImageUploader";
import RHFAutocomplete from "src/components/ReactHookForm/RHFAuroComplete";
import RHFField from "src/components/ReactHookForm/RHFField";

import * as Yup from 'yup'

const optionsVisiblename = ['name1', 'name2'];
export const addpaymentMethodValidationSchema = Yup.object().shape({
  nameOfUser: Yup?.string()?.trim()?.required('Required field'),
  emailOfUser:Yup?.string()?.trim()?.required('Required field'),
  paymentMethod:Yup?.string()?.trim()?.required('Required field'),
   qrcode:Yup?.string(),
})
export const addpaymentMethodDefaultValues =  {
  nameOfUser:  null,
    emailOfUser:  null,
    paymentMethod:'',
     qrcode:'',

}
export const addpaymentMethodFields = [
  {
    id: 1,
    componentProps: {
      name: 'nameOfUser',
      label: 'name',
      placeholder: 'Enter name',
    },
    component: RHFField,
    md:6,
  },
  {
    id: 2,
    componentProps: {
      name: 'emailOfUser',
      label: 'Enter email or phone number',
      placeholder: 'Enter email or phone number',
    },
    component: RHFField,
    md:6,
  },
  {
    id: 3,
    componentProps: {
      name: 'paymentMethod',


      // label: 'Payment Method',
      options: optionsVisiblename,
      placeholder: 'Select',
    },
    component: RHFAutocomplete,
    md:6,
  },
  {
    id: 4,
    componentProps: {
      name: 'qrcode',
      label: 'Upload or QR Code',
      placeholder: 'Enter Minimum Amount',
    },
    component: RHFImageUpload,
    md:6,
  },

];


 export const AddWishListData = () => [
  {
    id: 1,
    price: '100',
    flowerName: 'rose',
    imageUrl: '/images/avatars/image 1525.png',
  },
  {
    id: 2,
    price: '100',
    flowerName: 'rose',
    imageUrl: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286',
  },

  // {
  //   id: 3,
  //   price: '100',
  //   flowerName: 'rose',
  //   imageUrl: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286',
  // }
];

export const data = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    payment_method: "Credit Card",
    qr_code: "/images/avatars/image 1560.png"
  },
  ];
