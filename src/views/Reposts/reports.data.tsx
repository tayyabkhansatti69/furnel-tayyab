

// import { Typography } from '@mui/material';

// import { truncateText } from 'src/utils/avatarUtils';

export const VENDOR_LISTS_ACTION_CONSTANTS = {
  IMPORT: 'import',
};

export const Reportdata = [
  {
    no: 1,
    userEmail: "John@gmail.com",
    reportAgainst: "John@gmail.com",
    reason: "Incorrect Entry",
    description: "Error or inaccuracies in the entry.",
    hyperlink: "https://www.w3schools.com/"
  },
  {
    no: 2,
    userEmail: "alice@gmail.com",
    reportAgainst: "alice@gmail.com",
    reason: "Inappropriate Content",
    description: "Disrespectful language towards the deceased and their loved ones.",
    hyperlink: "https://www.w3schools.com/"
  },
  {
    no: 3,
    userEmail: "arica@gmail.com",
    reportAgainst: "arica@gmail.com",
    reason: "Spam",
    description: "This memory appears to be spam unrelated to the purpose of the website.",
    hyperlink: "https://www.w3schools.com/"
  },
  {
    no: 4,
    userEmail: "vikrum@gmail.com",
    reportAgainst: "vikrum@gmail.com",
    reason: "Privacy Concerns",
    description: "The comment includes sensitive information that should not be shared.",
    hyperlink: "https://www.w3schools.com/"
  },

  // Add more data as needed
];

export const vendorListsColumnsFunction = () => [
  {
    accessorFn: (row:any) => row?.no,
    id: 'no',
    isSortable: false,
    header: 'No',
    cell: (info:any) => info?.getValue() ?? '---',
  },
  {
    accessorFn: (row:any) => row?.userEmail,
    id: 'userEmail',
    header: 'User\'s Email',
    isSortable: false,
    cell: (info:any) => info?.getValue() ?? '---',
  },
  {
    accessorFn: (row:any) => row?.reportAgainst,
    id: 'reportAgainst',
    header: 'Report Against',
    isSortable: false,
    cell: (info:any) => info?.getValue() ?? '---',
  },
  {
    accessorFn: (row:any) => row?.reason,
    id: 'reason',
    header: 'Reason',
    isSortable: false,
    cell: (info:any) => info?.getValue() ?? '---',
  },
  {
    accessorFn: (row:any) => row?.description,
    id: 'description',
    header: 'Description',
    isSortable: false,
    cell: (info:any) => info?.getValue() ?? '---',
  },
  {
    accessorFn: (row:any) => row?.hyperlink,
    id: 'hyperlink',
    header: 'Hyperlink',
    isSortable: false,
    cell: (info:any) => info?.getValue() ?? '---',

  },
];
