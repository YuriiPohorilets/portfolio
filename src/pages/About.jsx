import { Box, Typography } from '@mui/material';
import { Title } from 'shared/Title';
import { mainText } from 'shared/BaseStyles';
import { aboutInfo } from 'data/about';

export const About = () => {
  const { intro, main, conclusion, hardSkills } = aboutInfo;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: '80px',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ flexBasis: '50%' }}>
          <Title>About me</Title>
          <Typography
            sx={{
              mb: '18px',
              ...mainText,
            }}
          >
            {intro}
          </Typography>
          <Typography
            sx={{
              mb: '18px',
              ...mainText,
            }}
          >
            {main}
          </Typography>
          <Typography
            sx={{
              ...mainText,
            }}
          >
            {conclusion}
          </Typography>
        </Box>

        <Box sx={{ flexBasis: '35%' }}>
          <Title>Hard skills</Title>
          <Box component="ul" sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {hardSkills.map(skill => {
              return (
                <Box
                  key={skill}
                  component="li"
                  sx={{
                    p: '8px 16px',
                    fontSize: '14px',
                    border: '1px solid',
                    borderColor: 'primary.accent',
                    borderRadius: '7px',
                  }}
                >
                  {skill}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};
