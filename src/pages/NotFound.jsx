import { Box, Typography } from '@mui/material';
import NotFoundImg from 'img/notFound.webp';

export const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '60px',
        flex: '1 1 auto',
        flexWrap: 'wrap',
      }}
    >
      <img src={NotFoundImg} alt="man" width={300} />
      <Box sx={{ px: '30px' }}>
        <Typography
          sx={{
            fontSize: '124px',
            fontWeight: 700,
            fontFamily: 'Poppins',
            color: 'primary.accent',
          }}
        >
          404
        </Typography>
        <Typography sx={{ fontSize: '32px' }}>Oops! Page not found</Typography>
      </Box>
    </Box>
  );
};
