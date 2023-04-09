import { GitHub, LinkedIn, Telegram } from '@mui/icons-material';

const iconStyle = {
  fontSize: 50,
};

export const contacts = {
  email: 'pohorilets.y@gmail.com',
  phone: '+38 (095) 888 21 36',
  place: 'Kyiv, Ukraine',
  links: [
    {
      icon: <GitHub sx={{ ...iconStyle }} />,
      path: 'https://github.com/YuriiPohorilets',
    },
    {
      icon: <LinkedIn sx={{ ...iconStyle }} />,
      path: 'https://www.linkedin.com/in/yuriipohorilets/',
    },
    {
      icon: <Telegram sx={{ ...iconStyle }} />,
      path: 'https://t.me/YuraPohorilets',
    },
  ],
};
