export const mainText = {
  lineHeight: 1.85,
  fontSize: '18px',
};

export const primaryText = {
  fontWeight: '300',
  fontSize: '26px',
};

export const accentText = {
  fontFamily: 'Poppins',
  fontWeight: '700',
  fontSize: '36px',
  color: 'primary.accent',
};

export const outlinedBtn = {
  '&:hover': { bgcolor: 'focus.accent', borderColor: 'primary.accent' },
  p: '7px 48px',
  flex: '1 0 auto',
  fontFamily: 'Poppins',
  fontSize: '24px',
  textTransform: 'none',
  lineHeight: 1.44,
  color: 'neutral.main',
  borderRadius: '8px',
  borderColor: 'primary.accent',
};

export const containedBtn = {
  '&:hover': { bgcolor: 'focus.darker', color: 'primary.accent' },
  p: '7px 48px',
  flex: '1 0 auto',
  fontFamily: 'Poppins',
  fontSize: '24px',
  textTransform: 'none',
  lineHeight: 1.44,
  color: 'primary.darker',
  borderRadius: '8px',
  bgcolor: 'primary.accent',
};
