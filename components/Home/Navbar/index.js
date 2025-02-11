import Link from 'next/link';
import { AppBar, Toolbar, Typography, Stack, styled } from '@mui/material';

const StyledLink = styled(Link)(({ theme }) => ({
  position: 'relative',
  borderRadius: '6px',
  padding: '8px 16px',
  textDecoration: 'none',
  fontSize: '20px',
  fontWeight: 500,
  color: '#fff',
  fontFamily: "'Neue Montreal', sans-serif",
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'brown',
    borderRadius: '22px'
  }
}));

export default function Navbar() {
  return (
    <AppBar 
      position="absolute" 
      sx={{ 
        backgroundColor: 'transparent', 
        boxShadow: 'none',
        padding: '8px 40px 0'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={7}>
          <StyledLink href="/">Home</StyledLink>
          <StyledLink href="/about">About</StyledLink>
          <StyledLink href="/project">Project</StyledLink>
          <StyledLink href="/contact">Contact</StyledLink>
        </Stack>
        <Typography 
          component={Link}
          href="/"
          sx={{
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 700,
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.2rem'
          }}
        >
          LOGO
        </Typography>
      </Toolbar>
    </AppBar>
  );
}