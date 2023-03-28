import React from 'react';

import Footer from 'layouts/components/Footer';
import DashboardNavbar from 'layouts/components/navbars/dashboardNavbar/DashboardNavbar';
import DashboardLayout from 'layouts/containers/DashboardLayout';

// @mui material components
import Grid from '@mui/material/Grid';

// Material Dashboard 2 PRO React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDButton from 'components/MDButton';

// EditProduct page components
import ProductImage from './components/ProductImage';
import ProductInfo from './components/ProductInfo';
import Socials from './components/Socials';
import Pricing from './components/Pricing';

export default function EditCompetition() {

    const competitionName = 'SM Linköping 2022';

    return (
        <DashboardLayout>
            <DashboardNavbar title={competitionName} />
            <MDBox my={3}>
                <MDBox mb={6}>
                    <Grid container spacing={3} alignItems='center'>
                        <Grid item xs={12} lg={6}>
                            <MDTypography variant='h4' fontWeight='medium'>
                                Make the changes below
                            </MDTypography>
                            <MDBox mt={1} mb={2}>
                                <MDTypography variant='body2' color='text'>
                                    We’re constantly trying to express ourselves and actualize our dreams. If you have
                                    the opportunity to play.
                                </MDTypography>
                            </MDBox>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <MDBox display='flex' justifyContent='flex-end'>
                                <MDButton variant='gradient' color='info'>
                                    save
                                </MDButton>
                            </MDBox>
                        </Grid>
                    </Grid>
                </MDBox>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={4}>
                        <ProductImage />
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <ProductInfo />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Socials />
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <Pricing />
                    </Grid>
                </Grid>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}
