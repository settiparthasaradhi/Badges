import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const ServiceItem = ({ number, title, color, videoUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        height: '132px',
        width: '105%',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '67px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center the content
        px: 3,
        backgroundColor: 'black',
        marginLeft: '58px',
        marginRight: '58px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content (Number and Title) */}
      <Box
        sx={{
          position: 'static',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '120px', // Gap between number and title
          width: '100%',
          maxWidth: 'calc(100% - 938px)', // Adjusting for both left and right offsets
          marginRight: '550px', // Align 388px from the left
          pointerEvents: 'none', // Ensure the content doesn't interfere with hover
        }}
      >
        {/* Number with Brackets */}
        <Typography
          variant="h2"
          sx={{
            color: isHovered ? 'orange' : color,
            position: 'relative',
            fontFamily: "'Neue Montreal', sans-serif",
            '&::before': {
              content: isHovered ? '"["' : '""', // Add opening bracket on hover
              position: 'absolute',
              left: '-0.5em', // Adjust bracket position
              transition: 'opacity 0.3s ease',
              opacity: isHovered ? 1 : 0, // Fade in/out
            },
            '&::after': {
              content: isHovered ? '"]"' : '""', // Add closing bracket on hover
              position: 'absolute',
              right: '-0.5em', // Adjust bracket position
              transition: 'opacity 0.3s ease',
              opacity: isHovered ? 1 : 0, // Fade in/out
            },
          }}
        >
          {number}
        </Typography>

        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            color: isHovered ? 'orange' : color,
            fontFamily: "'Neue Montreal', sans-serif",
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Video */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            display: isHovered ? 'block' : 'none',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'cover', // Ensure the video covers the entire area
          }}
        >
          <source src="https://cdn.pixabay.com/video/2016/09/13/5058-182666741_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Box>
  );
};

export default ServiceItem;