import { Typography, Card, CardActions, CardContent, CardMedia, Link, Box } from '@mui/material';

export const ProjectsItem = ({
  title,
  type,
  img,
  skillSet,
  description,
  sourceCode,
  livePageUrl,
}) => {
  return (
    <>
      <Card
        sx={{
          flexBasis: '300px',
          bgcolor: 'transparent',
          boxShadow: 'none',
          display: 'flex',
          minHeight: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography
            component="h3"
            sx={{ mb: '8px', fontSize: '24px', fontWeight: 300, color: 'neutral.main' }}
          >
            {title}
          </Typography>

          <Box sx={{ position: 'relative' }}>
            <CardMedia
              sx={{ mb: '8px', height: '180px', borderRadius: '8px' }}
              image={img}
              src={img}
              title={description}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 16,
                left: 0,
                p: '8px 16px',
                color: 'neutral.main',
                fontFamily: 'Poppins',
                fontSize: '12px',
                bgcolor: 'focus.darker',
                borderBottomRightRadius: '7px',
                borderTopRightRadius: '7px',
              }}
            >
              {type}
            </Box>
          </Box>

          <CardContent
            sx={{
              mb: '16px',
              p: 0,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            {skillSet.map(skill => {
              return (
                <Box
                  key={skill}
                  sx={{
                    p: '7px 14px',
                    fontSize: '12px',
                    color: 'neutral.main',
                    border: '1px solid',
                    borderColor: 'primary.accent',
                    borderRadius: '7px',
                  }}
                >
                  {skill}
                </Box>
              );
            })}
          </CardContent>

          <CardContent sx={{ '&:last-child': { p: 0 }, mb: '32px', p: 0 }}>
            <Typography
              sx={{ color: 'neutral.main', fontWeight: 300, fontSize: '14px', flexGrow: 1 }}
            >
              {description}
            </Typography>
          </CardContent>
        </Box>

        <CardActions sx={{ p: 0 }}>
          <Link
            href={sourceCode}
            target="_blank"
            sx={{
              '&:hover': { color: 'primary.accent' },
              mr: '16px',
              color: 'neutral.main',
              textDecoration: 'underline',
            }}
          >
            View source
          </Link>
          <Link
            href={livePageUrl}
            target="_blank"
            sx={{
              '&:hover': { color: 'primary.accent' },
              color: 'neutral.main',
              textDecoration: 'underline',
            }}
          >
            Visit the site
          </Link>
        </CardActions>
      </Card>
    </>
  );
};
