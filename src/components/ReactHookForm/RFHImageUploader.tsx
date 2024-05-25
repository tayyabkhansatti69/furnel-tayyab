import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Typography, IconButton, InputAdornment, useTheme } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import React, { useRef } from 'react';

// ----------------------------------------------------------------------

export default function RHFImageUpload({ name, required, ...other }: any) {
  const theme = useTheme();
  const { control } = useFormContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // Process the files
      console.log(files);
    } else {
      // Handle the case where files is null or empty
      console.log('No files selected');
    }
  };

  // const handleFileChange = (event: { target: { files: any[]; }; }) => {
  //   const file = event.target.files[0];

  //   // Handle the file (e.g., read QR code)
  //   if (file && file.length > 0) {
  //     // Process the files
  //     console.log(file);
  //   } else {
  //     // Handle the case where files is null or empty
  //     console.log('No files selected');
  //   }
  //   console.log('Uploaded file:', file);
  // };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <TextField
            {...field}
            fullWidth
            required={required}
            variant="outlined"
            error={!!error}
            helperText={
              <Typography component={'span'} sx={{ display: 'block', mt: -1, ml: -1 }}>
                {error?.message}
              </Typography>
            }
            FormHelperTextProps={{
              sx: {
                color: 'black',
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleIconClick}>
                    <PhotoCamera />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& input': {
                color: 'black',
              },
              '& label.Mui-focused': {
                color: 'black',
              },
              borderRadius: '4px',
              '.MuiFilledInput-root': {
                backgroundColor: 'white',
                '&:before': {
                  borderBottom: 'none',
                },
                '&:hover:before': {
                  borderBottom: 'none',
                },
                '&:after': {
                  borderBottom: 'none',
                },
              },
              '.MuiFormHelperText-root': {
                color: 'green',
              },
              '&:hover ': {
                borderColor: `2px solid ${theme.palette.primary.main}`,
              },
              '&.Mui-focused': {
                border: `2px solid ${theme.palette.primary.main}`,
              },
            }}
            {...other}
          />
        </div>
      )}
    />
  );
}
