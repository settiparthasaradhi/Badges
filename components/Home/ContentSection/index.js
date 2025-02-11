import { Typography, Box } from '@mui/material';

export default function ContentSection({ title, children }) {
  return (
    <Box sx={{ 
      marginRight: { xs: 0, md: '1232px' },
      marginTop: '296px',
      alignSelf: 'flex-start'
    }}>
      <Typography 
        variant="subtitle2" 
        sx={{ 
          color: '#e75b38',
          fontSize: '0.625rem',
          fontWeight: 500,
          fontFamily: "'Neue Montreal', sans-serif",
          ml: 8.75
        }}
      >
        {title}
      </Typography>
      <Typography 
        variant="h6" 
        sx={{ 
          color: '#cecece',
          mt: 0.875,
          ml: 2.5,
          fontWeight: 700,
          fontFamily: "'Neue Montreal', sans-serif",
          lineHeight: 1.5
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}