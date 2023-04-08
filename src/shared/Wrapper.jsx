import { Box } from '@mui/material';

export const Wrapper = ({ children }) => {
  return (
    <Box as="section" sx={{ py: '60px' }}>
      {children}
    </Box>
  );
};
