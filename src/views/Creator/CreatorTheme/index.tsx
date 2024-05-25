// ** MUI Imports
import Card from '@mui/material/Card'

import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { Box, Typography } from '@mui/material'

const themeImages = [
  {
    id: 1,
    image: '/images/pages/CreatorPage/black.png'
  },
  {
    id: 2,
    image: '/images/pages/CreatorPage/white-pink.png'
  },
  {
    id: 3,
    image: '/images/pages/CreatorPage/grey.png'
  },
  {
    id: 4,
    image: '/images/pages/CreatorPage/orange.png'
  }
]
const CreatorTheme = () => {
  // const theme = useTheme()

  return (
    <Card>
      <CardContent>
        <Box mb={1}>
          <Typography variant='h2'>Theme</Typography>
        </Box>
        <Grid container spacing={3}>
          {themeImages.map(image => (
            <Grid item key={image.id} xs={6} sm={3} md={2} lg={3}>
              <img src={image.image} alt={`Theme ${image.id}`} style={{ width: '100%' }} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CreatorTheme
