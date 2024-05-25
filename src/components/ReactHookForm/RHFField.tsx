import { useFormContext, Controller } from 'react-hook-form'
import {  TextField, Typography, useTheme } from '@mui/material'


// ----------------------------------------------------------------------

export default function RHFField({ name, required, ...other }: any) {
  const theme=useTheme()
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (

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
              }

            }}
            sx={{
              '& input': {
                color: 'black', // Set text color to black
              },

              // border: '1px solid rgba(99, 99, 99, 0.19)',
              '& label.Mui-focused': {
                color: 'black',
              },
              borderRadius:'4px',
              '.MuiFilledInput-root': {
                backgroundColor: 'white',
                '&:before': {
                  borderBottom: 'none'
                },
                '&:hover:before': {
                  borderBottom: 'none'
                },
                '&:after': {
                  borderBottom: 'none'
                }
              },
              '.MuiFormHelperText-root': {
                color: 'green',
              },
              '&:hover ': {
                borderColor: `2px solid ${theme.palette.primary.main}`,

              },
              '&.Mui-focused': {

                border: `2px solid ${theme.palette.primary.main}`
              }
            }}
            {...other}
          />

      )}
    />
  )
}
