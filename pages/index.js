import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import BackgroundVideo from '../components/BackgroundVideo';
import ContentSection from '../components/ContentSection';
import ProjectCard from '../components/ProjectCard';
import ServicesPage from '@/components/ServicePage';
export default function Home() {
  return (
    <Box sx={{ color: '#ecf1f0' }}>
      <Navbar />

      <Box sx={{ 
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        position: 'relative'
      }}>
        <BackgroundVideo src='https://v.ftcdn.net/04/28/12/90/700_F_428129004_4PIYoC3aLBqhKiwlFnuDcfQaNGlkXHJR_ST.mp4' />
        
        <ContentSection title="[WHAT WE DO]">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bridges specializes in  
          impactful end-to-end video  
          production, enabling brands 
          and partners to create their 
          best work.
        </ContentSection>
      </Box>

      <Box sx={{ backgroundColor: '#ecf1f0', py: 16,margin:'0px' }}>
        <Typography 
          variant="h1" 
          sx={{ 
            color: 'white',
            fontSize: '140px',
            fontWeight: 500,
            fontFamily: "'Neue Montreal', sans-serif",
            px: 306,
            py: 16.25
          }}
        >
          [OUR WORK]
        </Typography>
        

        <ProjectCard
          title="EDGE AT ARCESIUM"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDUArdgGNoH8Ebn1jrm4Htzfe5HGpMxBHrg&s"
          videoUrl="https://v.ftcdn.net/04/28/12/90/700_F_428129004_4PIYoC3aLBqhKiwlFnuDcfQaNGlkXHJR_ST.mp4"
          description="The campaign centers on real-life stories of women who have turned to Stichting Beschermde Wieg for support, showcasing the essential aid the foundation offers. It brings to light the circumstances"
        />
         <ProjectCard
          title="EDGE AT ARCESIUM"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDUArdgGNoH8Ebn1jrm4Htzfe5HGpMxBHrg&s"
          videoUrl="https://v.ftcdn.net/04/28/12/90/700_F_428129004_4PIYoC3aLBqhKiwlFnuDcfQaNGlkXHJR_ST.mp4"
          description="The campaign centers on real-life stories of women who have turned to Stichting Beschermde Wieg for support, showcasing the essential aid the foundation offers. It brings to light the circumstances"
        />
         <ProjectCard
          title="EDGE AT ARCESIUM"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDUArdgGNoH8Ebn1jrm4Htzfe5HGpMxBHrg&s"
          videoUrl="https://v.ftcdn.net/04/28/12/90/700_F_428129004_4PIYoC3aLBqhKiwlFnuDcfQaNGlkXHJR_ST.mp4"
          description="The campaign centers on real-life stories of women who have turned to Stichting Beschermde Wieg for support, showcasing the essential aid the foundation offers. It brings to light the circumstances"
        />
      </Box>
      <ServicesPage/>
      
    </Box>
  );
}