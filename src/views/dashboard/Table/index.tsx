import { Box,  Typography } from '@mui/material'
import { Reportdata, vendorListsColumnsFunction } from './table.data'
import TanstackTable from 'src/components/Table/Tansktable'
import { useState } from 'react'
import { PAGINATION } from 'src/configs'
import { LoadingButton } from '@mui/lab'

export const DashboardTable = () => {
  const [page, setPage] = useState(PAGINATION?.CURRENT_PAGE)
  const [pageLimit, setPageLimit] = useState(PAGINATION?.PAGE_LIMIT)
  const vendorListsColumns = vendorListsColumnsFunction()
  const [ChangeTable,setChangeTable]=useState(false);
const handleCreator =()=>{
  setChangeTable(true);
}
const handleUser=()=>{
  setChangeTable(false);
}

  return (
    <>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
        gap={1.5}
        marginTop={10}
        marginBottom={12}
      >
        {ChangeTable &&
        <Typography variant='h2' sx={{ fontWeight: 'bold' }}>

          Creator Details{' '}

        </Typography>
}
{!ChangeTable &&
        <Typography variant='h2' sx={{ fontWeight: 'bold' }}>

          Reports Details{' '}

        </Typography>
}
        <Box>
          <LoadingButton sx={{ mr: '2px' }} variant='outlined' color='secondary' onClick={handleUser}>
            user
          </LoadingButton>
          <LoadingButton variant='contained' onClick={handleCreator}>
            Creator
          </LoadingButton>
        </Box>
      </Box>

      {ChangeTable &&
      <TanstackTable
        data={Reportdata}
        columns={vendorListsColumns}
        isPagination
        setPageLimit={setPageLimit}
        setPage={setPage}

        // currentPage={vendorData?.data?.meta?.page}

         count={page}
         pageLimit={pageLimit}

         // totalRecords={vendorData?.data?.meta?.total}

         onPageChange={(page: any) => setPage(page)}
      />
    }
 {!ChangeTable &&
      <TanstackTable
        data={Reportdata}
        columns={vendorListsColumns}
        isPagination
        setPageLimit={setPageLimit}
        setPage={setPage}

        // currentPage={vendorData?.data?.meta?.page}
        // count={vendorData?.data?.meta?.pages}
        // pageLimit={vendorData?.data?.meta?.limit}
        // totalRecords={vendorData?.data?.meta?.total}
        onPageChange={(page: any) => setPage(page)}
      />
    }
      <Box></Box>
      <Box></Box>
    </>
  )
}
