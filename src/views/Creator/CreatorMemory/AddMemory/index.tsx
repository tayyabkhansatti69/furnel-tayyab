import React, { useState, ChangeEvent } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  Grid,
  Box
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { styled } from '@mui/material/styles';

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

export const AddMemoryModal = (props: any) => {
  const methods = useForm();
  const { open, onClose } = props;
  const { control, setValue } = methods;
  const [selectedOption, setSelectedOption] = useState('photo');
  const [fileSrc, setFileSrc] = useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    setValue('option', event.target.value);
    setFileSrc('');
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
  }

  const imgSrc = '/images/avatars/9.png';

  const onSubmit = (data: any) => {
    console.log(data);
    onClose();
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <DialogTitle>Add Memory</DialogTitle>
        <DialogContent>
          <Controller
            name='option'
            control={control}
            defaultValue='photo'
            render={({ field }) => (
              <RadioGroup
                {...field}
                row
                onChange={handleOptionChange}
                value={selectedOption}
                sx={{ justifyContent: 'center' }}
              >
                <FormControlLabel value='photo' control={<Radio />} label='Photo' />
                <FormControlLabel value='video' control={<Radio />} label='Video' />
              </RadioGroup>
            )}
          />
          <Controller
            name='file'
            control={control}
            render={() => (
              <Grid item xs={12} md={6} lg={5} sx={{ marginTop: 0, marginBottom: 0, mx: 'auto' }}>
                <Box sx={{ width: '100%', height: '100%' }}>
                  <label htmlFor='memory-upload-file'>
                    {selectedOption === 'photo' ? (
                      fileSrc ? (
                        <ImgStyled src={fileSrc} alt='Upload Preview' />
                      ) : (
                        <ImgStyled src={imgSrc} alt='Upload Preview' />
                      )
                    ) : fileSrc ? (
                      <VideoStyled src={fileSrc} />
                    ) : (
                      <ImgStyled src={imgSrc} alt='Upload Preview' />
                    )}
                  </label>
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept={selectedOption === 'photo' ? 'image/*' : 'video/*'}
                    id='memory-upload-file'
                  />
                </Box>
              </Grid>
            )}
          />
          <Controller
            name='description'
            control={control}
            render={({ field }) => (
              <TextField {...field} label='Description' fullWidth multiline rows={4} margin='normal' />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type='submit' variant='contained' color='primary'>Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default AddMemoryModal;
