import { Box, styled } from '@mui/material';

const VideoContainer = styled(Box)({
  position: 'absolute',
  zIndex: -1,
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  '& video': {
    objectFit: 'cover',
    width: '100%',
    height: '100%'
  }
});

export default function BackgroundVideo({ src }) {
  return (
    <VideoContainer>
      <video autoPlay muted loop src={src} />
    </VideoContainer>
  );
}