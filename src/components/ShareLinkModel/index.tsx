import * as React from 'react';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Grid, useTheme } from '@mui/material';
import { shareLinkDefaultValues, shareLinkFields, shareLinkValidationSchema } from './shareLink.data';
import FormProvider from 'src/components/ReactHookForm/FormProvider';

// import { useRouter } from 'next/router';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';



const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '1px solid #6363633D',
  borderRadius:'4px',
  p: 6,

};

export  const ShareLinkModal=(props:any)=> {

  const {open,handleClose}=props;

  const wishListForm = useForm<any>({
    resolver: yupResolver(shareLinkValidationSchema),
    defaultValues: shareLinkDefaultValues
  })

   const router = useRouter()

   const memoryId = '123';

  const { handleSubmit } = wishListForm
  const onSubmit = async () => {

    router.push({
      pathname: '/',
      query: { id: memoryId },
    });

    handleClose?.()

  }



const theme =useTheme()

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >

<FormProvider methods={wishListForm} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={style}>
        <CloseIcon sx={{ position: 'absolute', top: '8px', right: '8px', cursor: 'pointer' }} onClick={handleClose} />
    <Box sx={{mt:8,mb:12}}>
          <Typography  variant="h3" color={theme?.palette?.primary?.main} sx={{justifyContent:'center',display:'flex',mt:2, mb:2}}>
            Add WishList
          </Typography>

          <Grid container spacing={2} mt={0} mb={0}>
                    {shareLinkFields?.map((item: any) => (
                      <Grid item xs={12} md={item?.md} key={item?.id}>
                        <item.component {...item?.componentProps} size={'small'} />
                      </Grid>
                    ))}
                  </Grid>


        </Box>

        <Button variant='contained' type='submit'
         sx={{ position: 'absolute', bottom: '8px', right: '22px', cursor: 'pointer',mt:2,mb:2 }} >save</Button>
        </Box>


        </FormProvider>

      </Modal>
    </div>
  );
}
export default ShareLinkModal;
