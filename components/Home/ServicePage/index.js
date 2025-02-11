import React from 'react';
import { Box, Typography, Button, styled } from '@mui/material';
import ServiceItem from './ServiceItem';

// Styled components
const ServicePageContainer = styled(Box)({
  width: "100%",
  minHeight: "1613px", // Changed to minHeight for better responsiveness
  position: 'relative',
  backgroundColor: 'black',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
});

const Header = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 299,
  top: 120,
  display: 'flex',
  flexDirection: 'row', // Changed to row
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2.5),
}));

const HeaderText = styled(Typography)(({ theme }) => ({
  color: '#e75b38',
  fontFamily: 'Neue Montreal',
  fontWeight: 'medium',
}));

const Title = styled(Box)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2.5),
  left: '58px',
  right: '58px',
}));

const TitleText = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontFamily: 'Neue Montreal',
  fontWeight: 'medium',
  fontSize: '180px', // Increased the font size
  flex: 1,
  textAlign: 'center',
  margin: '40px', // Increased the margin
}));

const ButtonWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 655,
  bottom: 40, // Changed to bottom for better positioning
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
}));

const ServicesList = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0px', // Added gap between ServiceItems
  marginTop: '600px', // Adjusted margin to prevent overlap
});

const ServicesPage = () => (
  <ServicePageContainer>
    <Header>
      <HeaderText variant="h6">[OUR SERVICES]</HeaderText>
    </Header>
    <Title sx={{ top: 226 }}>
      <TitleText variant="h1">WHAT WE’RE</TitleText>
    </Title>
    <Title sx={{ top: 381 }}>
      <TitleText variant="h1">GOOD AT</TitleText>
    </Title>

    <ServicesList>
      <ServiceItem   
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDUArdgGNoH8Ebn1jrm4Htzfe5HGpMxBHrg&s"
        videoUrl="https://cdn.pixabay.com/video/2016/09/13/5058-182666741_large.mp4"
        title="CONCEPTING"
        number='1'
      />
      <ServiceItem   
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDUArdgGNoH8Ebn1jrm4Htzfe5HGpMxBHrg&s"
        videoUrl="https://v.ftcdn.net/04/28/12/90/700_F_428129004_4PIYoC3aLBqhKiwlFnuDcfQaNGlkXHJR_ST.mp4"
        title="PRODUCTION"
        number='2'
      />
      <ServiceItem   
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDUArdgGNoH8Ebn1jrm4Htzfe5HGpMxBHrg&s"
        videoUrl="https://v.ftcdn.net/04/28/12/90/700_F_428129004_4PIYoC3aLBqhKiwlFnuDcfQaNGlkXHJR_ST.mp4"
        title="EDITING"
        number='3'
      />
      <ServiceItem   
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDUArdgGNoH8Ebn1jrm4Htzfe5HGpMxBHrg&s"
        videoUrl="https://v.ftcdn.net/04/28/12/90/700_F_428129004_4PIYoC3aLBqhKiwlFnuDcfQaNGlkXHJR_ST.mp4"
        title="MOTION"
        number='4'
      />
        <ServiceItem   
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDUArdgGNoH8Ebn1jrm4Htzfe5HGpMxBHrg&s"
        videoUrl="https://v.ftcdn.net/04/28/12/90/700_F_428129004_4PIYoC3aLBqhKiwlFnuDcfQaNGlkXHJR_ST.mp4"
        title="DISTRIBUTION"
        number='5'
      />
    </ServicesList>

    <ButtonWrapper>
      <Button variant="contained" sx={{ px: 4, py: 2, backgroundColor: 'black', borderRadius: 22 }}>
        <Typography variant="h6" sx={{ color: 'white', fontFamily: 'Neue Montreal', fontWeight: 'medium' }}>
          ABOUT US
        </Typography>
      </Button>
    </ButtonWrapper>
  </ServicePageContainer>
);

export default ServicesPage;