import { List, ListItem, Link } from '@mui/material';
import { contacts } from 'data/contacts';

export const ContactsList = () => {
  const { email, phone, place } = contacts;

  const linkStyle = {
    fontSize: '20px',
    p: '0',
    color: 'neutral.main',
  };

  return (
    <List sx={{ mb: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ListItem sx={{ p: '0' }}>
        <Link href="mailto:pohorilets.y@gmail.com" target="_blank" sx={{ ...linkStyle }}>
          {email}
        </Link>
      </ListItem>

      <ListItem sx={{ p: '0' }}>
        <Link component="a" href="tel:+380958882136" target="_blank" sx={{ ...linkStyle }}>
          {phone}
        </Link>
      </ListItem>

      <ListItem sx={{ p: '0' }}>
        <Link component="span" sx={{ ...linkStyle, textDecoration: 'none' }}>
          {place}
        </Link>
      </ListItem>
    </List>
  );
};
