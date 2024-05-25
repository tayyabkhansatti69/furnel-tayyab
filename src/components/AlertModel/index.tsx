import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  useTheme,
} from '@mui/material';
import { checkModalTypeForImage } from './AlertModals.data';

import { LoadingButton } from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';

export const AlertModals = ({
  message,
  type,
  open,
  handleClose,
  handleCancelBtn = handleClose,
  handleSubmitBtn,
  cancelBtnText = 'No',
  submitBtnText = 'Yes',
  typeImage,
  disableCancelBtn,
  loading,
  footer = true,
}: any) => {
  const theme =useTheme()

  return (
    <Dialog
      open={open}
      onClose={() => handleClose?.()}
      fullWidth
      maxWidth={'sm'}
    >
      <DialogTitle>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          gap={1}
          flexWrap={'wrap'}
        >
          <Box display={'flex'} alignItems={'center'} gap={1} flexWrap={'wrap'}>
            {checkModalTypeForImage(type) ?? typeImage}
            <Typography variant="h3" textTransform={'capitalize'} color={theme?.palette?.primary?.main}>
              {type}
            </Typography>
          </Box>
          <Box sx={{ cursor: 'pointer' }} onClick={() => handleClose?.()}>
            <CloseIcon />
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent sx={{justifyContent:'center',display:'flex'}}>
        <Typography variant="body1" sx={{ marginTop: '1rem' }}>
          {message}{' '}
        </Typography>
      </DialogContent>
      {footer && (
        <DialogActions
          sx={{ '&.MuiDialogActions-root': { padding: '1.5rem !important' } }}
        >
          <LoadingButton
          fullWidth
            variant="outlined"
            color="secondary"
            onClick={() => handleCancelBtn?.()}
            disabled={disableCancelBtn}
          >
            {cancelBtnText}
          </LoadingButton>
          <LoadingButton
          fullWidth
            variant="contained"
            onClick={handleSubmitBtn}
            loading={loading}
          >
            {submitBtnText}
          </LoadingButton>
        </DialogActions>
      )}
    </Dialog>
  );
};
