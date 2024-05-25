// ** Icon imports
// import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'

// import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import LogoutIcon from '@mui/icons-material/Logout'

// import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'

// import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
// import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
// import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
// import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { UseUser } from 'src/@core/context/userContext'


// import { useRouter } from 'next/router'

const navigation = (): VerticalNavItemsType => {
  const { user } = UseUser()
  const { email, password } = user

  // Dummy validation, replace with real authentication logic
  const isSuperAdmin = email === 'superadmin@example.com' && password === 'superpassword'
  const isCreator = email === 'creator@example.com' && password === 'creatorpassword'


  if (isSuperAdmin) {
    return [
      {
        title: 'Dashboard',
        icon: HomeOutline,
        path: '/dashboard'
      },
      {
        title: 'Reports',
        icon: Table,
        path: '/reports'
      },
      {
        title: 'Settings',
        icon: AccountCogOutline,
        path: '/account-settings'
      },
      {
        title: 'Log out',
        icon: LogoutIcon,
        path: '/log-out'
      },

    ]
  } else if (isCreator) {
    return [
      {
        title: 'Home',
        icon: HomeOutline,
        path: '/pages/Home'
      },
      {
        title: 'Settings',
        icon: AccountCogOutline,
        path: '/account-settings'
      },
      {
        title: 'Log out',
        icon: LogoutIcon,
        path: '/log-out'
      }
    ]
  } else {
    // Default or unauthorized user navigation
    return [


    ]
  }
}


export default navigation
