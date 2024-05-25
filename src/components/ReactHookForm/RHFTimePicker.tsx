// form
import { useFormContext, Controller } from 'react-hook-form';

import { TimePicker } from '@mui/x-date-pickers';
import { Typography } from '@mui/material';
import CustomLabels from '../customLabel1';

// import CustomLabels from '../CustomLabel1';


export default function RHFTimePicker({
  name,
  label,
  required,
  ...other
}: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          {label && <CustomLabels label={label} required={required} />}
          <TimePicker
            {...field}
            {...other}
            slotProps={{
              textField: {
                ...other?.textFieldProps,
                helperText: (
                  <Typography
                    component={'span'}
                    sx={{ display: 'block', mt: -1, ml: -1 }}
                  >
                    {error?.message}
                  </Typography>
                ),
                error: error,
                fullWidth: other?.fullWidth,
                size: other?.size,
              },
            }}
            label={''}
          />
        </>
      )}
    />
  );
}
