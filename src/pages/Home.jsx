import { NavLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { primaryText, accentText, outlinedBtn, containedBtn } from 'shared/BaseStyles';
import Photo from 'img/photo.webp';

export const Home = () => {
  const cvLink =
    'https://drive.google.com/file/d/1djD_kJykntesXbu4bwGBdBsOlCYi7H8E/view?usp=share_link';

  return (
    <Box sx={{ display: 'flex', gap: '56px' }}>
      <Box sx={{ maxWidth: '535px' }}>
        <img src={Photo} alt="A man in glasses" width="535" height="609" />
      </Box>

      <Box sx={{ py: '60px' }}>
        <Typography sx={{ ...primaryText, fontSize: '36px' }}>Hi there!</Typography>
        <Typography sx={{ ...primaryText, mb: '36px' }}>Welcome to my portfolio</Typography>
        <Typography component="h1" sx={{ ...primaryText, mb: '48px' }}>
          My name is{' '}
          <Typography component="span" sx={accentText}>
            Yura
          </Typography>
          , <br />
          I'm a{' '}
          <Typography component="span" sx={accentText}>
            Frontend Developer
          </Typography>
        </Typography>

        <Box sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button variant="outlined" component="a" href={cvLink} target="_blank" sx={outlinedBtn}>
            Get CV <OpenInNewIcon sx={{ ml: '8px' }} />
          </Button>

          <Button variant="contained" component={NavLink} to="/contacts" sx={containedBtn}>
            Hire me
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
