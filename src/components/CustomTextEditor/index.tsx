import React from 'react'
import dynamic from 'next/dynamic'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'

import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false
})

const CustomTextEditor = ({ value, onChange, style, toolbar, ...other }: any) => {
  const theme: any = useTheme()
  const modules = {
    toolbar: toolbar || {
      container: [
        [
          { size: ['small', false, 'large', 'huge'] },
          { align: [] },
          'color',
          'bold',
          'italic',
          'underline',
          'strike',
          'background',
          { list: 'bullet' },
          { list: 'ordered' },
          'link',
          'code-block',
          'blockquote'
        ]
      ]
    }
  }

  return (
    <Box
      sx={{
        position: 'relative',
        background:'white',
        radius: '10px',
        border: other?.error ? `1px solid ${theme?.palette?.error?.main}` : `1px solid rgba(99, 99, 99, 0.19)`,
        borderRadius: '8px', // Set border-radius
        overflow: 'hidden',
        '&:hover': {
          border: `1px solid ${theme.palette.primary.main}` // Change border color on hover to primary color
        },
        '& .ql-toolbar.ql-snow': {
          display: 'none' // Hide toolbar styles
        },
        '& .ql-container.ql-snow': {
          border: 'none'
        }
      }}
    >
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        style={{ position: 'relative', ...style }}
        {...other}
      />
    </Box>
  )
}

export default CustomTextEditor
