import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#30475E',
      darker: '#222831',
      accent: '#AA8B56',
    },
    neutral: {
      main: '#DDDDDD',
    },
    focus: {
      accent: 'rgba(170, 139, 86, 0.25)',
      darker: 'rgba(34, 40, 49, 0.5)',
    },
  },
  typography: {
    fontFamily: ['Comfortaa', 'Poppins', 'sans-serif'].join(','),
  },
});
