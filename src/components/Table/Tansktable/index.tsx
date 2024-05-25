import React from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Grid,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import useTanstackTable from './useTanstackTable';

// import { DownIcon, UpIcon } from '@/assets/icons';
import {
  StyledTableCell,
  StyledTableRow,
  styles,
} from './TanstackTable.styles';
import { flexRender } from '@tanstack/react-table';
import UpIcon from 'src/assets/icons/shared/up-icon';
import DownIcon from 'src/assets/icons/shared/down-icon';
import ApiErrorState from 'src/components/ApiErrorState';
import NoData from 'src/components/NoData';
import CustomPagination from 'src/components/CustomPagination';
import SkeletonTable from 'src/components/Skeletons/SkeletonTable';

// import NoData from '@/components/NoData';
// import {  } from '@/assets/images';
// import SkeletonTable from '@/components/Skeletons/SkeletonTable';
// import CustomPagination from '@/components/CustomPagination';
// import ApiErrorState from '@/components/ApiErrorState';

const TanstackTable = (props: any) => {
  const {
    columns = [],
    data = [],
    rootSX,
    showSerialNo = false,
    isLoading = false,
    isFetching = false,
    isError = false,
    isSuccess = true,
    isPagination,
    count,
    pageLimit,
    rowsPerPageOptions,
    currentPage,
    totalRecords,
    onPageChange,
    setPage,
    setPageLimit,
    paginationPaddingX = 2,
    noDataTableText = 'No data available',
    noDataTableImage = "/images/avatars/associations-image.png",
  } = props;

  const { table } = useTanstackTable(data, columns, showSerialNo);

  const memoizedTable = React.useMemo(() => table, []);

  if (isLoading || isFetching) return <SkeletonTable />;

  return (
    <>
      <Grid container sx={{ position: 'relative', ...rootSX }}>
        <Grid item xs={12}>
          <TableContainer sx={{border:'1px solid #E9EBF2',borderRadius:'15px'}} >
            <Table>
              <TableHead>
                {memoizedTable?.getHeaderGroups()?.map((headerGroup: any) => (
                  <TableRow key={uuidv4()}>
                    {headerGroup?.headers?.map((header: any) => (
                      <StyledTableCell key={uuidv4()}>
                        <Box
                          sx={styles?.cell(header?.column?.columnDef?.align)}
                        >
                          {header?.isPlaceholder
                            ? null
                            : flexRender(
                                header?.column?.columnDef?.header,
                                header?.getContext(),
                              )}
                          {header?.column?.columnDef?.isSortable && (
                            <Box
                              display={'flex'}
                              flexDirection={'column'}
                              marginLeft={'4px'}
                              gap={'2px'}
                              {...{
                                onClick:
                                  header?.column?.getToggleSortingHandler(),
                              }}
                            >
                              <UpIcon
                                color={
                                  (header?.column?.getIsSorted() as string) ===
                                  'desc'
                                    ? 'black'
                                    : ''
                                }
                              />
                              <DownIcon
                                color={
                                  (header?.column?.getIsSorted() as string) ===
                                  'asc'
                                    ? 'black'
                                    : ''
                                }
                              />
                            </Box>
                          )}
                        </Box>
                      </StyledTableCell>
                    ))}
                  </TableRow>
                ))}
              </TableHead>

              <TableBody>
                {isSuccess &&
                  !isError &&
                  memoizedTable
                    ?.getCoreRowModel()
                    ?.rows?.map((row) => (
                      <StyledTableRow key={uuidv4()}>
                        {row
                          ?.getVisibleCells()
                          ?.map((cell) => (
                            <StyledTableCell key={uuidv4()}>
                              {flexRender(
                                cell?.column?.columnDef?.cell,
                                cell?.getContext(),
                              )}
                            </StyledTableCell>
                          ))}
                      </StyledTableRow>
                    ))}
              </TableBody>
            </Table>
            {isError ? (
              <ApiErrorState />
            ) : (
              !!!memoizedTable?.getCoreRowModel()?.rows?.length &&
              isSuccess && (
                <NoData
                  image={noDataTableImage}
                  message={noDataTableText}
                  height="40vh"
                />
              )
            )}
          </TableContainer>
        </Grid>
      </Grid>
      {isPagination && (
        <Box px={paginationPaddingX}>
          <br />
          <br />
          <CustomPagination
            count={count}
            pageLimit={pageLimit}
            rowsPerPageOptions={rowsPerPageOptions}
            currentPage={currentPage}
            totalRecords={totalRecords}
            onPageChange={(page: any) => onPageChange?.(page)}
            setPage={setPage}
            setPageLimit={setPageLimit}
          />
        </Box>
      )}
    </>
  );
};

export default TanstackTable;
