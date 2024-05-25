import React, { useState, ChangeEvent } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,

  // Typography,

  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  Grid,
  Box
} from '@mui/material';
import { useForm,  Controller } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import { AlertModals } from '../AlertModel';
import { LiveModals } from '../LiveModel';
import { ShareLinkModal } from '../ShareLinkModel';

interface AddMemoryModalProps {
  open: boolean;
  onClose: () => void;
}

const ImgStyled = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}));

const VideoStyled = styled('video')(({ theme }) => ({
  width: '100%',
  height: '100%',
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius,
  controls: true
}));

const MemoryModal: React.FC<AddMemoryModalProps> = ({ open, onClose, }) => {
  const methods = useForm();
  const { handleSubmit, control, setValue } = methods;
  const [selectedOption, setSelectedOption] = useState('photo');
  const [fileSrc, setFileSrc] = useState<string>('');
  const [openSaveeModel, setOpenSaveModel] = useState(false);
  const [live,setLive]=React.useState(false);
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    setValue('option', event.target.value);
    setFileSrc('');
  };

  const [openShareLink, setopenShareLink] = React.useState(false)

  // const handleOpen = () => setopenShareLink(true)

  const handleClose = () => {
    setopenShareLink(false)

  }


  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const { files } = event.target;
    if (files && files.length !== 0) {
      const file = files[0];
      setValue('file', file);
      reader.onload = () => setFileSrc(reader.result as string);
      reader.readAsDataURL(file);
    }
  };
  const [imgSrc, setImgSrc] = useState<string>('/images/avatars/9.png')

  const onSubmit = (data: any) => {
    console.log(data,);
    setOpenSaveModel?.(true);

    onClose();

  };
const handleSave=()=>{
console.log("yes updated")

  //  setOpenSaveModel?.(false);
setLive?.(true);
handleSaveClose?.();
}

const hanldeLive=()=>{
  setopenShareLink?.(true);
  hanldeLiveClose?.();

}
const hanldeLiveClose=()=>{
  setLive?.(false);
}

const handleSaveClose=()=>{
  setOpenSaveModel?.(false);

}
setImgSrc("/")

  return (
    <>
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Update Memory</DialogTitle>
      {/* <FormProvider {...methods}> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Controller
              name="option"
              control={control}
              defaultValue="photo"
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  row
                  onChange={handleOptionChange}
                  value={selectedOption}
                  sx={{ justifyContent: 'center' }}
                >
                  <FormControlLabel
                    value="photo"
                    control={<Radio />}
                    label="Photo"
                  />
                  <FormControlLabel
                    value="video"
                    control={<Radio />}
                    label="Video"
                  />
                </RadioGroup>
              )}
            />
            <Controller
              name="file"
              control={control}
              render={() => (
                <Grid item xs={12} md={6} lg={5} sx={{ marginTop: 0, marginBottom: 0, mx: 'auto' }}>
                  <Box sx={{ width: '100%', height: '100%' }}>
                    <label htmlFor="memory-upload-file">
                      {selectedOption === 'photo' ? (
                        fileSrc ? <ImgStyled src={fileSrc} alt="Upload Preview" /> : <ImgStyled src={imgSrc} alt="Upload Preview" />
                      ) : (
                        fileSrc ? <VideoStyled src={fileSrc} /> : <ImgStyled src={imgSrc} alt="Upload Preview" />
                      )}
                    </label>
                    <input
                      hidden
                      type="file"
                      onChange={onChange}
                      accept={selectedOption === 'photo' ? 'image/*' : 'video/*'}
                      id="memory-upload-file"
                    />
                  </Box>
                </Grid>
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Description"
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                />
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary" >
              Save
            </Button>
          </DialogActions>
        </form>
      {/* </FormProvider> */}
    </Dialog>
     <AlertModals
     type="Save Memory"
     open={openSaveeModel}
     handleClose={handleSaveClose}
     handleSubmitBtn={handleSave}
     message="Are you sure you want to Save your Memory updates?"
   />
        <LiveModals
     type="Make Your Form Live"
     open={live}
     handleClose={hanldeLiveClose}
     handleSubmitBtn={hanldeLive}
     message="Unlock your legacy with a $10 payment. Gain access to tools and resources to honor your loved one's memory. Share with friends and family."
   />
   <ShareLinkModal open={openShareLink} handleClose={handleClose}/>
   </>
  );
};

export default MemoryModal;
