import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6',
    },

    secondary: {
      main: '#f97316',
    },

    background: {
      default: '#0b0f19', // page background
      paper: '#111827', // cards
    },

    text: {
      primary: '#e5e7eb', // main text
      secondary: '#9ca3af', // muted text
    },
  },

  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',

    h4: {
      fontWeight: 700,
      marginBottom: 40,
      marginTop: 40,
    },
  },

  components: {
    //Paper (cards)
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#111827',
          borderRadius: 12,
        },
      },
    },

    // DatePicker / TextField fix
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#e5e7eb',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#374151',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#3b82f6',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#3b82f6',
          },
        },
        input: {
          color: '#e5e7eb',
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#9ca3af',
        },
      },
    },

    //Buttons
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
})
