import { Typography } from '@mui/material';

export const Title = ({ children }) => {
  return (
    <Typography
      sx={{
        mb: '32px',
        fontFamily: 'Poppins',
        fontWeight: 700,
        fontSize: '36px',
        lineHeight: 1.5,
        color: 'primary.accent',
      }}
    >
      {children}
    </Typography>
  );
};
