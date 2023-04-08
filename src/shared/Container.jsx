import { Box } from '@mui/material';

export const Container = ({ children }) => {
  return <Box sx={{ m: '0 auto', p: '0 15px', maxWidth: '1080px' }}>{children}</Box>;
};
