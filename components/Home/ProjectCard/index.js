import { Typography, Box, styled } from '@mui/material';
import { useState } from 'react';

// Parent container to center the ProjectContainer
const ParentContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center', // Center the ProjectContainer horizontally
  alignItems: 'center', // Center the ProjectContainer vertically (optional)
  width: '100%', // Ensure the parent takes full width
  height: '100%', // Ensure the parent takes full height (optional)
});

const ProjectContainer = styled(Box)(({ theme }) => ({
  width: '1315px',
  height: '279px',
  display: 'flex',
  justifyContent: 'space-between', // Align contents within the ProjectContainer
  alignItems: 'center', // Center items vertically within the ProjectContainer
  padding: '0 70px',
  
  marginBottom:'24px',
  gap: '50px', // Equal padding on left and right
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#000',
    borderRadius: '200px',
    '& h3': {
      color: 'white', // Change h3 color to white on hover
    },
    '& .description': {
      color: 'white', // Change description color to white on hover
    },
    '& .media-container': {
      borderRadius: '200px', // Change media container border radius on hover
    }
  }
}));

const MediaContainer = styled(Box)({
  width: '405px', // Fixed width for both image and video
  height: '199px', // Fixed height for both image and video
  overflow: 'hidden', // Ensure no overflow
  position: 'relative', // For positioning video
  borderRadius: '10px', // Default border radius
  transition: 'border-radius 0.3s ease', // Smooth transition for border radius
  '& img, & video': {
    width: '100%', // Ensure media takes full container width
    height: '100%', // Ensure media takes full container height
    objectFit: 'cover', // Maintain aspect ratio and cover the container
    borderRadius: 'inherit' // Inherit border radius from parent
  }
});

export default function ProjectCard({ title, description, imageUrl, videoUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ParentContainer>
      <ProjectContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MediaContainer className="media-container">
          {isHovered ? (
            <video
              autoPlay // Auto-play the video on hover
              muted // Mute the video (required for auto-play in most browsers)
              loop // Loop the video
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={imageUrl} alt="project" />
          )}
        </MediaContainer>
        
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '50px',
            flex: 1, // Take up remaining space
            // Adjust as needed for spacing
          }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              color: 'black',
              fontSize: '70px',
              fontWeight: 500,
              fontFamily: "'Neue Montreal', sans-serif",
              transition: 'color 0.3s ease' // Smooth transition for color change
            }}
          >
            {title}
          </Typography>
          <Box>
            <Typography variant="body2" sx={{ color: '#e75b38' }}>
              [WHAT WE DO]
            </Typography>
            <Typography 
              variant="body2" 
              className="description" // Add a class for targeting
              sx={{ 
                color: 'black',
                marginTop:'37px',
                fontFamily: "'Neue Montreal', sans-serif",
                transition: 'color 0.3s ease' // Smooth transition for color change
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      </ProjectContainer>
    </ParentContainer>
  );
}