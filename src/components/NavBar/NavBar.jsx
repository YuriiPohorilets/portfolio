import { NavLink } from 'react-router-dom';
import { AppBar, List, ListItem } from '@mui/material';
import { Container } from 'shared/Container';
import { routesList } from 'data/routesList';

export const NavBar = () => {
  return (
    <AppBar sx={{ position: 'static', py: '15px', bgcolor: 'primary.darker' }}>
      <Container>
        <List component="nav" sx={{ display: 'flex', alignItems: 'center', gap: '50px', p: 0 }}>
          {routesList.map(({ name, path }) => {
            return (
              <ListItem
                key={name}
                as={NavLink}
                to={path}
                sx={{
                  '&:hover': { color: 'primary.accent' },
                  '&.active': { color: 'primary.accent' },
                  p: 0,
                  fontFamily: 'Poppins',
                  fontWeight: 300,
                  fontSize: '20px',
                  lineHeight: '30px',
                  color: 'neutral.main',
                }}
              >
                {name}
              </ListItem>
            );
          })}
        </List>
      </Container>
    </AppBar>
  );
};
