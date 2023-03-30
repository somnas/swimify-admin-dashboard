import React from 'react';

// @mui material components
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// Material Dashboard 2 PRO React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// Material Dashboard 2 PRO React examples
import DashboardLayout from 'layouts/containers/DashboardLayout';
import DashboardNavbar from 'layouts/components/navbars/dashboardNavbar/DashboardNavbar';
import Footer from 'layouts/components/Footer';
import ProfileInfoCard from 'examples/Cards/InfoCards/ProfileInfoCard';
import ProfilesList from 'examples/Lists/ProfilesList';
import DefaultProjectCard from 'examples/Cards/ProjectCards/DefaultProjectCard';
import ProfileInfo from './components/profileInfo/ProfileInfo';

// Overview page components
import Header from './components/header/Header';
import PlatformSettings from './components/platformSettings';
import OrganizerInfo from './components/organizerInfo/OrganizerInfo';


/* 

change password

default info:
 - organizer logo
*/

export default function ProfileOverview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={4} mb={2}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <ProfileInfo />
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
              <Divider orientation='vertical' sx={{ ml: -2, mr: 1 }} />
              <OrganizerInfo />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}