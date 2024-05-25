// form
import { useFormContext, Controller } from 'react-hook-form'

// @mui
import { DatePicker } from '@mui/x-date-pickers'
import { Typography } from '@mui/material'

// import CustomLabels from '../CustomLabels1'

import { DateRangePickerIcon } from 'src/assets/icons'
import CustomLabels from '../customLabel1'

// import { DateRangePickerIcon } from '@/assets/icons'

// ----------------------------------------------------------------------

export default function RHFDatePicker({ name, label, required, openPickerIcon = DateRangePickerIcon, ...other }: any) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          {label && <CustomLabels label={label} required={required} />}
          <DatePicker
            {...field}
            {...other}
            slots={{
              openPickerIcon: openPickerIcon
            }}
            slotProps={{
              textField: {
                ...other?.textFieldProps,
                helperText: (
                  <Typography component={'span'} sx={{ display: 'block', mt: -1, ml: -1 }}>
                    {error?.message}
                  </Typography>
                ),
                error: error,
                fullWidth: other?.fullWidth,
                size: other?.size,
                label: ''
              }
            }}
            label={label}
          />
        </>
      )}
    />
  )
}
