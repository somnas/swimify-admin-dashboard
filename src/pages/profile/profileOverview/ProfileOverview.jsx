import React from 'react';

// @mui material components
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

// Material Dashboard 2 PRO React components
import MDBox from 'components/MDBox';

// Overview page components
import DashboardLayout from 'layouts/containers/DashboardLayout';
import DashboardNavbar from 'layouts/components/navbars/dashboardNavbar/DashboardNavbar';
import Footer from 'layouts/components/Footer';
import Header from './components/header/Header';
import OrganizerInfo from './components/organizerInfo/OrganizerInfo';
import ProfileInfo from './components/profileInfo/ProfileInfo';

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