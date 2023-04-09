import { List, ListItem, ListItemButton } from '@mui/material';
import { contacts } from 'data/contacts';

export const SocialList = () => {
  return (
    <List sx={{ display: 'flex', gap: '16px' }}>
      {contacts.links.map(({ icon, path }) => {
        return (
          <ListItem
            key={path}
            sx={{
              '&:hover': {
                color: 'primary.accent',
                bgcolor: 'primary.darker',
                borderRadius: '8px',
              },
              p: '0',
              width: '70px',
              height: '70px',
              color: 'neutral.main',
            }}
          >
            <ListItemButton
              component="a"
              href={path}
              target="_blank"
              sx={{
                p: '8px',
                color: 'inherit',
              }}
            >
              {icon}
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
