import { TableCell, TableRow, styled, tableCellClasses } from '@mui/material';

// import { border, borderRadius } from '@mui/system';

// ----------------------------------------------------------------------
// STYLED COMPONENTS
export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses?.head}`]: {
    color: '#050D15',
    fontSize: '14px',
    lineHeight: '18px',
    borderBottom: '1px solid  #E9EBF2',
    borderTop: '1px solid  #E9EBF2',
    backgroundColor: '#ffff',
    fontWeight: 600,
    backgroundImage: 'unset',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    zIndex: '1',
    '&:first-of-type': {
      borderLeft: `1px solid  #E9EBF2`,
    },
    '&:last-of-type': {
      borderRight: `1px solid  #E9EBF2}`,
    },
    borderRadius:'16px'
  },
  [`&.${tableCellClasses?.root}`]: {
    boxShadow: 'unset !important',

  },

  [`&.${tableCellClasses?.body}`]: {
    fontSize: '13px',
    color: '#050D15',
    backgroundColor: '#ffff',
    lineHeight: '18px',
    fontFamily: theme?.typography?.fontFamily,
    fontWeight: 500,
    whiteSpace: 'pre-wrap',
    borderBottom: `1px solid #E9EBF2`,
    '&:first-of-type': {
      borderLeft: `1px solid #E9EBF2`,
    },
    '&:last-of-type': {
      borderRight: `1px solid #E9EBF2`,
    },

  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
  border: `1px solid  #E9EBF2`,
  borderRadius:'15px',

  // borderRadius:'8px',
}));

export const styles = {
  cell: (align: string) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: align || 'left',
  }),
};
