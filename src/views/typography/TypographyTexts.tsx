// ** MUI Imports
import Card from '@mui/material/Card'

// import { styled } from '@mui/material/styles'

import CardHeader from '@mui/material/CardHeader'

// import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid  from '@mui/material/Grid'

// const DemoGrid = styled(Grid)<GridProps>(({ theme }) => ({
//   [theme.breakpoints.down('sm')]: {
//     paddingTop: `${theme.spacing(1)} !important`
//   }
// }))

const TypographyTexts = () => {
  return (
    <Card>
      <CardHeader title='Themes' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <Grid container spacing={6}></Grid>
      </CardContent>
    </Card>
  )
}

export default TypographyTexts
