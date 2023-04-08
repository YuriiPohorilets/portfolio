import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { NavBar } from 'components/NavBar/NavBar';
import { Wrapper } from 'shared/Wrapper';
import { Container } from 'shared/Container';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Box component="main">
        <Wrapper>
          <Container>
            <Suspense>
              <Outlet />
            </Suspense>
          </Container>
        </Wrapper>
      </Box>
    </>
  );
};
